// Filename: nodefocusable.js  
// Timestamp: 2017.09.20-06:59:18 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

module.exports = (o => {
  o = node =>
    o.getfocusableparent(node);

  o.is = elem => Boolean(elem instanceof Element && (
      /button|input|select|textarea/.test(elem.nodeName) ||
      elem.hasAttribute('href') || (
        elem.hasAttribute('tabindex') &&
          !/-1/.test(elem.getAttribute('tabindex')))));

  o.getfocusableparent = elem => elem &&
    (o.is(elem)
     ? elem
     : o.getfocusableparent(elem.parentNode));

  return o;
})();
