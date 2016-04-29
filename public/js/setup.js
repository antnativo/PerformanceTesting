// The empty form of a non-looping test.  This should result in "Infinity"
// operations per second, or very close to it.
var ZeptoMark = 10000,
    jQueryMark = 10000,
    nQueryMark = 10000,
    jsMark = 10000,
    innerHTML = "<div>Loading Script..</div><script>console.log('Loaded')<\/script></div>Script Loaded</div>",
    arrayOfNumbers = [0,1,2,3,4,5,6,7,8,9];
var restAndRun = (function f(){
  if(document.querySelector("button[onclick='JSLitmus.runAll(event)']") != null){
      document.querySelector("button[onclick='JSLitmus.runAll(event)']").addEventListener("click",function(){
        ZeptoMark = 10000;
        jQueryMark = 10000;
        nQueryMark = 10000;
        jsMark = 10000;
      },false)
  }else{
    setTimeout(f,0)
  }
});
var eventHandlers = {
  click: function (event) {}
};

restAndRun();