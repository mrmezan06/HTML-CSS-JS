# NaTours

## Technologies

- [x] HTML
- [x] CSS

## Custom CSS Instructions

- [x] Reset Everything of Browser Added Padding and Margin

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

- [x] Multiple Image or Linear Gradient With Image Background

```css
background-image: linear-gradient(
    to right bottom,
    rgba(126, 213, 111, 0.8),
    #28b485
  ), url("../img/hero.jpg");
```

- [x] Background Image with Fixed Position
  - [x] Parameter can be set as top, bottom, left, right, center.

```css
background-position: top;
```

- [x] Background Image with Fixed Size
  - [x] Parameter can be set as cover, contain, fit, fill etc.

```css
background-size: cover;
```

- [x] Clip Path
  - [x] Parameter can be set as circle, ellipse, polygon, polyline, rect, inset, path.
  - [x] Easily create clip path with CSS in [Clip Path Generator](https://bennettfeely.com/clippy/)

```css
clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
```

- [x] Position Relative to Parent
  - [x] Parameter can be set as absolute, fixed, relative, sticky.
  - [x] top, left, bottom and right position is reference to parent element.

```css
position: absolute;
top: 40%;
left: 50%;
```

- [x] Position Absolute must be parent of Position Relative

```css
position: relative;
```

- [x] Transform and translate
  - [x] Parameter can be set as rotate, scale, skew, translate.
  - [x] top, left, bottom and right position is reference to its own element.

```css
transform: translate(50%, 50%);
```

- [x] Display : Block and Display : Flex
  - [x] Parameter can be set as block, flex, inline-block, inline-flex.
  - [x] Block is take full width of parent element.

```css
display: block;
```

- [x] Animation timing function guidelines

  - [x] Parameter can be set as linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end.
  - [x] [Timing Function Example](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)

- [x] Animation Example

```css
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

```css
@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

```css
animation: moveInRight 1s ease-out;
```

"Or"

```css
animation-name: moveInLeft;
animation-duration: 1s;
animation-timing-function: ease-out;
```

- [x] In Up Defined Animation Can Be Apply On Hover

```css
.logo:hover {
  animation: moveInRight 1s ease-out;
}
```

- [x] Fixing Animation Shaking Issue Simply Backface Visibility hidden But In 3D It should visible cause if backface visibility hidden in backface never saw and its not look like 3D
  - [x] It should hide in parent element

```css
backface-visibility: hidden;
```

- [x] Single Word Selection With Multiple Cursor

  - [x] First Select The Word
  - [x] Then Pres `CTRL + D` Each Time It Will Select Next Or Previous A Word.

- [x] Animation Fill Mode

  - [x] Parameter can be set as forwards, backwards, both, none.
  - [x] forwards: animation will play from start to end.
  - [x] backwards: animation will play from end to start.
  - [x] both: animation will play from start to end and then from end to start.
  - [x] none: animation will not play. eg. `animation-fill-mode: backwards;`

- [x] BEM architecture

  - [x] B: Block Name
  - [x] E: Element (Class)
  - [x] M: Modifier (Class)

- [x] Modifier Example

```css
.btn:link,
.btn:visited {
  some-property: value;
}
```

```css
.btn--animated {
  some-property: value;
}
```

```css
.heading-primary {
  some-property: value;
}

.heading-primary--main {
  some-property: value;
}
```

- [x] Element Example

```css
.header {
  some-property: value;
}

.header__logo-box {
  some-property: value;
}
```

- [x] Attribute Selector
  - [x] Parameter can be set as [attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).
  - [x] [Attribute Selector Example](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

```css
[class^="col-"] {
  background-color: orangered;
  float: left;
}
```

- [x] Everything selected without last child
  - [x] Parameter can be set as [:not](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).
  - [x] [Everything selected without last child Example](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)

```css
&:not(:last-child) {
  // Every column except the last one should have a right margin of $gutter-horizontal
  margin-right: $gutter-horizontal;
}
```

- [x] Background Blend Mode Only Works on Chrome
  - [x] Blend Mode Options -
    - [x] Screen, Color etc

```css
background-blend-mode: screen;
```

- [x] Sibling Selector
  - [x] Parameter can be set as [sibling selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Sibling_selectors).
  - [x] [Sibling Selector Example](https://developer.mozilla.org/en-US/docs/Web/CSS/Sibling_selectors)
  - [x] + -> Adjacency Selector - Next Sibling
  - [x] ~ -> General Sibling Selector - Next Sibling
  
```css
input:placeholder-shown + label {
  // The label should be shown when the input has a value
  display: block;
}
```

- [x] Media Query
  - [x] (min-width: 600px)
    - [x] Greater than or equal 600px, all css rules will be applied.
  - [x] (min-width: 900)
    - [x] Greater than or equal 900px, all css rules will be applied.
  - [x] (max-width: 600px)
    - [x] 0px to 600px all css rules will be applied.
  - [x] (min-width: 600px) and (max-width: 900px)
    - [x] 600px to 900px all css rules will be applied.
  - [x] (min-width: 900px) and (max-width: 1200px)
    - [x] 900px to 1200px all css rules will be applied.

- [x] Cubic Bezier Tools Website:
  - [x] [Easings](https://easings.net/)
  - [x] [Cubic Bezier](https://cubic-bezier.com/)

## Custom Scripts Instructions

- [x] Watch The keep changing SCSS File to Compile CSS
  - [x] Compile CSS with `npm run compile:sass`
  - [x] Liver Server `live-server`

## Resources of Jonathon

- [x] [Resources HTML CSS AND Extension of IDE Cheat Sheet](https://codingheroes.io/resources/)
- [x] [Code Snippets](https://github.com/jonasschmedtmann/advanced-css-course)
- [x] [Video Source](coverr.co)
