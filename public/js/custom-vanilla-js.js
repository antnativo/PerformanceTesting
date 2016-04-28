// Custom JS Library used for Testing Vanilla JS - nQuery =)
var nQuery;
;(function () {

  nQuery = (function () {
    //PRIVATE
    var doc = document;

    function setCurrentNode(self, value, noHistory) {
      self.nodes = value;
      (self.history.length ==0 || !noHistory) ? self.history.push(value) : null;
    }

    function converToArray(value) { 
      return Array
        .prototype
        .slice
        .apply(value);
    }
    function convertToArrayAndSetNode(self,nodes) { 
      switch (nodes instanceof HTMLCollection) {
        case true:
          setCurrentNode(self,converToArray(nodes));
        default:
         setCurrentNode(self,nodes);
      }
    }

    function queryCSS(self, str) {
      switch (/,/gi.test(str)){
        case true:
          convertToArrayAndSetNode(self, doc.querySelectorAll(str));
        default:
          convertToArrayAndSetNode(self, doc.querySelector(str));
      }
    }
    
    function compileScripts(item) {
      var scripts = converToArray(item.getElementsByTagName("script"));
      var count = scripts.length - 1;
      while(count >= 0){
        window.eval(scripts[count].textContent);
        count--;
      }
    }

    function insertHTMLAndJS(self,value,node,noCompile) { 
      var el = (typeof node != "undefined" && node != null) ? node : self.nodes;
        el.innerHTML = value;
        ((typeof noCompile != undefined || noCompile == null ) && noCompile == true) ? compileScripts(el) : null;
      }


    //PUBLIC
    function __(nodes) {
      this.nodes;
      this.history = [];
      this.find(nodes);
    }

    __.prototype.find = function (nodes) {
      this.nodes = [nodes];
      if (nodes instanceof Array) {
        setCurrentNode(this, nodes);
      } else if (nodes instanceof HTMLCollection) {
        convertToArrayAndSetNode(this,nodes);
      } else if (typeof nodes == "string") {
        queryCSS(this,nodes);
      } else if (nodes instanceof HTMLElement) {
        setCurrentNode(this, [nodes]);
      } else {
        throw new Error("Unable to find node")
      }
      
    };

    __.prototype.each = function (func) {
      var count = this.nodes.length - 1
      while (count >= 0) {
        func(this.nodes[count], count, this.nodes)
        count--;
      }
      return this;
    };

    __.prototype.currentNodes = function () {
      return this.nodes;
    };

    __.prototype.html = function (value) {
      if (typeof value == "string" && value.length > 0) {
        switch (this.nodes instanceof Array) {
          case true:
            var that = this;
            this.each(function (item, index, array) {
              insertHTMLAndJS(that,value,item,true)
            })
          break;
          default:
             insertHTMLAndJS(this,value,this.nodes,true)
          break;
        }
      } else { 
        switch (this.nodes instanceof Array) {
          case true:
            var that = this;
            this.each(function (item, index, array) {
               insertHTMLAndJS(that,value,item)
            })
          break;
          default:
            insertHTMLAndJS(this, value,this.nodes)
          break;
        }
      }
    }

    //Return new  __()
    return function (nodes) {
      return new __(nodes);
    };

  })()
})(nQuery);