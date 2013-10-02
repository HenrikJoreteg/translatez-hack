var applyTransform = require('transform-style');

// Takes an element and applies translateZ hack in cross-browser, additive way
module.exports = function (el) {
    applyTransform(el, 'translateZ(0)', true);
};
