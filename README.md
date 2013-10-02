# translatez-hack

Apply the translateZ hack in a cross-browser way. This "hack" is considered best practice for telling browser compositors to treat the element as it's own layer. This can significantly improve scrolling performance, etc.

For more details on tranlate: http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/   

You could argue that this shouldn't be done in JS. I'd suggest that perhaps sometimes it should. This isn't done for styling by a designer. It's done for performance by a front-end developer that feels like the type of thing that in certain cases belongs in javscript land.

## installing

```
npm i translatez-hack
```

## using

```js
var translateZ = require('translatez-hack');

// pass it the element and the hack will be applied
translateZ(document.querySelector('#someId'));
```

## credits

If you like this, follow [@HenrikJoreteg] on twitter.

## license

MIT
