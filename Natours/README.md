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
        #28b485) ,
        url('../img/hero.jpg');
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

- [x]  Animation timing function guidelines
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

- [x] Fixing Animation Shaking Issue Simply Backface Visibility hidden But In 3D It should visible cause if backface visibility hidden in backface never saw and its not look like 3D
    - [x] It should hide in parent element

```css
backface-visibility: hidden;
```

- [x] Single Word Selection With Multiple Cursor
    - [x] First Select The Word
    - [x] Then Pres `CTRL + D` Each Time It Will Select Next Or Previous A Word.
