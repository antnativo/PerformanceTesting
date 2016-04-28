//Simple Selector
JSLitmus.test('Simple Selector (Zepto)', function () {
  Zepto("#title")
});
JSLitmus.test('Simple Selector (jQuery)', function() {
  jQuery("#title")
});
JSLitmus.test('Simple Selector (nQuery)', function() {
  nQuery("#title")
});
JSLitmus.test('Simple Selector (JS)', function() {
  document.querySelector("#title")
});
JSLitmus.test('Simple Selector (JS - ALL)', function() {
  document.querySelectorAll("#title")
});

//Complex Query
JSLitmus.test('CSS Complex Query  (Zepto)', function() {
  Zepto("div.a > div.b > div.c> ul li:nth-child(4) div > p.e > em+i, div.a > div.b > div.c> ul > li:last-of-type div > p.e > strong,div.a > div.b > div.c> ul > li.iframe > iframe");
});
JSLitmus.test('CSS Complex Query  (jQuery)', function() {
  jQuery("div.a > div.b > div.c> ul li:nth-child(4) div > p.e > em+i, div.a > div.b > div.c> ul > li:last-of-type div > p.e > strong,div.a > div.b > div.c> ul > li.iframe > iframe");
});
JSLitmus.test('CSS Complex Query  (nQuery)', function() {
  nQuery("div.a > div.b > div.c> ul li:nth-child(4) div > p.e > em+i, div.a > div.b > div.c> ul > li:last-of-type div > p.e > strong,div.a > div.b > div.c> ul > li.iframe > iframe");
});
JSLitmus.test('CSS Complex Query  (js)', function() {
  document.querySelectorAll("div.a > div.b > div.c> ul li:nth-child(4) div > p.e > em+i, div.a > div.b > div.c> ul > li:last-of-type div > p.e > strong, div.a > div.b > div.c> ul > li.iframe > iframe");
});

//Find
JSLitmus.test('.find()  (Zepto)', function() {
  Zepto("div.a").find("strong");
});
JSLitmus.test('.find()  (jQuery)', function() {
  jQuery("div.a").find("strong");
});
JSLitmus.test('.find()  (nQuery)', function() {
  nQuery("div.a").find("strong");
});
JSLitmus.test('.find()  (JS)', function() {
  document.querySelector("div.a").querySelectorAll("strong");
});