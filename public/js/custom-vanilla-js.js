// Custom JS Library used for Testing Vanilla JS - nQuery =)
var nQuery;
;(function () {

  nQuery = (function () {
    // PRIVATE //
    var doc = document;
    function setCurrentNode(self, value, noHistory) {
      self.nodes = value;
      (self.history.length == 0 || !noHistory || noHistory != "undefined") ? self.history.push(value) : null;
    }
    function converToArray(value) {
      return Array
        .prototype
        .slice
        .apply(value);
    }
    function convertToArrayAndSetNode(self, nodes) {
      switch (nodes instanceof HTMLCollection) {
        case true:
          setCurrentNode(self, converToArray(nodes));
        default:
          setCurrentNode(self, nodes);
      }
    }
    function queryCSS(self, str) {
      var len = self.history.length;
      if (len > 0 && this.nodes == self.history[len - 1]) {
        internalDoc = this.nodes;
      } else if (len > 0 && this.nodes != self.history[len - 1]) {
        internalDoc = self.history[len - 1];
      } else { 
        internalDoc = doc
      }
      if (internalDoc instanceof Array)
        throw new Error("Parent Node must be and HTMLElement");
      
      switch (/,/gi.test(str)) {
        case true:
          convertToArrayAndSetNode(self, internalDoc.querySelectorAll(str));
        default:
          convertToArrayAndSetNode(self, internalDoc.querySelector(str));
      }
    }
    function compileScripts(item) {
      var scripts = converToArray(item.getElementsByTagName("script"));
      var count = scripts.length - 1;
      while (count >= 0) {
        window.eval(scripts[count].textContent);
        count--;
      }
    }
    function insertHTMLAndJS(self, value, node, noCompile) {
      var el = (typeof node != "undefined" && node != null) ? node : self.nodes;
      el.innerHTML = value;
      ((typeof noCompile != undefined || noCompile == null) && noCompile == true) ? compileScripts(el) : null;
    }
    function loopAndExecuteReverse(self,item,func) {
      var counter = 0,
        endpoint = item.length - 1;
      while (counter <= endpoint) {
        func(item[counter])
        counter++;
      }
    }
   function loopAndExecute(self,item,func) {
     var counter = item.length - 1;
      while (counter >= 0) {
        func(item[counter])
        counter--;
      }
    }
    // End of PRIVATE //

    // PUBLIC //
    function __(nodes) {
      this.nodes;
      this.history = [];
      this.find(nodes);
    }
    __.prototype.find = function (nodes) {
      if (nodes instanceof Array) {
        setCurrentNode(this, nodes);
      } else if (nodes instanceof HTMLCollection) {
        convertToArrayAndSetNode(this, nodes);
      } else if (typeof nodes == "string") {
        queryCSS(this, nodes);
      } else if (nodes instanceof HTMLElement) {
        setCurrentNode(this, [nodes]);
      } else {
        throw new Error("Unable to find node")
      }

    };
    __.prototype.each = function (func) {
      var count = this.nodes.length - 1
      while (count >= 0) {
        var that = this.nodes[count];
        func(this.nodes[count], count, this.nodes)
        count--;
      }
      return this;
    };
    __.prototype.andSelf = function () {
      this.nodes = this.history[0];
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
              insertHTMLAndJS(that, value, item, true)
            })
            break;
          default:
            insertHTMLAndJS(this, value, this.nodes, true)
            break;
        }
      } else if (typeof value == "string" == 0) {
        switch (this.nodes instanceof Array) {
          case true:
            var that = this;
            this.each(function (item, index, array) {
              insertHTMLAndJS(that, value, item)
            })
            break;
          default:
            insertHTMLAndJS(this, value, this.nodes)
            break;
        }
      } else { 
        return (this.nodes instanceof Array) ? null : this.nodes.innerHTML;
      }
    }
    __.prototype.bind = function (event, func) {
      if (this.nodes instanceof Array) {
        this.each(function (item, index, array) {
          item.addEventListener(event, func, false);
        });
      } else {
        this.nodes.addEventListener(event, func, false);
      }
      return this;
    };
    __.prototype.unbind = function (event, func) {
      if (this.nodes instanceof Array && typeof func == "function") {
        this.each(function (item, index, array) {
          (func) ? item.removeEventListener(event, func, false) : item["on" + event] = null;
        })
      } else {
        (func) ? this.nodes.removeEventListener(event, func, false) : this.nodes["on" + event] = null;
      }
      return this;
    };
    __.prototype.click = function (func) {
      if (typeof func == "function") {
        if (this.nodes instanceof Array) {
          this.each(function (item, index, array) {
            item.addEventListener("click", func, false);
          })
        } else {
          this.nodes.addEventListener("click", func, false);
        }
      } else {
        this.nodes.click();
      }
      return this;
    };
    __.prototype.append = function (node) {
      if (typeof node == "string") {
        this.nodes.insertAdjacentHTML("beforeend", node);
      } else if (typeof node == "object") {
        if (/(HTML)/gi.test(node.toString())) {
          switch (/(Collection)/gi.test(node.toString())) {
            case true:
              loopAndExecuteReverse(this, arrNodes, this.nodes.appendChild);
              break;
            default:
              this.nodes.appendChild(node);
              break;
          }

        } else if (node instanceof Array) {
          loopAndExecuteReverse(this, node, this.nodes.appendChild);
        } else {
          throw new Error("Passed in node or array is non-irretable")
        }
      } else {
        throw new Error("Provdide Object or String Args")
      }
      return this;
    };
    __.prototype.children = function () {
      setCurrentNode(this,converToArray(this.nodes.children));
      return this;
    };
    __.prototype.remove = function () {
      this.nodes.outerHTML = "";
      return this;
    };
    __.prototype.hide = function () {
      switch (this.nodes instanceof Array) {
        case true:
          loopAndExecute(this, this.nodes, function (node) {
            node.style.display = "none";
          })
          break;
        default:
          this.nodes.style.display = "none"
          break;
      }
      return this;
    };
    __.prototype.show = function () {
      switch (this.nodes instanceof Array) {
        case true:
          loopAndExecute(this, this.nodes, function (node) {
            node.style.display = "block";
          })
          break;
        default:
          this.nodes.style.display = "block"
          break;
      }
      return this;
    };
    __.prototype.toggleClass = function (className) {
      if (typeof className == "string") {
        switch (this.nodes instanceof Array) {
          case true:
            loopAndExecute(this, this.nodes, function (node) {
              node.classList.toggle(className)
            })
            break;
          default:
            this.nodes.classList.toggle(className);
            break;
        }
      }
      return this;
    };
    __.prototype.attr = function(attr,value){
      if (typeof attr == "string" && typeof value != "undefined") {
        switch (this.nodes instanceof Array) {
          case true:
            loopAndExecute(this, this.nodes, function (node) {
              node.setAttribute(attr,value)
            })
            break;
          default:
            this.nodes.setAttribute(attr,value)
            break;
        }
      }
      return this;
    };
    __.prototype.removeAttr = function(attr){
      if (typeof attr == "string") {
        switch (this.nodes instanceof Array) {
          case true:
            loopAndExecute(this, this.nodes, function (node) {
              node.removeAttribute(attr)
            })
            break;
          default:
            this.nodes.removeAttribute(attr);
            break;
        }
      }
      return this;
    };
    
    
    //Return new  __()
    return function (nodes) {
      return new __(nodes);
    };
  })();
})(nQuery);