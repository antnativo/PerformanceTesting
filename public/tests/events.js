//Bind & Unbind
JSLitmus.test('.bind("click").click().unbind("click")  (Zepto)', function () {
   Zepto("#title").bind("click",eventHandlers.click).click().unbind("click", eventHandlers.click);
});
JSLitmus.test('.bind("click").click().unbind("click")  (jQuery)', function() {
   jQuery("#title").bind("click",eventHandlers.click).click().unbind("click", eventHandlers.click);
});
JSLitmus.test('.bind("click").click().unbind("click")  (nQuery)', function() {
  nQuery("#title").bind("click", eventHandlers.click).click().unbind("click", eventHandlers.click);
});
JSLitmus.test('.bind("click").click().unbind("click")  (JS)', function () {
  document.getElementById("title").addEventListener("click", eventHandlers.click, false);
  document.getElementById("title").click();
  document.getElementById("title").removeEventListener("click", eventHandlers.click);
});