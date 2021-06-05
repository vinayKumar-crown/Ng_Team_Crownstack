import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow-dom',
  templateUrl: './shadow-dom.component.html',
  styleUrls: ['./shadow-dom.component.scss']
})
export class ShadowDomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.basicExample();
    this.countWords();
  }

  basicExample() {
    let element: any = document.getElementById('container') as HTMLElement;
    let root = element.attachShadow({ mode: 'open' });

    //Inside element
    let p = document.createElement('p');
    p.textContent = 'Shadow DOM Element';
    p.id = 'inside';
    root.appendChild(p);

    // With this you can edit the style of Shadow DOM
    // element.shadowRoot.innerHTML = `<style>
    //   p {
    //       color: green;
    //     }
    //   </style>
    //   <p id="inside">Shadow DOM Element</p>`;

    //Access inside element
    console.log(element.shadowRoot.querySelector('#inside'));
  }

  countWords() {
    const element: any = document.getElementById('wordCount');
    const count = `Words: ${this.counting()}`;
     // Create a shadow root
     const shadow = element.attachShadow({mode: 'open'});

     // Create text node and add word count to it
     const text = document.createElement('span');
     text.textContent = count;
 
     // Append it to the shadow root
     shadow.appendChild(text);
 
     // Update count when element content changes
     setInterval(() => {
       const count = `Words: ${this.counting()}`;
       text.textContent = count;
     }, 200);
  }

  counting() {
    const element: any = document.getElementById('articleContent');
    const text = element.innerText || element.textContent;
    return text.split(/\s+/g).length;
  }

}
