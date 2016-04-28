JSLitmus.test('Selector (Zepto)', function() {
  Zepto("#title")
});
JSLitmus.test('Selector (jQuery)', function() {
  jQuery("#title")
});
JSLitmus.test('Selector (JS)', function() {
  document.querySelector("#title")
});
JSLitmus.test('Selector (JS - ALL)', function() {
  document.querySelectorAll("#title")
});


JSLitmus.test('CSS Complex Query  (Zepto)', function() {
  Zepto("div.a > div.b > div.c> ul li:nth-child(4) div > p.e > em+i, div.a > div.b > div.c> ul > li:last-of-type div > p.e > strong");
});
JSLitmus.test('CSS Complex Query  (jQuery)', function() {
  jQuery("div.a > div.b > div.c> ul li:nth-child(4) div > p.e > em+i, div.a > div.b > div.c> ul > li:last-of-type div > p.e > strong");
});
JSLitmus.test('CSS Complex Query  (js)', function() {
  document.querySelectorAll("div.a > div.b > div.c> ul li:nth-child(4) div > p.e > em+i, div.a > div.b > div.c> ul > li:last-of-type div > p.e > strong");
});