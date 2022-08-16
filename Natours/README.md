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