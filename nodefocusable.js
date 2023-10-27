// Filename: nodefocusable.js  
// Timestamp: 2017.09.20-06:59:18 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

const focusableNameRe = /^(button|input|select|textarea)$/

const is = elem => Boolean(elem instanceof Element && (
  focusableNameRe.test(elem.nodeName) ||
    elem.hasAttribute('href') || (
      elem.hasAttribute('tabindex') &&
        !/-1/.test(elem.getAttribute('tabindex')))));

const getfocusableparent = elem => elem && (
  is(elem) ? elem : getfocusableparent(elem.parentNode))

export default Object.assign(getfocusableparent, { is })
