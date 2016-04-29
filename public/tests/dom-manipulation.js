
JSLitmus.test('Append Nodes (Zepto)', function() {
  while(ZeptoMark > 0){
    Zepto("#list-test").append("<li>"+ZeptoMark+"</li>")
    ZeptoMark--;
  }
});
JSLitmus.test('Remove Nodes ( Zepto )', function() {
    // You Can Only Remove A Node Once
    while (ZeptoMark < 10000) {
      Zepto("#list-test").children().each(function(){
        Zepto(this).remove()
      });
      ZeptoMark = 10000;
    }
});
JSLitmus.test('Append Nodes (jQuery)', function() {
  while(jQueryMark > 0){
    jQuery("#list-test").append("<li>"+jQueryMark+"</li>")
    jQueryMark--;
  }
});
JSLitmus.test('Remove Nodes ( jQuery )', function() {
  // You Can Only Remove A Node Once
  while (jQueryMark < 10000) {
    jQuery("#list-test").children().each(function(){
       jQuery(this).remove()
    });
    jQueryMark = 10000;
  }
});
JSLitmus.test('Append Nodes (nQuery)', function() {
  while(nQueryMark > 0){
    nQuery("#list-test").append("<li>"+nQueryMark+"</li>")
    nQueryMark--;
  }
});
JSLitmus.test('Remove Nodes ( nQuery )', function() {
  // You Can Only Remove A Node Once
  while (nQueryMark < 10000) {
    nQuery("#list-test").children().each(function (item) {
       nQuery(item).remove();
    });
    nQueryMark = 10000;
  }
});
JSLitmus.test('Append Nodes (JS)', function() {
  var doc = document;
  while(jsMark > 0){
   (document.getElementById("list-test").appendChild(document.createElement("div"))).innerText = jsMark;
    jsMark--;
  }
});
JSLitmus.test('Remove Nodes ( JS )', function() {
  // You Can Only Remove A Node Once
  while (jsMark < 10000) {
    var doc = document;
    var nodes = Array
      .prototype
      .slice
      .apply(doc.querySelector("#list-test").children);
      
      nodes.forEach(function(item){
        doc.querySelector("#list-test").removeChild(item)
      });
      jsMark = 10000;
  }
});

JSLitmus.test('Inner HTML and Script Load (Zepto)', function() {
  Zepto("#html").html(innerHTML+" -- Zepto");
  Zepto("#html").html("");
});
JSLitmus.test('Inner HTML and Script Load (jQuery)', function() {
  jQuery("#html").html(innerHTML+" -- jQuery");
  jQuery("#html").html("");
});
JSLitmus.test('Inner HTML and Script Load (nQuery)', function () { 
  nQuery("#html").html(innerHTML+" -- jQuery");
  nQuery("#html").html("");
});
JSLitmus.test('Inner HTML and Script Load (JS)', function() {
  document.getElementById("html").innerHTML = innerHTML + " -- JS";
  var scripts =  Array
  .prototype
  .slice
  .apply( document.getElementById("html").getElementsByTagName("script"));
  var count = scripts.length-1;
  while(count >= 0){
     eval(scripts[count].textContent);
     count--;
  }
  document.getElementById("html").innerHTML="";
});
JSLitmus.test('Toggle CSS  (Zepto)', function() {
  Zepto("#toggleCSS").toggleClass("on")
  Zepto("#toggleCSS").toggleClass("on")
});
JSLitmus.test('Toggle CSS  (jQuery)', function() {
  jQuery("#toggleCSS").toggleClass("on")
  jQuery("#toggleCSS").toggleClass("on")
});
JSLitmus.test('Toggle CSS  (nQuery)', function() {
  nQuery("#toggleCSS").toggleClass("on")
  nQuery("#toggleCSS").toggleClass("on")
});
JSLitmus.test('Toggle CSS  (JS)', function() {
  document.getElementById("toggleCSS").classList.toggle("on");
  document.getElementById("toggleCSS").classList.toggle("on")
});
JSLitmus.test('Toggle Show Hide  (Zepto)', function() {
  Zepto("#title").hide();
  Zepto("#title").show();
});
JSLitmus.test('Toggle Show Hide  (jQuery)', function() {
  jQuery("#title").hide();
  jQuery("#title").show();
});
JSLitmus.test('Toggle Show Hide  (nQuery)', function() {
  nQuery("#title").hide();
  nQuery("#title").show();
});
JSLitmus.test('Toggle Show Hide  (JS)', function() {
   document.getElementById("title").style.display = "none";
   document.getElementById("title").style.display = "block";
});

JSLitmus.test('.attr() removeAtt()  (Zepto)', function() {
  Zepto("#title").attr("data-attr","set");
  Zepto("#title").removeAttr("data-attr");
});
JSLitmus.test('.attr() removeAtt()  (jQuery)', function() {
  jQuery("#title").attr("data-attr","set");
  jQuery("#title").removeAttr("data-attr");
});
JSLitmus.test('.attr() removeAtt()  (nQuery)', function() {
  nQuery("#title").attr("data-attr","set");
  nQuery("#title").removeAttr("data-attr");
});
JSLitmus.test('.attr() removeAtt()  (JS)', function() {
  document.querySelector("#title").setAttribute("data-attr","set");
  document.querySelector("#title").removeAttribute("data-attr");
});
