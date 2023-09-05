#### Q1. What are the best examples of void elements?

- [ ] `<link><meta><title>`
- [x] `<br><base><source>`
- [ ] `<input><br><p>`
- [ ] `<area><embed><strong>`

#### Q2. What is the best way to apply bold styling to text?

- [x] `<strong>`
- [ ] Use CSS.
- [ ] `<bold>`
- [ ] `<b>`

#### Q3. The "value" attribute is associated with which set of tags?

- [ ] `<button><input><form>`
- [ ] `<input><label><meter>`
- [ ] `<input><option><textarea>`
- [x] `<li><input><option>`

#### Q4. What should fill the two blanks in the HTML code below?

```html
<address ______ _____>
  <span itemprop="streetAddress">6410 Via Real</span><br />
  <span itemprop="addressLocality">Carpinteria</span>,
  <span itemprop="addressRegion">CA</span>
  <span itemprop="addressCode">93013</span>
</address>
```

- [x] `itemscope` `itemtype="http://schema.org/PostalAddress"`
- [ ] `itemsref="http://schema.org/PostalAddress"` `itemid="address"`
- [ ] `itemscope` `itemref="http://schema.org/PostalAddress"`
- [ ] `itemid="address"` `itemtype="http://schema.org/PostalAddress"`

#### Q5. When should you use the `<aside>` element?

- [x] when the content can be removed without detracting from the page's message
- [ ] for anything you want to move to the side, like a pull quote box, a sidebar, or an image with text wrapping around it
- [ ] for anything in parentheses
- [ ] for anything in a sidebar

#### Q6. What is the best way to code the sample shown?
![Sample text](images/ss-2.png?raw=true)

- [ ]
```html
<details>
  <summary>Parmesan Deviled Eggs</summary>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details>
```

- [ ]
```html
<h4>▸ Parmesan Deviled Eggs</h4>
<p>
  These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
</p>
```

- [x]
```html
<details open>
  <summary>Parmesan Deviled Eggs</summary>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details>
```

- [ ]
```html
<details>
  <h4>▸ Parmesan Deviled Eggs</h4>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details>
```

#### Q7. What is the difference between the post and get methods in a form?

- [ ] post is used for sending information to the server. get is used for retrieving form information from the server.
- [ ] get is used for sending information to the server. post is used for retrieving form information from the server.
- [ ] With get, data is included in the form body when send to the server. With post, the data goes through the URL.
- [x] With post, data is included in the form body when send to the server. With get, the data goes through the URL.

#### Q8. What should fill the blank in the HTML code bellow?

```html
<form method="post" action="mailto:info@linkedin.com" ____="text/plain"></form>
```

- [x] enctype
- [ ] media
- [ ] type
- [ ] rel

#### Q9. In the code below, what is the purpose of the **id** attribute?

```html
<p id="warning">Be careful when installing this product.</p>
```

- [x] It establishes that id is a unique identifier in the document, used for styling CSS, scripting, and linking within a webpage.
- [ ] It establishes that id is a unique identifier in the document, used for styling CSS and with Javascript code.
- [ ] It establishes that id may be used for styling CSS several times per page.
- [ ] It establishes that id is a unique identifier in the website, used for styling CSS, scripting, and linking within a webpage.

#### Q10. What is the best semantic markup for the sentence shown?

```markdown
On July 21, 1969, Neil Armstrong said, "One small step for man, one giant leap for mankind."
```

- [x]

```html
<p>
  On <time datetime="1969-07-21">July 21, 1969</time>, Neil Armstrong said,
  <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"
    >One small step for man, one giant leap for mankind.</q
  >
</p>
```

- [ ]

```html
<p>
  On July 21, 1969, Neil Armstrong said,
  <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"
    >One small step for man, one giant leap for mankind.</q
  >
</p>
```

- [ ]

```html
<p>
  On July 21, 1969, Neil Armstrong said, <q>One small step for man, one giant leap for mankind.</q>
</p>
```

- [ ]

```html
<p>
  On <time datetime="07-21-1969">July 21, 1969</time>, Neil Armstrong said,
  <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"
    >One small step for man, one giant leap for mankind.</q
  >
</p>
```

#### Q11. Review the text in the red box in the image shown. What is the best way to code this in HTML?

![Image of footer](images/ss-3.png?raw=true)

- [ ] ordered list
- [x] unordered list inside a nav element
- [ ] ordered list inside a nav element
- [ ] unordered list

#### Q12. What does the code shown below accomplish?

```html
<picture>
  <source srcset="image1.jpg" media="(min-width: 1000px)" />
  <source srcset="image2.jpg" media="(min-width: 750px)" />
  <img src="image3.jpg" />
</picture>
```

- [ ] It displays image1.jpg at 1000px and higher, image2.jpg at 750-999px, and image3.jpg at 749px and lower.
- [ ] It displays image1.jps at 1000px and higher and image2.jpg at 750-999px, image3.jpg is a default in case `<picture>` is not supported.
- [x] It displays image1.jpg at 1000px and higher and image2.jpg at 750px and higher, image3.jpg is a default in case `<picture>` is not supported.
- [ ] It displays image1.jpg, image2.jpg and image3.jpg at 1000px and higher.

#### Q13. What code will produce this table?

![Table with yellow background](images/ss-4.png?raw=true)

- [ ]
```html
<table>
  <scope cols="2" style="background-color: yellow">
  <tr>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </tr>
  <tr>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

- [x]
```html
<table>
  <colgroup span="2" style="background-color: yellow">
  <tr>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </tr>
  <tr>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

- [ ]
```html
<table>
  <group cols="2" style="background-color: yellow">
  <tr scope="row">
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </tr>
  <tr scope="row">
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

- [ ]
```html
<table>
  <columns colspan="2" style="background-color: yellow">
  <tr>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
  </tr>
  <tr>
    <td>first</td>
    <td>second</td>
    <td>third</td>
  </tr>
</table>
```

#### Q14. Which HTML snippet links back to the very top of a webpage?

- [x]
```html
<a id="top"></a>

<!-- placed at the top of the page -->

<a href="#top">back to top</a>
```

- [ ]
```html
<a name="top"></a>

<!-- placed at the top of the page -->

<a href="#top">back to top</a>
```

- [ ]
```html
<a href="#">back to top</a> <a href="#top">back to top</a>
```

- [ ]
```html
<button href="#">back to top</button> <button href="#top">back to top</button>
```

#### Q15. What does the `<label>` tag do?

- [ ] It labels webpages with important information.
- [ ] It visually associates a text label with an interface element.
- [ ] It visually labels from fields.
- [x] It programmatically associates a text label with an interface element.

#### Q16. Which choice uses the correct terminology in describing this markup: `<p>info</p>`?

- [ ] The element opener is `<p>`, the element closer is `</p>`, and the element information is info.
- [ ] The start tag is `<p>`, the end tag is `</p>`, and the enclosed HTML is info.
- [x] The start tag is `<p>`, the end tag is `</p>`, and the element content is info.
- [ ] The start element is `<p>`, the end element is `</p>`, and the tag content is info.

#### Q17. What is the difference between `<input type="submit" value="click me">` and `<button type="submit">Click me</button>`?

- [ ] There is no difference. Both will render a button that submits a form.
- [x] Both will submit a form. However, the `<button>` can have content other than text, like an image or nested HTML elements, while the `<input>` cannot.
- [ ] `<input type="button">` has been deprecated in HTML5. You should use the `<button>` tag instead.
- [ ] Both will submit a form. However, the `<input>` can have content other than text, like an image or nested HTML elements, while the `<button>` cannot.

#### Q18. Review the code below. What is the absolute URL for a page called **page.html**?

```html
<base href="http://www.linkedin.com/dir/" />
```

- [x] `http://www.linkedin.com/dir/page.html`
- [ ] `page.html`
- [ ] `http://www.linkedin.com/page.html`
- [ ] `dir/page.html`

#### Q19. Review the code below. How do you include subnavigation for Link 2 that includes a link?

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

#### Q20. What is the purpose of the `class` attribute?

- [ ] Classes allow CSS to select specific elements on the page. You may list as many class names within the class attribute as you wish,
      separated by spaces.
- [ ] Classes allow CSS and JavaScript to select specific elements on the page. You may list only one class name per class attribute.
- [ ] Classes allow CSS to select specific elements on the page. You may list only one class name per class attribute.
- [x] Classes allow CSS and JavaScript to select specific elements on the page. You may list as many class names within the class attribute
      as you wish, separated by spaces.

#### Q21. In the following example, which selector has the highest specificity ranking for selecting the anchor link element?

```css
ul li a
a
.example a
div a
```

- [x] `.example a`
- [ ] `div a`
- [ ] `a`
- [ ] `ul li a`

#### Q22. Using an attribute selector, how would you select an `<a>` element with a "title" attribute?

- [x] a[title]{...}
- [ ] a > title {...}
- [ ] a.title {...}
- [ ] a=title {...}

#### Q23. CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or it you need to support older browser version. What are two valid techniques used to clear floats?

- [ ] Use the "clearfix hack" on the floated element and add a float to the parent element.
- [ ] Use the overflow property on the floated element or the "clearfix hack" on either the floated or parent element.
- [ ] Use the "clearfix hack" on the floated element or the overflow property on the parent element.
- [x] Use the "clearfix hack" on the parent element or use the overflow property with a value other than "visible."

#### Q24. What element(s) do the following selectors match to?

`1) .nav {...}`
`2) nav {...}`
`3) #nav {...}`

- [ ]
```markdown
1. An element with an ID of "nav"
2. A nav element
3. An element with a class of "nav"
```

- [ ]
```markdown
They all target the same nav element.
```

- [x]
```markdown
1. An element with an class of "nav"
2. A nav element
3. An element with a id of "nav"
```

- [ ]
```markdown
1. An element with an class of "nav"
2. A nav element
3. An div with a id of "nav"
```

#### Q25. When adding transparency styles, what is the difference between using the opacity property versus the background property with an `rgba()` value?

- [ ] Opacity specifies the level of transparency of the child elements. Background with an `rgba()` value applies transparency to the background color only.
- [ ] Opacity applies transparency to the background color only. Background with an `rgba()` value specifies the level of transparency of an element, as a whole, including its content.
- [x] Opacity specifies the level of transparency of an element, including its content. Background with an `rgba()` value applies transparency to the background color only.
- [ ] Opacity applies transparency to the parent and child elements. Background with an `rgba()` value specifies the level of transparency of the parent element only.

#### Q26. What is true of block and inline elements? (_Alternative_: Which statement about block and inline elements is true?)

- [ ] By default, block elements are the same height and width as the content container between their tags; inline elements span the entire width of its container.
- [x] By default, block elements span the entire width of its container; inline elements are the same height and width as the content contained between their tags.
- [ ] A `<nav>` element is an example of an inline element. `<header>` is an example of a block element.
- [ ] A `<span>` is an example of a block element. `<div>` is an example of an inline element.

#### Q27. CSS grid introduced a new length unit, fr, to create flexible grid tracks. Referring to the code sample below, what will the widths of the three columns be?

```css
.grid {
  display: grid;
  width: 500px;
  grid-template-columns: 50px 1fr 2fr;
}
```

- [ ] The first column will have a width of 50px. The second column will be 50px wide and the third column will be 100px wide.
- [x] The first column will have a width of 50px. The second column will be 150px wide and the third column will be 300px wide.
- [ ] The first column will have a width of 50px. The second column will be 300px wide and the third column will be 150px wide.
- [ ] The first column will have a width of 50px. The second column will be 500px wide and the third column will be 1000px wide.

#### Q28. What is the line-height property primarily used for?

- [x] to control the height of the space between two lines of content
- [ ] to control the height of the space between heading elements
- [ ] to control the height of the character size
- [ ] to control the width of the space between characters

#### Q29. In the shorthand example below, which individual background properties are represented?

`background: blue url(image.jpg) no-repeat scroll 0px 0px;`

- [x]
```css
background-color: blue;
background-image: url(image.jpg);
background-repeat: no-repeat;
background-attachment: scroll;
background-position: 0px 0px;
```

- [ ]
```css
background-color: blue;
background-img: url(image.jpg);
background-position: no-repeat;
background-scroll: scroll;
background-size: 0px 0px;
```

- [ ]
```css
background-color: blue;
background-src: url(image.jpg);
background-repeat: no-repeat;
background-wrap: scroll;
background-position: 0px 0px;
```

- [ ]
```css
background-color: blue;
background-src: url(image.jpg);
background-repeat: no-repeat;
background-scroll: scroll;
background-position: 0px 0px;
```

#### Q30. In the following example, according to cascading and specificity rules, what color will the link be?

```css
.example {
  color: yellow;
}
ul li a {
  color: blue;
}
ul a {
  color: green;
}
a {
  color: red;
}
```

```html
<ul>
  <li><a href="#" class="example">link</a></li>
  <li>list item</li>
  <li>list item</li>
</ul>
```

- [ ] green
- [x] yellow
- [ ] blue
- [ ] red

#### Q31. When elements overlap, they are ordered on the z-axis (i.e., which element covers another). The z-index property can be used to specify the z-order of overlapping elements. Which set of statements about the z-index property are true?

- [x] Larger z-index values appear on top of elements with a lower z-index value. Negative and positive numbers can be used. z-index can only be used on positioned elements.
- [ ] Smaller z-index values appear on top of elements with a larger z-index value. Negative and positive numbers can be used. z-index must also be used with positioned elements.
- [ ] Larger z-index values appear on top of elements with a lower z-index value. Only positive numbers can be used. z-index must also be used with positioned elements.
- [ ] Smaller z-index values appear on top of elements with a larger z-index value. Negative and positive numbers can be used. z-index can be used with or without positioned elements.

#### Q32. What is the difference between the following line-height settings?

```css
line-height: 20px
line-height: 2
```

- [x] The value of 20px will set the line-height to 20px. The value of 2 will set the line-height to twice the size of the corresponding font-size value.
- [ ] The value of 20px will set the line-height to 20px. The value of 2 is not valid.
- [ ] The value of 20px will set the line-height to 20px. The value of 2 will default to a value of 2px.
- [ ] The value of 20px will set the line-height to 20px. The value of 2 will set the line-height to 20% of the corresponding font-size value.

#### Q33. In the following example, what color will paragraph one and paragraph two be? (_Alternative_: In this example, what color will paragraphs one and two be?)

```html
<section>
  <p>paragraph one</p>
</section>

<p>paragraph two</p>
```

```css
section p {
  color: red;
}
section + p {
  color: blue;
}
```

- [ ] Paragraph one will be blue, paragraph two will be red.
- [ ] Both paragraphs will be blue.
- [x] Paragraphs one will be red, paragraph two will be blue.
- [ ] Both paragraphs will be red.

#### Q34.What are three valid ways of adding CSS to an HTML page?

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

#### Q35. Which of the following is true of the SVG image format? (_Alternative_: Which statement about the SVG image format is true?)

- [ ] CSS can be applied to SVGs but JavaScript cannot be.
- [ ] SVGs work best for creating 3D graphics.
- [x] SVGs can be created as a vector graphic or coded using SVG specific elements such as &#x3C;svg&#x3E;, &#x3C;line&#x3E;, and &#x3C;ellipse&#x3E;.
- [ ] SVGs are a HAML-based markup language for creating vector graphics.

#### Q36. In the example below, when will the color pink be applied to the anchor element?

```css
a:active {
  color: pink;
}
```

- [ ] The color of the link will display as pink after its been clicked or if the mouse is hovering over the link.
- [ ] The color of the link will display as pink on mouse hover.
- [x] The color of the link will display as pink while the link is being clicked but before the mouse click is released.
- [ ] The color of the link will display as pink before it has been clicked.

#### Q37. To change the color of an SVG using CSS, which property is used?

- [ ] Use background-fill to set the color inside the object and stroke or border to set the color of the border.
- [ ] The color cannot be changed with CSS.
- [ ] Use fill or background to set the color inside the object and stroke to set the color of the border.
- [x] Use fill to set the color inside the object and stroke to set the color of the border.

#### Q38. When using position: fixed, what will the element always be positioned relative to?

- [ ] the closest element with position: relative
- [x] the viewport
- [ ] the parent element
- [ ] the wrapper element

#### Q39. By default, a background image will repeat `\_\_\_`

- [ ] only if the background-repeat property is set to repeat
- [x] indefinitely, vertically, and horizontally
- [ ] indefinitely on the horizontal axis only
- [ ] once, on the x and y axis

#### Q40. There are two sibling combinators that can be used to select elements contained within the same parent element; the general sibling combinator (~) and the adjacent sibling combinator (+). Referring to example below, which elements will the styles be applied to?

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

#### Q41. Review the code below. Which statement calls the addTax function and passes 50 as an argument?
```js
function addTax(total) {
  return total * 1.05;
}
```

- [ ] addTax = 50;
- [ ] return addTax 50;
- [x] addTax(50);
- [ ] addTax 50;

#### Q42. Which statement is the correct way to create a variable called rate and assign it the value 100?

- [x] let rate = 100;
- [ ] let 100 = rate;
- [ ] 100 = let rate;
- [ ] rate = 100;

#### Q43. Which statement creates a new object using the Person constructor?

- [x] var student = new Person();
- [ ] var student = construct Person;
- [ ] var student = Person();
- [ ] var student = construct Person();

#### Q44. When would the final statement in the code shown be logged to the console?

```js
let modal = document.querySelector('#result');
setTimeout(function(){
    modal.classList.remove('hidden);
}, 10000);
console.log('Results shown');
```

- [ ] after 10 second
- [ ] after results are received from the HTTP request
- [ ] after 10000 seconds
- [x] immediately

#### Q45. When would 'results shown' be logged to the console?

```js
let modal = document.querySelector('#results');
setTimeout(function () {
  modal.classList.remove('hidden');
}, 10000);
```

- [x] immediately
- [ ] after results are received from the HTTP request
- [ ] after 10 second
- [ ] after 10,000 seconds

#### Q46. You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?

```js
for (var i = 1; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 10000);
}
```

- [ ]
```javascript
for (var i = 1; i <= 4; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(j);
}
```

- [ ]
```javascript
while (var i=1; i<=4; i++) {
  setTimeout(function() {
    console.log(i);
    }, i*1000);
}
```

- [x]
```javascript
for (var i = 1; i <= 4; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

- [ ]
```javascript
for (var j = 1; j <= 4; j++) {
  setTimeout(function () {
    console.log(j);
  }, j * 1000);
}
```

#### Q47. How does a function create a closure?

- [ ] It reloads the document whenever the value changes.
- [x] It returns a reference to a variable in its parent scope.
- [ ] It completes execution without returning.
- [ ] It copies a local variable to the global scope.

#### Q48. Which statement creates a new function called discountPrice?

- [x]
```js
let discountPrice = function (price) {
  return price * 0.85;
};
```

- [ ]
```js
let discountPrice(price) {
  return price * 0.85;
};
```

- [ ]
```js
let function = discountPrice(price) {
  return price * 0.85;
};
```

- [ ]
```js
discountPrice = function (price) {
  return price * 0.85;
};
```

#### Q49. What is the result in the console of running the code shown?

```js
var Storm = function () {};
Storm.prototype.precip = 'rain';
var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';
var bob = new WinterStorm();
console.log(bob.precip);
```

- [ ] Storm()
- [ ] undefined
- [ ] 'rain'
- [x] 'snow'

#### Q50. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?

- [ ] /[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/
- [ ] /\d\d:\d\d:\d\d/
- [ ] /[0-9]+:[0-9]+:[0-9]+/
- [ ] / : : /

NOTE: the first three expressions will all match. Question seem to be incorrect.

#### Q51. What is the result in the console of running this code?

```js
'use strict';
function logThis() {
  this.desc = 'logger';
  console.log(this);
}
new logThis();
```

- [ ] undefined
- [ ] window
- [x] {desc: "logger"}
- [ ] function

#### Q52. How would you reference the text 'avenue' in the code shown?

```js
let roadTypes = ['street', 'road', 'avenue', 'circle'];
```

- [ ] roadTypes.2
- [ ] roadTypes\[3\]
- [ ] roadTypes.3
- [x] roadTypes\[2\]

#### Q53. What is the result of running this statement?

```javascript
console.log(typeof 42);
```

- [ ] 'float'
- [ ] 'value'
- [x] 'number'
- [ ] 'integer'

#### Q54. Which property references the DOM object that dispatched an event?

- [ ] self
- [ ] object
- [x] target
- [ ] source

#### Q55. You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?

```js
function addNumbers(x, y) {
  if (isNaN(x) || isNaN(y)) {
  }
}
```

- [ ] exception('One or both parameters are not numbers')
- [ ] catch('One or both parameters are not numbers')
- [ ] error('One or both parameters are not numbers')
- [x] throw('One or both parameters are not numbers')

#### Q56. Which method converts JSON data to a JavaScript object?

- [ ] JSON.fromString();
- [x] JSON.parse()
- [ ] JSON.toObject()
- [ ] JSON.stringify()

#### Q57. When would you use a conditional statement?

- [ ] When you want to reuse a set of statements multiple times.
- [x] When you want your code to choose between multiple options.
- [ ] When you want to group data together.
- [ ] When you want to loop through a group of statement.

#### Q58. What would be the result in the console of running this code?

```js
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

- [ ] 12345
- [ ] 1234
- [x] 01234
- [ ] 012345

#### Q59. Which Object method returns an iterable that can be used to iterate over the properties of an object?

- [ ] Object.get()
- [ ] Object.loop()
- [ ] Object.each()
- [x] Object.keys()

#### Q60. What will be logged to the console?

```js
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);
```

- [x] 101
- [ ] 3
- [ ] 4
- [ ] 100

#### Q61. What is one difference between collections created with Map and collections created with Object?

- [ ] You can iterate over values in a Map in their insertion order.
- [x] You can count the records in a Map with a single method call.
- [ ] Keys in Maps can be strings.
- [ ] You can access values in a Map without iterating over the whole collection.

#### Q62. What is the value of dessert.type after executing this code?

```js
const dessert = { type: 'pie' };
dessert.type = 'pudding';
```

- [ ] pie
- [ ] The code will throw an error.
- [x] pudding
- [ ] undefined

#### Q63. 0 && hi

- [ ] ReferenceError
- [ ] True
- [x] 0
- [ ] false

#### Q64. Which of the following operators can be used to do a short-circuit evaluation?

- [ ] \++
- [ ] \--
- [ ] \==
- [x] \|\|

#### Q65. Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?

- [ ] Student.parent = Person;
- [x] Student.prototype = new Person();
- [ ] Student.prototype = Person;
- [ ] Student.prototype = Person();

#### Q66. Why would you include a "use strict" statement in a JavaScript file?

- [ ] to tell parsers to interpret your JavaScript syntax loosely
- [x] to tell parsers to enforce all JavaScript syntax rules when processing your code
- [ ] to instruct the browser to automatically fix any errors it finds in the code
- [ ] to enable ES6 features in your code

#### Q67. Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?

- [ ] all of them
- [ ] const
- [x] var
- [ ] let

#### Q68. Which of the following values is not a Boolean false?

- [ ] Boolean(0)
- [ ] Boolean("")
- [ ] Boolean(NaN)
- [x] Boolean("false")

#### Q69. Which of the following is not a keyword in JavaScript?

- [ ] this
- [ ] catch
- [ ] function
- [x] array

#### Q70. Which variable is an implicit parameter for every function in JavaScript?

- [x] Arguments
- [ ] args
- [ ] argsArray
- [ ] argumentsList

#### Q71. For the following class, how do you get the value of 42 from an instance of X?

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

#### Q72. What is the result of running this code?

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

#### Q73. Why is it usually better to work with Objects instead of Arrays to store a collection of records?

- [ ] Objects are more efficient in terms of storage.
- [ ] Adding a record to an object is significantly faster than pushing a record into an array.
- [x] Most operations involve looking up a record, and objects can do that better than arrays.
- [ ] Working with objects makes the code more readable.

#### Q74. Which statement is true about the "async" attribute for the HTML script tag?

- [ ] It can be used for both internal and external JavaScript code.
- [ ] It can be used only for internal JavaScript code.
- [ ] It can be used only for internal or external JavaScript code that exports a promise.
- [x] It can be used only for external JavaScript code.

#### Q75. How do you import the lodash library making it top-level Api available as the "\_" variable?

- [x] import \_ from 'lodash';
- [ ] import 'lodash' as \_;
- [ ] import '\_' from 'lodash;
- [ ] import lodash as \_ from 'lodash';

#### Q76. What does the following expression evaluate to?

```js
[] == [];
```

- [ ] True
- [ ] undefined
- [ ] []
- [x] False

#### Q77. What is the name of a function whose execution can be suspended and resumed at a later point?

- [x] Generator function
- [ ] Arrow function
- [ ] Async/ Await function
- [ ] Promise function

#### Q78. What will this code print?

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

#### Q79. What's the difference between these two snippets?

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

#### Q80. What does the following line of code do?

`jQuery('p')`

- [ ] Loads a paragraph tag from a remote server using AJAX
- [ ] Aliases jQuery to a variable p
- [x] Selects all paragraphs on the page
- [ ] Creates a new paragraph tag and inserts it into the body tag

#### Q81. Given the following HTML, how could we use one line to hide or show the button?

```html
<button class="btn btn-primary" type="submit">Continue to checkout</button>
```

- [x] `$('.btn-primary').toggle();`
- [ ] `$('.btn-primary').showHide();`
- [ ] `$('.btn-primary').not(':visible').show();`
- [ ] `$('.btn-primary').css({ display: 'block'});`

#### Q82. Working with AJAX, we may run into situations where a piece of code should not be run until after multiple AJAX calls have completed successfully. Say we need to call two external services for JSON data (a list of students, and a list of classes). And only after retrieving those data will we perform some manipulations on a page. What is the preferred way for dealing with this scenario?

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

#### Q83. Given the snippet of HTML below, what is the difference between the two lines that follow it?

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

```js
$('ul').find('li').get(2);
$('ul').find('li').eq(2);
```

- [x] .get() retrieves a DOM element, and can't be chained, eq() retrieves a jQuery object, and can be chained.
- [ ] .get() retrieves a jQuery object, and can't be chained, eq() retrieves a DOM element, and can be chained.
- [ ] .get() retrieves a jQuery object, and is zero-indexed, eq() retrieves a DOM element, and is 1-indexed.
- [ ] .get() retrieves a DOM element, and is zero-indexed, eq() retrieves a jQuery object, and is 1-indexed.

#### Q84. Suppose we want to have a ball created from an HTML element (id=ball) move down and to the right from its original location when clicked, and move back into its original place when finished. Given a starting point of this, which of these snippets would accomplish that goal?

```js
$('#ball').click(function () {
  // Our code goes here
});
```

- [x]

```js
$(this).animate(
  { top: '+=100', left: '+=100' },
  {
    duration: 600,
    complete: function () {
      $(this).animate({ top: '-=100', left: '-=100' }, 600);
    },
  },
);
```

- [ ]

```js
$(this).animate({ top: '-=100', left: '-=100' }, 600, function () {
  $(this).animate({ top: '+=100', left: '+=100' }, 600);
});
```

- [ ]

```js
$(this).animate(
  { top: '=100', left: '=100' },
  {
    duration: 600,
    complete: function () {
      $(this).animate({ top: 0, left: 0 }, 600);
    },
  },
);
```

- [ ]

```js
$(this).animate({ top: '100', left: '100' }, 600, function () {
  $(this).animate({ top: 0, left: 0 }, 600);
});
```

#### Q85. Given the following CSS and HTML codes below, how could you apply the success class to the feedback div?

```css
.success {
  color: green;
  background: #ddffdd;
}
```

```html
<div class="feedback">Thank you for answering this survey.</div>
```

- [ ] `$('.feedback').hasClass('.success');`
- [ ] `$.css('.feedback', '.success')`;
- [x] `$('.feedback').addClass('success');`
- [ ] `$('.feedback').css('.success');`

#### Q86. The following page snippet includes a couple of messages in a list, and a code snippet that retrieves a few hundred messages from an API endpoint using AJAX. How can you add these new items to the .message-area--list element in the most performant way?

```html
<div class="message-area">
  <ul class="message-area--list">
    <li>Existing message 1</li>
    <li>Existing message 2</li>
  </ul>
</div>

$.get('//example.com/api/v1/message').done(function (data) { var tonsOfItems = data.messages; // add
all these messages to a large page });
```

- [ ]

```js
tonsOfItems.map(function (item) {
  $('.message-area--list').append('<li>' + item + '</li>');
});
```

- [x]

```js
var tonsOfListItems = tonsOfItems.map(function (item) {
  return '<li>' + item + '</li>';
});
$('.message-area--list').append(tonsOfListItems.join(''));
```

- [ ]

```js
CSS.$messageList = $('.message-area--list');
$.each(tonsOfItems, function (idx, item) {
  $('<li>' + item + '</li>').appendTo($messageList);
});
```

- [ ]

```js
$.each(tonsOfItems, function (idx, item) {
  $('.message-area--list').append('<li>' + item + '</li>');
});
```

#### Q87. What is jQuery?

- [ ] jQuery is a bridge between Java and Javascript that makes native apps easier to write.
- [ ] jQuery is a plugin for JavaScript that makes database queries easier to write.
- [x] jQuery is a collection of JavaScript functions that makes finding and manipulating elements on a page, AJAX, and other things easier.
- [ ] jQuery is a Chrome extension that allows users to create their own extensions with just a few lines of JavaScript.

#### Q88. We want to create a new jQuery plugin called linkUpdater that can be chained onto other jQuery selector like a normal plugin. It should update all the links in the referenced collection so they open in new windows or tabs. Below is the first cut. What is one problem with this plugin?

```js
'user strict';
($.linkUpdater = function () {
  this.find('a').attr('target', '_blank');
})(jQuery);
```

- [ ] this needs to be wrapped, like `$(this)`, in order to be chained in a plugin.
- [ ] jQuery plugins can't be safely authored in strict mode.
- [ ] In order to be used by other code, plugins need to be added to the global namespace, not wrapped in a function expression.
- [x] Our plugin should extend jQuery.fn, not jQuery itself.

#### Q89. Generally speaking, when used on a web page, how should jQuery be installed, and why?

- [x] Just before the closing body tag, because we want to avoid blocking other resources from loading, and we use the ready method to make sure our code fires after the DOM is ready
- [ ] Using the highest version number possible because only jQuery 3 and up are compatible with Internet Explorer 7
- [ ] In the head tag because we want jQuery available as soon as possible
- [ ] From a CDN because we want to be able to use jQuery online or offline

#### Q90. Given the following HTML, how could we make this button disappear from the page using jQuery?

```html
<button class="btn btn-primary" type="submit">Continue to checkout</button>
```

- [x] `$('.btn-primary').hide();`
- [ ] `$('.btn-primary:visible').not();`
- [ ] `$('.btn-primary').visibility(false);`
- [ ] `$('.btn-primary').show(false);`

#### Q91. What is the purpose of the ViewChild decorator in this component class?

```javascript
@Component({
    ...
    template: '<p #bio></p>'
})
export class UserDetailsComponent {
    @ViewChild('bio') bio;
}
```

- [x] It provides access from within the component class to the ElementRef object for the `<p>` tag that has the bio template reference variable in the component's template view.
- [ ] It indicates that the `<p>` tag be rendered as a child of the parent view that uses this component.
- [ ] It makes the `<p>` tag in the template support content projection.
- [ ] It makes the `<p>` tag visible in the final render. If the #bio was used in the template and the @ViewChild was not used in the class, then Angular would automatically hide the `<p>` tag that has #bio on it.

#### Q92. What method is used to wire up a FormControl to a native DOM input element in reactive forms?

- [ ] Add the string name given to the FormControl to an attribute named controls on the <form> element to indicate what fields it should include.
- [ ] Use the square bracket binding syntax around the value attribute on the DOM element and set that equal to an instance of the FormControl.
- [x] Use the formControlName directive and set the value equal to the string name given to the FormControl.
- [ ] Use the string name given to the FormControl as the value for the DOM element id attribute.

#### Q93. What is the difference between the `paramMap` and the `queryParamMap` on the `ActivatedRoute` class?

- [ ] The paramMap is an object literal of the parameters in a route's URL path. The queryParamMap is an Observable of those same parameters.
- [ ] The paramMap is an Observable that contains the parameter values that are part of a route's URL path. The queryParamMap is a method that takes in an array of keys and is used to find specific parameters in the paramMap.
- [ ] paramMap is the legacy name from Angular 3. The new name is queryParamMap.
- [x] Both are Observables containing values from the requested route's URL string. The paramMap contains the parameter values that are in the URL path and the queryParamMap contains the URL query parameters.

#### Q94. Based on the following usage of the async pipe, and assuming the users class field is an Observable, how many subscriptions to the users Observable are being made?

```html
<h2>Names</h2>
<div *ngFor="let user of users | async">{{ user.name }}</div>
<h2>Ages</h2>
<div *ngFor="let user of users | async">{{ user.age }}</div>
<h2>Genders</h2>
<div *ngFor="let user of users | async">{{ user.gender }}</div>
```

- [ ] None. The async pipe does not subscribe automatically. None.
- [ ] None. The template syntax is not correct.
- [x] Three. There is one for each async pipe.
- [ ] One. The async pipe caches Observables by type internally.

#### Q95. How can you use the HttpClient to send a POST request to an endpoint from within an addOrder function in this OrderService?

```javascript
export class OrderService {
    constructor(private httpClient: HttpClient) { }

    addOrder(order: Order) {
      // Missing line
    }
}
```

- [ ] this.httpClient.url(this.orderUrl).post(order);
- [ ] this.httpClient.send(this.orderUrl, order);
- [ ] this.httpClient.post<Order>(this.orderUrl, order);
- [x] this.httpClient.post<Order>(this.orderUrl, order).subscribe();

#### Q96. What is the RouterModule.forRoot method used for?

- [ ] Registering any providers that you intend to use in routed components.
- [x] Registering route definitions at the root application level.
- [ ] Indicating that Angular should cheer on your routes to be successful.
- [ ] Declaring that you intend to use routing only at the root level.

#### Q97. Which DOM elements will this component metadata selector match on?

```javascript
@Component({
    selector: 'app-user-card',
    . . .
})
```

- [ ] Any element with the attribute app-user-card, such as `<div app-user-card></div>`.
- [ ] The first instance of `<app-user-card></app-user-card>`.
- [x] All instances of `<app-user-card></app-user-card>`.
- [ ] All instances of `<user-card></user-card>`.

#### Q98. What is the correct template syntax for using the built-in ngFor structural directive to render out a list of productNames?

- [ ]

```html
<ul>
  <li [ngFor]="let productName of productNames">{{ productName }}</li>
</ul>
```

- [ ]

```html
<ul>
  <li ngFor="let productName of productNames">{{ productName }}</li>
</ul>
```

- [x]

```html
<ul>
  <li *ngFor="let productName of productNames">{{ productName }}</li>
</ul>
```

- [ ]

```html
<ul>
  <? for productName in productNames { ?>
  <li>{{ productName }}</li>
  <? } ?>
</ul>
```

#### Q99. What are the two component decorator metadata properties used to set up CSS styles for a component?

- [ ] viewEncapsulation and viewEncapsulationFiles.
- [ ] There is only one and it is the property named css.
- [ ] css and cssUrl.
- [x] styles and styleUrls.

#### Q100. With the following component class, what template syntax would you use in the template to display the value of the title class field?

```javascript
@Component({
  selector: 'app-title-card',
  template: '',
})
class TitleCardComponent {
  title = 'User Data';
}
```

- [ ] `{{ 'title' }}`
- [x] `{{ title }}`
- [ ] `[title]`
- [ ] A class field cannot be displayed in a template via the template syntax.

#### Q101. What is the purpose of the valueChanges method on a FormControl?

- [ ] It is used to configure what values are allowed for the control.
- [ ] It is used to change the value of a control to a new value. You would call that method and pass in the new value for the form field. It even supports passing in an array of values that can be set over time.
- [ ] It returns a Boolean based on if the value of the control is different from the value with which it was initialized.
- [x] It is an observable that emits every time the value of the control changes, so you can react to new values and make logic decisions at that time.

#### Q102. What directive is used to link an `<a>` tag to routing?

- [ ] routeTo
- [x] routerLink
- [ ] routePath
- [ ] appLink

#### Q103. What is the Output decorator used for in this component class?

```javascript
@Component({
    selector: 'app-shopping-cart',
    . . .
})
export class ShoppingCartComponent {
    @Output() itemTotalChanged = new EventEmitter();
}
```

- [ ] It makes the `itemTotalChanged` class field public.
- [ ] It provides a way to bind values to the `itemTotalChanged` class field, like so: `<app-shopping-cart [itemTotalChanged]="newTotal"></app-shopping-cart>`.
- [x] It provides a way to bind events to the `itemTotalChanged` class field, like so: `<app-shopping-cart (itemTotalChanged)="logNewTotal($event)"></app-shopping-cart>`.
- [ ] It is simply a way to put a comment in front of a class field for documentation.

#### Q104. What is the difference between these two markup examples for conditionally handling display?

```html
<div *ngIf="isVisible">Active</div>
<div [hidden]="!isVisible">Active</div>
```

- [ ] The `ngIf` is shorthand for the other example. When Angular processes that directive, it writes a div element to the DOM with the hidden property.
- [ ] They are fundamentally the same.
- [x] The `ngIf` directive does not render the div in the DOM if the expression is false. The `hidden` property usage hides the div content in the browser viewport, but the div is still in the DOM.
- [ ] The `ngIf` is valid, but the use of the `hidden` property is wrong and will throw an error.

#### Q105. How can you disable the submit button when the form has errors in this template-driven forms example?

```html
<form #userForm="ngForm">
  <input type="text" ngModel name="firstName" required />
  <input type="text" ngModel name="lastName" required />
  <button (click)="submit(userForm.value)">Save</button>
</form>
```

- [ ]

```html
<button (click)="submit(userForm.value)" disable="userForm.invalid">Save</button>
```

- [x]

```html
<button (click)="submit(userForm.value)" [disabled]="userForm.invalid">Save</button>
```

- [ ]

```html
<button (click)="submit(userForm.value)" [ngForm.disabled]="userForm.valid">Save</button>
```

- [ ]

```html
<button (click)="submit(userForm.value)" *ngIf="userForm.valid">Save</button>
```

#### Q106. You want to see what files would be generated by creating a new contact-card component. Which command would you use?

- [x] ng generate component contact-card --dry-run
- [ ] ng generate component contact-card --no-files
- [ ] ng generate component component --dry
- [ ] ng generate component --exclude

#### Q107. Based on the following component, what template syntax would you use to bind the TitleCardComponent's titleText field to the h1 element title property?

```javascript
@Component({
  selector: 'app-title-card',
  template: '<h1 title="User Data"> {{titleText}}</h1>',
})
export class TitleCardComponent {
  titleText = 'User Data';
}
```

- [ ] `<h1 data-title="titleText">{{ titleText }}</h1>`
- [ ] `<h1 title="titleText">{{ titleText }}</h1>`
- [x] `<h1 [title]="titleText">{{ titleText }}</h1>`
- [ ] `<h1 titleText>{{ titleText }}</h1>`

#### Q108. What are Angular lifecycle hooks?

- [ ] loggers for tracking the health of an Angular app
- [ ] providers that can be used to track the instances of components
- [ ] built-in pipes that can be used in templates for DOM events
- [x] reserved named methods for components and directives that Angular will call during set times in its execution, and can be used to tap into those lifecycle moments

#### Q109. Pick the best description for this template syntax code:

```html
<span>Boss: {{job?.bossName}} </span>
```

- [ ] The ? is shorthand for the async pipe. The job value must be an Observable.
- [x] It is using the safe navigation operator (?) on the job field. If the job field is undefined, the access to the bossName will be ignored and no error will occur.
- [ ] There is an error in the template syntax. The ? is not valid here.
- [ ] It is diplaying the job value if it has one; otherwise it is displaying the bossName.

#### Q110. How would you configure a route definition for a UserDetailComponent that supports the URL path user/23 (where 23 represents the id of the requested user)?

- [x] `{ path: 'user/:id', component: UserDetailComponent }`
- [ ] `{ url: 'user/:id', routedComponent: UserDetailComponent }`
- [ ] `{ routedPath: 'user/:id', component: UserDetailComponent }`
- [ ] `{ destination: new UserDetailComponent(), route: 'user/:id' }`

#### Q111. What are the HostListener decorators and the HostBinding decorator doing in this directive?

```javascript
@Directive({
  selector: '[appCallout]',
})
export class CalloutDirective {
  @HostBinding('style.font-weight') fontWeight = 'normal';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.fontWeight = 'normal';
  }
}
```

- [x] They are setting the CalloutDirective.fontWeight field based on whether or not the mouse is over the DOM element. The HostListener then sets the font-weight CSS property to the fontWeight value.
- [ ] They are setting up the directive to check the DOM element that it is on. If it has event bindings added for mouse enter and leave it will use this code. Otherwise nothing will happen.
- [ ] This is an incorrect use of HostListener and HostBinding. The HostListener and HostBinding decorators do not do anything on directives; they work only when used on components.
- [ ] If the DOM element that this directive is placed on has the CSS property font-weight set on it, the mouseenter and mouseleave events will get raised.

#### Q112. What Angular template syntax can you use on this template-driven form field to access the field value and check for validation within the template markup?

```html
<input type="text" ngModel name="firstName" required minlength="4" />
<span *ngIf="">Invalid field data</span>
```

- [x] You can make use of a template reference variable and the exportAs feature that the ngModel directive has.
- [ ] You can use the ngModel directive in combination with the input field name.
- [ ] You can use a template reference variable for the HTML input element and then check the valid property off of that.
- [ ] It is not possible to get access to the field value with template-driven forms. You must use reactive forms for that.

#### Q113. What is the value type that will be stored in the headerText template reference variable in this markup?

```html
<h1 #headerText>User List</h1>
```

- [x] an Angular ElementRef, a wrapper around a native element
- [ ] the inner text of the `<h1>` element
- [ ] a header component class
- [ ] the native DOM element type of HTMLHeadingElement

#### Q114. What is the difference, if any, of the resulting code logic based on these two provider configurations?

```javascript
[{ provide: FormattedLogger, useClass: Logger }][{ provide: FormattedLogger, useExisting: Logger }];
```

- [ ] They are the same. Both will result in a new instance of Logger that is bound to the FormattedLogger token.
- [x] The useClass syntax tells the injector to make a new instance of Logger and bind that instance to the FormattedLogger token. The useExisting syntax refers to an already existing object instance declared as Logger.
- [ ] Both of them are wrong. A strong type connot be used for useClass or useExisting.
- [ ] They are the same. Both will result in the FormattedLogger token being an alias for the instance of Logger.

#### Q115. What is the purpose of the data property (seen in the example below) in a route configuration?

```javascript
   {
       path: 'customers',
       component: CustomerListComponent,
       data: { accountSection: true }
   }
```

- [ ] a key/value mapping for setting @Input values on the routed component instance
- [x] a way to include static, read-only data associated with the route that can be retrieved from the ActivatedRoute
- [ ] a property on the route that can be used to load dynamic data for the route
- [ ] an object that will get auto-injected into the routed component's constructor.

#### Q116. How does the built-in `ngIf` structural directive change the rendered DOM based on this template syntax?

```javascript
@Component({
  selector: 'app-product',
  template: '<div *ngIf="product">{{ product.name }}</div>',
})
export class ProductComponent {
  @Input() product;
}
```

- [ ] The `<div>` acts as a placeholder. If the product class field is "truthy," the `<div>` will get replaced by just the `product.name` value; if not, then nothing will get rendered.
- [ ] The `<div>` will always be rendered, and if the product field is "truthy," the `<div>` element will contain the `product.name` value; otherwise it will render the `<div>` element with no value in it.
- [ ] It produces an error, since ngIf is not a built-in structural directive.
- [x] If the product class field is "truthy," then the rendered DOM will include the `<div>` with the value of the `product.name` field. If it is not "truthy,' the rendered DOM will not contain the `<div>` element.

#### Q117. What does this code accomplish?

```javascript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
```

- [ ] It executes a unit test for an NgModule.
- [ ] It provides a way to code the document structure of an Angular application. The @NgModule is a form of inline code commenting that gets ignored by the TypeScript compiler but will show up with special formatting in code editor applications.
- [ ] It declares an Angular module named AppModule and makes it available for lazy loading throughout the application.
- [x] It declares an Angular module named AppModule that contains a bootstrapped component named AppComponent. Then it registers that module with Angular, so the app can start up.

#### Q118. Which choice best describes what the _resolve_ property does in this route configuration?

```javascript
{
   path: ':id',
   component: UserComponent,
   resolve: {
     user: UserResolverService
   }
}
```

- [x] Prior to loading the _UserComponent_, the router will subscribe to the _Observable_ returned by a _resolve_ method in the _UserResolverService_. This technique can be used to get preloaded data for a _route_.
- [ ] After the _route_ is done resolving, and the component is loaded and rendered, the _UserResolverService_ will have a method named _user_ run that will clean up any open data connections.
- [ ] There is an error. The correct property name is _onResolve_.
- [ ] The _UserComponent_ will have a parameter in its constructor for _user_, and the _router_ will handle injecting in a value for that from a call to a _user_ method in the _UserResolverService_.

#### Q119. What is the purpose of the ContentChildren decorator in this component class?

```javascript
@Component({
 . . .
 template: '<ng-content></ng-content›'
})
export class TabsListComponent {
 @ContentChildren(TabComponent) tabs;
}
```

- [ ] If any _TabsComponent_ elements are added to the _TabsListComponent_ template, they will get put into the <ng-content> element at runtime.
- [ ] It creates _TabComponent_ components in the _TabsListComponent_ template when a _TabsListComponent_ is instantiated.
- [x] It provides access from within the component class to any _TabComponent_ components that were content projected into the <ng-content> for this component.
- [ ] It restricts the allowed elements that can be put into a _TabsListComponent_ element to allow only _TabComponent_ elements.

#### Q120. In order for Angular to process components in an application, where do the component types need to be registered?

- [ ] within a script tag in the index.html file
- [ ] in an NgModule decorator metadata tag named _components_
- [ ] No registration is needed simply include the component files in an app directory.
- [x] in an NgModule decorator metadata property named _declarations_

#### Q121. What is the purpose of the `fixture.detectChanges()` call in this unit test?

```javascript
TestBed.configureTestingModule({
  declarations: [UserCardComponent],
});
let fixture = TestBed.createComponent(UserCardComponent);

fixture.detectChanges();

expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
  fixture.componentInstance.title,
);
```

- [ ] It tracks any potential Ul changes and will fail the unit test if any are made.
- [ ] It is used to ensure component template stability across multiple unit tests in the entire test suite.
- [x] It forces Angular to perform change detection, which will render the _UserCardComponent_ before you can validate its template.
- [ ] It is used to log change-detection events to the console during unit test runs.

#### Q122. What will the URL segment look like based on the following call to the `Router.navigate` method when goToUser is passed the value 15?

```javascript
export class ToolsComponent {
 constructor (private router: Router) { }
 goToUser (id: number) {
   this.router.navigate(['user', id]);
 }
}
```

- [x] /user/15
- [ ] /user?id=15
- [ ] /user:15
- [ ] /user;id=15

#### Q123. When a service is provided for root and is also added to the provider's configuration for a lazy-loaded module, what instance of that service does the
injector provide to constructors in the lazy-loaded module?

- [ ] A new instance of that service is created when the module is lazy loaded.
- [ ] Providing a service of the same type at a lazy-loaded module level is not allowed.
- [ ] If an instance of the service has not been created at the root level yet. it will create one there and then use it.
- [x] A single instance of that service is always instantiated at root and is the only one ever used, including within lazy modules.

#### Q124. What is the HostBinding decorator doing in this directive?

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

#### Q125. In reactive forms, what Angular form class type is used on the native DOM <form> element to wire it up?

- [ ] `FormArray`
- [ ] `FormControl`
- [x] `FormGroup`
- [ ] `all of these answers`

#### Q126. Assuming the username FormControl has been configured with a minLength validator, how can you set up an error display in the following reactive
forms markup for the username field?

```html
<form [formGroup]="form"›
  <input type="text" formControlName= "username"›
  ...
</form>
```

- []      

```javascript
    <span *ngIf="username.minLength.invalid"›
        Username length is not valid
    </span>
``` 

- [ ]
  
```javascript
<input type="text" formControlName="username" [showMinLength]="true"›
```

- [ ]
  
```javascript
    <span *ngIf="form.get('username').getError('minLength') as minLengthError"> 
      Username must be at least {{ minLengthError.requiredLength }} characters. 
    </span>
```

- [x]

```javascript
<input type="text" formControlName="username" #userName="ngModer>
    <span *ngIf="userName.errors.minlength"›
      Username must be at least {{ userName.errors.minlength.requiredLength }} characters. 
    </span>
```

#### Q127. How does the emulated view encapsulation mode handle CSS for a component?

- [ ] It renders the CSS exactly how you wrote it without any changes.
- [ ] It makes use of shadow DOM markup and CSS.
- [x] It creates unique attributes for DOM elements and scopes the CSS selectors you write to those attribute ids.
- [ ] It renders all of the CSS rules you write as inline CSS on all of the DOM elements you use them on in the template.

#### Q128. Given these two components, what will get rendered to the DOM based on the markup usage?

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

#### Q129. Given the app-title-card component in the code below, what DOM will the app-user-card component render?

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

#### Q130. Pick the matching code for the custom provider registration that the @Inject () decorator is looking for:

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

#### Q131. Which choice best describes the following usage of the HttpClient . get method in the getsettings class method?

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

#### Q132. The . . . . . decorator allows us to define the pipe name that is globally available for use in any template in the across application.
- [ ] pipeName
- [ ] pipeDeco
- [x] Pipe
- [ ] None of the above.
                                           
#### Q133. Observables help you manage . . . . . . . . data?
- [ ] Synchronous
- [x] Asynchronous
- [ ] Both a & b
- [ ] None of the above
                                           
#### Q134. How would you display a list of Employees on a webpage along with where they were in the list?
- [ ] Loop through and print the index
- [ ] Loop through and print the employees
- [x] Loop through and print the index and the employee
- [ ] Pass both the index and the employee to a web service
                                           
#### Q135. If you chain multiple pipes together, they are executed
- [ ] In parallel
- [ ] LIFO order
- [x] In the order which you have specified them
- [ ] None of the above
                                           
#### Q136. We can subscribe to an observable using the . . . . . . . . The benefit of this is that Angular deals with your subscription during the lifecycle of a component. Angular will automatically subscribe and unsubscribe for you.
- [ ] sync pipe
- [ ] Async var
- [x] Async pipe
- [ ] Sync var
                                           
#### Q137. How Observables are Used?
- [ ] The Reactive Forms Module uses reactive programming and Observables for listening to user input
- [ ] The @output() decorator in a component takes an EventEmitter instance. EventEmitter is a subclass of the RxJS Observable
- [x] Both a & b
- [ ] None of the above
                                           
#### Q138. Which of the following is not a hook application life cycle?
- [ ] ngOnChanges
- [x] ngViewStart
- [ ] ngOnInit
- [ ] None of the above
                                           
#### Q139. If you have to unsubscribe a subscription in Angular Component where will you do that?
- [ ] ngOnInit
- [ ] onLoad
- [x] ngOnDestroy
- [ ] ngAfterViewChecked
                                           
#### Q140. If we have to improve the DOM performance while using *ngFor what should we use?
- [ ] Pipes
- [ ] Filtering
- [ ] Indexing
- [x] trackBy
                                           
#### Q141. Since Angular defines a set of built-in directives, the . . . . . . . . method passes them in a similar way in order to make them available in the entire application in order to prevent us from code duplications.
- [ ] startup
- [x] bootstrap
- [ ] constructor
- [ ] initialization
                                           
#### Q142. What are the new features of Angular?
- [ ] Component Based
- [ ] Directives
- [ ] Dependency injection
- [x] All of the above
                                           
#### Q143. Angular  is using . . . . . . . . to detect changes.
- [ ] zones.js
- [x] zone.js
- [ ] Scope.js
- [ ] None of the above
                                           
#### Q144. Angular can detect when component data changes, and then automatically re-render the view to reflect that change.
- [x] True
- [ ] False
                                           
#### Q145. Interpolation in angular 2 is done using
- [ ] `[]`
- [ ] `{[]}`
- [x] `{{}}`
- [ ] `()`
                                           
#### Q146. Select the syntax for two-way data binding in angular.
- [ ] `[target]="expression"`
- [ ] `(target)="statement"`
- [x] `[(target)]="expression"`
- [ ] None of the above
                              
#### Q147. Select the correct syntax for angular template which binds style property width to the results of expression mysize in pixels. units are optional.
- [ ] `<div (style.width.px)="mysize">`
- [ ] `<div {style.width.px}="mysize">`
- [ ] `<div {[style.width.px]}="mysize">`
- [x] `<div [style.width.px]="mysize">`
                                     
#### Q148. Angular has a . . . . . . . service that allows us to dynamically load a component in a certain position on the page.
- [x] DynamicComponentLoader
- [ ] DynaCompLoader
- [ ] DynamicControllerLoader
- [ ] DynamicControlLoader
                                     
#### Q149. Select the correct syntax, for adding an “ngclass” property binding to “currentclasses” in angular.
- [x] `<div [ngclass]="currentclasses">this div is initially saveable, unchanged, and special</div>`
- [ ] `<div (ngclass)="currentclasses">this div is initially saveable, unchanged, and special</div>`
- [ ] `<div [currentclasses]="ngclasses"> this div is initially saveable, unchanged, and special</div>`
- [ ] `<div (currentclasses)="ngclasses"> this div is initially saveable, unchanged, and special</div>`
                                       
#### Q150. What is not involved in writing a angular structural directive
- [ ] import the input, templateref, and viewcontainerref symbols
- [ ] Import the directive decorator.
- [ ] Apply the decorator to the directive class.
- [x] All Of these
                                        
#### Q151. In Lazy Loading which will not cause a network request for chunk/ bundle if AuthGuard condition is not correct?
- [ ] CanActivate
- [ ] CanDeactivate
- [x] CanLoad
- [ ] CanActivateChild
                                        
#### Q152. In which type of Angular Forms this “[(ngModel)]”?
- [ ] Reactive Forms
- [ ] React Forms
- [x] Template Driven Forms
- [ ] None of the Above
                                        
#### Q153. Which one is the default value of ViewEncapsulation?
- [ ] None
- [ ] Emulated
- [x] Native
- [ ] Shadow
                                        
#### Q154. Which of the following is method of Sanitizing in Angular?
- [ ] bypassSecurityTrustHtml
- [ ] bypassSecurityTrustScript
- [ ] bypassSecurityTrustStyle
- [x] All of the above
                                        
#### Q155. With this command which files will be generated “ng g c hello”?
- [x] hello.component.spec.ts
- [ ] hello.js
- [ ] hello.component.js
- [ ] hello.html
                                        
#### Q156. What is the best method to share data between components that have a parent child relationship?
- [ ] Services
- [ ] Observables
- [x] @input/ @output
- [ ] None of the above
                                        
#### Q157. Router preload can be done for which type of routes?
- [ ] Normal component routes
- [x] Lazy loaded routes
- [ ] Module Routes
- [ ] None of the above
                                        
#### Q158. provideIn: “root” is for…?
- [x] Defining at app level
- [ ] Defining at module level
- [ ] Defining at component level
- [ ] None of the above
                                        
#### Q159. FormArray is part of which module?
- [ ] @angular/router
- [ ] @angular/core
- [x] @angular/forms
- [ ] @angular/meta
                                        
#### Q160. routerLinkActive is used along with … ?
- [ ] router
- [x] routerLink
- [ ] routerParams
- [ ] routerGuard
                                        
#### Q161. In RxJs BehaviourSubject is defined as?
- [ ] new Behaviour Subject();
- [ ] new BehaviourSubject();
- [x] new BehaviourSubject(null);
- [ ] new Subject();

#### Q162. With the following TestBed setup, what can be used to access the rendered DOM for the UserCardComponent?

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
