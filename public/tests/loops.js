JSLitmus.test('.each(Array)  (Zepto)', function() {
  Zepto(arrayOfNumbers).each(function (item, index) { });
});
JSLitmus.test('.each(Array) (jQuery)', function() {
  jQuery(arrayOfNumbers).each(function (item, index) { });
});

JSLitmus.test('.forEach() (js)', function() {
  arrayOfNumbers.forEach(function (item, index) { });
});
JSLitmus.test('.each(Array) (js - custom)', function() {
  nQuery(arrayOfNumbers).each(function (item, index) { });
});

JSLitmus.test('.each(HTMLCollection)  (Zepto)', function() {
  Zepto(document.querySelector("ul#collection li").children).each(function (item, index) { });
});
JSLitmus.test('.each(HTMLCollection) (jQuery)', function() {
  jQuery(document.querySelector("ul#collection li").children).each(function (item, index) { });
});
JSLitmus.test('.each(HTMLCollection) (js - custom)', function() {
  nQuery(document.querySelector("ul#collection li").children).each(function (item, index) { });
});


JSLitmus.test('.each(CSS Selectors)  (Zepto)', function() {
  Zepto("ul#collection li").each(function (item, index) { });
});
JSLitmus.test('.each(CSS Selectors) (jQuery)', function() {
  jQuery("ul#collection li").each(function (item, index) { });
});
JSLitmus.test('.each(CSS Selectors) (js - custom)', function() {
  nQuery("ul#collection li").each(function (item, index) { });
});

JSLitmus.test('.map()  (Zepto)', function() {
  Zepto(arrayOfNumbers).map(function(item,index){return item*2});
});
JSLitmus.test('.map() (jQuery)', function() {
  jQuery(arrayOfNumbers).map(function(item,index){return item*2});
});
JSLitmus.test('.map() (JS)', function() {
  arrayOfNumbers.map(function(item,index){return item*2});
})
//JSLitmus.test('empty test (non-looping)', function() {});