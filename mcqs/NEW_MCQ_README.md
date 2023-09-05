
#### Q1. When a service is provided for root and is also added to the provider's configuration for a lazy-loaded module, what instance of that service does the
injector provide to constructors in the lazy-loaded module?

- [ ] A new instance of that service is created when the module is lazy loaded.
- [ ] Providing a service of the same type at a lazy-loaded module level is not allowed.
- [ ] If an instance of the service has not been created at the root level yet. it will create one there and then use it.
- [x] A single instance of that service is always instantiated at root and is the only one ever used, including within lazy modules.

#### Q2. What is the HostBinding decorator doing in this directive?

```javascript
@Directive ({
 selector: ' [appHighlight] '
})
export class HighlightDirective {
 @HostBinding('class.highlighted') highlight = true;
}
```

- [ ] It is adding the CSS class named highlighted to any DOM element that has the appHighlight directive on it.
- [ ] HostBinding does not do anything on directives, only on components.
- [x] It is specifying if the host element gets the highlighted class added to its class attribute, then the directive class field highlight will get set to
  true; and if it is not added on the host it will get set to false.
- [ ] It is creating an inline style on the host element with a CSS property named highlight set to true.

#### Q3. How does the emulated view encapsulation mode handle CSS for a component?

- [ ] It renders the CSS exactly how you wrote it without any changes.
- [ ] It makes use of shadow DOM markup and CSS.
- [x] It creates unique attributes for DOM elements and scopes the CSS selectors you write to those attribute ids.
- [ ] It renders all of the CSS rules you write as inline CSS on all of the DOM elements you use them on in the template.

#### Q4. With the following TestBed setup, what can be used to access the rendered DOM for the UserCardComponent?

```javascript
TestBed.configureTestingModule({
 declarations: [ UserCardComponent ]
});
let fixture = TestBed.createComponent(UserCardComponent);
```

- [x] `fixture.componentTemplate`
- [ ] `fixture.getComponentHtml()`
- [ ] `fixture.nativeElement`
- [ ] `fixture.componentInstance.template`

#### Q5. Given these two components, what will get rendered to the DOM based on the markup usage?

```javascript
@Component({
 selector: 'app-card',
 template: '<h1>Data Card</h1><ng-content></ng-content>'
})
export class CardComponent { }

@Component({
 selector: 'app-bio',
 template: '<ng-content></ng-content>.
})
export class BioComponent { }

// markup usage:
<app-card><app-bio>Been around for four years.</app-bio></app-card>
```

- [x] 
  
```javascript
 <app-card>
  <h1>Data Card</hl>
  <app-bio>
   Been around for four years.
  </app-bio> 
 </app-card>
```

- [ ]
  
```javascript
<h1>Data Card</h1>
 <app-bio>
  Been around for four years. 
 </app-bio>
```

- [ ]
  
```javascript
<app-card>
  <h1>Data Card</hl>
  <ng-content></ng-content>
  <app-bio>
   Been around for four years.
   <ng-content></ng-content>
  </app-bio> 
</app-card>
```

- [ ]

```javascript
<app-card>
  <h1>Data Card</hl> 
</app-card>
```

#### Q6. Given the app-title-card component in the code below, what DOM will the app-user-card component render?

```javascript
@Component({
   selector: 'app-user-card',
   template: '<app-title-card></app-title-card><p>3enny Smith</p>'
})

@Component({
   selector: 'app-title-card', 
   template: '<h1>User Data</hl>'
})

// usage of user card component in parent component html 
<app-user-card></app-user-card>
```

- [x] 

```javascript
<app-user-card>
    <app-title-card>
     <h1>User Data</h1> 
    </app-title-card> 
    <p>genny Smith</p>
</app-user-card>
```
- [ ]

```javascript
<h1>User Data</h1> 
<p>Jenny Smith<p>
```  

- [ ]

```javascript
<app-user-card>
    <app-title-card></app-title-card> 
</app-user-card>
```  

- [ ]

```javascript
<div app-user-card>
    <h1 app-title-card>User Data</h1> 
    <p>Jenny Smith</p>
</div>
```

#### Q7. Pick the matching code for the custom provider registration that the @Inject () decorator is looking for:

```javascript
constructor(@Inject('Logger') private logger) { }
```

- [ ] 
  
```javascript
providers: [ 
    Logger
]
```

- [x]
  
```javascript
providers: [
    { provide: 'Logger', useClass: Logger }
]
```

- [ ]
  
```javascript
@Injectable({ 
    providedln: 'root'
})
```

- [ ]

```javascript
providers: [
    { provide: 'Logger' }
]
```

#### Q8. Which choice best describes the following usage of the HttpClient . get method in the getsettings class method?

```javascript
export class SettingsService {  
    constructor(private httpClient: HttpClient) { }
    ...

getSettings()
{
    return this.httpClient.get < Settings > (this.settingsUrl)
        .pipe(
            retry(3)
        );
}}
```

- [ ] The RxJs pipe method is an alias for the subscribe method, so a call to `getSettings` will execute the get query. The retry operator is used to tell  
  the pipe call to retry the get query three times.
- [ ] It will produce an error at runtime because the pipe method is not available off of the `Httpclient.get` call.
- [ ] Every single call to the getSettings method will result in the Httpclient making three total get requests to the settingsUrl, which is not ideal  
  because there will always be two extra calls that are not needed. The retry operator should not be used in this manner.
- [x] When the result of the getSettings method is subscribed to, the HTTP GET call will be made; if it fails, it will be retried up to three times before it gives up and returns an error.

#### Q9. Working with AJAX, we may run into situations where a piece of code should not be run until after multiple AJAX calls have completed successfully. Say we need to call two external services for JSON data (a list of students, and a list of classes). And only after retrieving those data will we perform some manipulations on a page. What is the preferred way for dealing with this scenario?

`https://example.com/json-api/students`  
`https://example.com/json-api/classes`

- [ ]

```js
$.get(
  ['https://example.com/json-api/students', 'https://example.com/json-api/classes'],
  function (studentRequest, classRequest) {
    // the rest of the code goes here
  },
);
```

- [ ]

```js
$.when(
  $.get('https://example.com/json-api/students'),
  $.get('https://example.com/json-api/classes'),
).done(function (studentRequest, classRequest) {
  // the rest of the code goes here
});
```

- [ ]

```js
$.bind(
  $.get('https://example.com/json-api/students'),
  $.get('https://example.com/json-api/classes'),
).done(function (studentRequest, classRequest) {
  // the rest of the code goes here
});
```

- [x]

```js
$.ajax('https://example.com/json-api/students', {
  success: function (studentRequest) {
    $.ajax('https://example.com/json-api/classes', {
      success: function (classRequest) {
        // the rest of the code goes here
      },
    });
  },
});
```

#### Q10. Given the following HTML, how could we use one line to hide or show the button?

```html
<button class="btn btn-primary" type="submit">Continue to checkout</button>
```

- [x] `$('.btn-primary').toggle();`
- [ ] `$('.btn-primary').showHide();`
- [ ] `$('.btn-primary').not(':visible').show();`
- [ ] `$('.btn-primary').css({ display: 'block'});`

#### Q11. What's the difference between these two snippets?

```js
$('button').on('click', function () {
  alert('you clicked the button!');
});
$('button').click(function () {
  alert('you clicked the button!');
});
```

- [ ] Only the second one will work; jQuery does not have a function called `.on`.
- [ ] The second snippet will not function.
- [x] Nothing `.click(function)` is shorter way to write `.on('click', function)`.
- [ ] The first snippet will execute for every button on the page, the second will only apply to the first button.

#### Q12. What will this code print?

```js
var v = 1;
var f1 = function () {
  console.log(v);
};

var f2 = function () {
  var v = 2;
  f1();
};

f2();
```

- [ ] 2
- [x] 1
- [ ] Nothing - this code will throw an error.
- [ ] undefined

#### Q13. What does the following expression evaluate to?

```js
[] == [];
```

- [ ] True
- [ ] undefined
- [ ] []
- [x] False

#### Q14. What is the name of a function whose execution can be suspended and resumed at a later point?

- [x] Generator function
- [ ] Arrow function
- [ ] Async/ Await function
- [ ] Promise function

#### Q15. What will be logged to the console?

```js
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);
```

- [x] 101
- [ ] 3
- [ ] 4
- [ ] 100

#### Q16. What is one difference between collections created with Map and collections created with Object?

- [ ] You can iterate over values in a Map in their insertion order.
- [x] You can count the records in a Map with a single method call.
- [ ] Keys in Maps can be strings.
- [ ] You can access values in a Map without iterating over the whole collection.

#### Q17. What is the value of dessert.type after executing this code?

```js
const dessert = { type: 'pie' };
dessert.type = 'pudding';
```

- [ ] pie
- [ ] The code will throw an error.
- [x] pudding
- [ ] undefined

#### Q18. 0 && hi

- [ ] ReferenceError
- [ ] True
- [x] 0
- [ ] false

#### Q19. Which of the following operators can be used to do a short-circuit evaluation?

- [ ] \++
- [ ] \--
- [ ] \==
- [x] \|\|

#### Q20. Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?

- [ ] Student.parent = Person;
- [x] Student.prototype = new Person();
- [ ] Student.prototype = Person;
- [ ] Student.prototype = Person();

#### Q21. Why would you include a "use strict" statement in a JavaScript file?

- [ ] to tell parsers to interpret your JavaScript syntax loosely
- [x] to tell parsers to enforce all JavaScript syntax rules when processing your code
- [ ] to instruct the browser to automatically fix any errors it finds in the code
- [ ] to enable ES6 features in your code

#### Q22. Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?

- [ ] all of them
- [ ] const
- [x] var
- [ ] let

#### Q23. Which of the following values is not a Boolean false?

- [ ] Boolean(0)
- [ ] Boolean("")
- [ ] Boolean(NaN)
- [x] Boolean("false")

#### Q24. Which of the following is not a keyword in JavaScript?

- [ ] this
- [ ] catch
- [ ] function
- [x] array

#### Q25. Which variable is an implicit parameter for every function in JavaScript?

- [x] Arguments
- [ ] args
- [ ] argsArray
- [ ] argumentsList

#### Q26. For the following class, how do you get the value of 42 from an instance of X?

```js
class X {
  get Y() {
    return 42;
  }
}
```

- [ ] x.get('Y')
- [x] x.Y
- [ ] x.Y()
- [ ] x.get().Y

#### Q27. What is the result of running this code?

```js
sum(10, 20);
diff(10, 20);
function sum(x, y) {
  return x + y;
}

let diff = function (x, y) {
  return x - y;
};
```

- [ ] 30, ReferenceError, 30, -10
- [x] 30, ReferenceError
- [ ] 30, -10
- [ ] ReferenceError, -10

#### Q28. Why is it usually better to work with Objects instead of Arrays to store a collection of records?

- [ ] Objects are more efficient in terms of storage.
- [ ] Adding a record to an object is significantly faster than pushing a record into an array.
- [x] Most operations involve looking up a record, and objects can do that better than arrays.
- [ ] Working with objects makes the code more readable.

#### Q29. Which statement is true about the "async" attribute for the HTML script tag?

- [ ] It can be used for both internal and external JavaScript code.
- [ ] It can be used only for internal JavaScript code.
- [ ] It can be used only for internal or external JavaScript code that exports a promise.
- [x] It can be used only for external JavaScript code.

#### Q30. How do you import the lodash library making it top-level Api available as the "\_" variable?

- [x] import \_ from 'lodash';
- [ ] import 'lodash' as \_;
- [ ] import '\_' from 'lodash;
- [ ] import lodash as \_ from 'lodash';

#### Q31.What are three valid ways of adding CSS to an HTML page?

- [ ]
```markdown
1. External; CSS is written in a separate file.
2. Inline; CSS is added to the <head> of the HTML page.
3. Internal; CSS is included within the HTML tags.
```

- [ ]
```markdown
1. External; CSS is written in a separate file and is linked within the <header> element of the HTML file.
2. Inline; CSS is added to the HTML tag.
3. Internal; CSS is included within the <header> element of the HTML file.
```

- [ ]
```markdown
1. External; CSS is written in a separate file and is linked within the <head> element of the HTML file.
2. Internal; CSS is included within the <header> element of the HTML file.
3. Inline; CSS is added to the HTML tag.
```

- [x]
```markdown
1. External; CSS is written in a separate file and is linked within the <head> element of the HTML file .
2. Inline; CSS is added to the HTML tag.
3. Internal; CSS is included within the <head> element of the HTML file.
```

#### Q32. Which of the following is true of the SVG image format? (_Alternative_: Which statement about the SVG image format is true?)

- [ ] CSS can be applied to SVGs but JavaScript cannot be.
- [ ] SVGs work best for creating 3D graphics.
- [x] SVGs can be created as a vector graphic or coded using SVG specific elements such as &#x3C;svg&#x3E;, &#x3C;line&#x3E;, and &#x3C;ellipse&#x3E;.
- [ ] SVGs are a HAML-based markup language for creating vector graphics.

#### Q33. In the example below, when will the color pink be applied to the anchor element?

```css
a:active {
  color: pink;
}
```

- [ ] The color of the link will display as pink after its been clicked or if the mouse is hovering over the link.
- [ ] The color of the link will display as pink on mouse hover.
- [x] The color of the link will display as pink while the link is being clicked but before the mouse click is released.
- [ ] The color of the link will display as pink before it has been clicked.

#### Q34. To change the color of an SVG using CSS, which property is used?

- [ ] Use background-fill to set the color inside the object and stroke or border to set the color of the border.
- [ ] The color cannot be changed with CSS.
- [ ] Use fill or background to set the color inside the object and stroke to set the color of the border.
- [x] Use fill to set the color inside the object and stroke to set the color of the border.

#### Q35. When using position: fixed, what will the element always be positioned relative to?

- [ ] the closest element with position: relative
- [x] the viewport
- [ ] the parent element
- [ ] the wrapper element

#### Q36. By default, a background image will repeat `\_\_\_`

- [ ] only if the background-repeat property is set to repeat
- [x] indefinitely, vertically, and horizontally
- [ ] indefinitely on the horizontal axis only
- [ ] once, on the x and y axis

#### Q37. There are two sibling combinators that can be used to select elements contained within the same parent element; the general sibling combinator (~) and the adjacent sibling combinator (+). Referring to example below, which elements will the styles be applied to?

```css
h2 ~ p {
  color: blue;
}
h2 + p {
  background: beige;
}
```

```html
<section>
  <p>paragraph 1</p>
  <h2>Heading</h2>
  <p>paragraph 2</p>
  <p>paragraph 3</p>
</section>
```

- [ ] Paragraphs 2 and 3 will be blue. The h2 and paragraph 2 will have a beige background.
- [x] Paragraphs 2, and 3 will be blue, and paragraph 2 will have a beige background.
- [x] Paragraphs 2 and 3 will be blue. Paragraph 2 will have a beige background.
- [ ] Paragraph 2 will be blue. Paragraphs 2 and 3 will have a beige background.

#### Q38. What is the difference between `<input type="submit" value="click me">` and `<button type="submit">Click me</button>`?

- [ ] There is no difference. Both will render a button that submits a form.
- [x] Both will submit a form. However, the `<button>` can have content other than text, like an image or nested HTML elements, while the `<input>` cannot.
- [ ] `<input type="button">` has been deprecated in HTML5. You should use the `<button>` tag instead.
- [ ] Both will submit a form. However, the `<input>` can have content other than text, like an image or nested HTML elements, while the `<button>` cannot.

#### Q39. Review the code below. What is the absolute URL for a page called **page.html**?

```html
<base href="http://www.linkedin.com/dir/" />
```

- [x] `http://www.linkedin.com/dir/page.html`
- [ ] `page.html`
- [ ] `http://www.linkedin.com/page.html`
- [ ] `dir/page.html`

#### Q40. Review the code below. How do you include subnavigation for Link 2 that includes a link?

```html
<ul>
  <li><!a href="#">Link 1</a></li>
  <li><!a href="#">Link 2</a>
    <ul>
      <li><!a href="#">Link 2a</a></li>
    </ul>
  </li>
  <li><!a href="#">Link 3</a></li>
</ul>
```

- [ ]
```html
<nav><ul>
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
    <ul>
      <li><a href="#">Link 2a</a></li>
    </ul>
  <li><a href="#">Link 3</a></li> 
</ul></nav>
```

- [x]
```html
<nav><ul>
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a>
    <ul>
      <li><a href="#">Link 2a</a></li>
    </ul>
  </li>
  <li><a href="#">Link 3</a></li>
</ul></nav>
```

- [ ]
```html
<ul><nav>
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a>
    <ul><nav>
      <li><a href="#">Link 2a</a></li>
    </nav></ul>
  </li>
  <li><a href="#">Link 3</a></li>
</nav></ul>
```

- [ ]
```html
<nav><ul>
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
  <nav><ul>
    <li><a href="#">Link 2a</a></li>
  </ul></nav>
  <li><a href="#">Link 3</a></li>
</ul></nav>
```

#### Q41. What is the purpose of the `class` attribute?

- [ ] Classes allow CSS to select specific elements on the page. You may list as many class names within the class attribute as you wish,
      separated by spaces.
- [ ] Classes allow CSS and JavaScript to select specific elements on the page. You may list only one class name per class attribute.
- [ ] Classes allow CSS to select specific elements on the page. You may list only one class name per class attribute.
- [x] Classes allow CSS and JavaScript to select specific elements on the page. You may list as many class names within the class attribute
      as you wish, separated by spaces.
