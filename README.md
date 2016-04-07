# Scroll Animations

A jQuery plugin for scroll based transitions.

Animations will trigger when an element is scrolled into the viewport.

Built by [Westley Mon](http://westleymon.com/) at [Mindgruve](http://mindgruve.com/).

## Getting Started

### Dependencies
This module depends on [Waypoints](https://github.com/imakewebthings/waypoints) and [imagesLoaded](https://github.com/desandro/imagesloaded).
 - Waypoints helps with keeping track of the scroll position of elements and their relation to the viewport.
 - imagesLoaded is used to determine when the media assets (images to be exact) are loaded and we can begin animations. *Nothing like animating an image before its loaded!*
`jquery.waypoints.min.js` and `imagesloaded.pkgd.min.js` are to be placed in the `javascript/vendor` folder.

An optional dependency is [Animate.css](https://github.com/daneden/animate.css).  Custom CSS animations can be used, but they will need to be applied to a class.  See Animate.css code for example.

### Initr Configuration

Requires the scroll-animations.js be included in the javascript/initr directiory

```javascript
{
    name:       'scroll-animations',
    selector:   '[data-animation]:not([data-animation-child]), [data-animation-container]',
    src:        ['initr/scroll-animations']
}
```

Required CSS
```css
[data-animation] {
    opacity: 0;
}

[data-animation].animated {
    opacity: 1;
}
```

## Documentation

### Animating a single element
Animating a single element is simple!
```html
<h1 data-animation="fadeInUp">Heading 1</h1>
```
 - A single element uses a required `[data-animation]` attribute and an optional `[data-animation-delay]` attribute.

### Animating a set of elements
We also have the ability to build an timeline of animations based on the a single containing element scrolling into view!

```html
<section data-animation-container>
    <div class="container">
        <div class="row">

            <div class="col-sm-6"
                 data-animation-child data-animation="fadeInUp"
                 data-animation-delay="0ms">
                [Something to animate in]
            </div>

            <div class="col-sm-6"
                 data-animation-child data-animation="fadeInUp"
                 data-animation-delay="500ms">
                [Something else to animate in]
            </div>

        </div>
    </div>
</section>
```
 - A set of elements requires the `[data-animation-container]` attribute on a container element like the `<section>` above.  When this element travels into the viewport, the animations for all "child" elements will kick off.
 - The "child" elements, or the elements that will actually be animating, require the `[data-animation-child]` and `[data-animation]` attributes.  The `[data-animation-delay]` attribute is optional, but as shown in the example above, the second column has a `500ms` delay, giving it a staggered effect.

## Examples

For now, see `demos/index.html`.
