(function() {

  (function($) {
    return $.fn.externalify = function(options) {
      var i, link, links, settings, _i, _len, _results;
      settings = $.extend({
        'rel': 'external'
      }, options);
      console.log("-start-");
      console.log(this);
      if (document.getElementById(this.selector.substr(1, this.selector.length))) {
        if (document.getElementById(this.selector.substr(1, this.selector.length)).nodeName === "A") {
          link = $(this.selector);
          if ((link[0].toString().indexOf("http://") === 0) || (link[0].toString().indexOf("https://") === 0)) {
            if (link[0] !== window.location.host) {
              link.attr(settings);
              console.log("single link");
              return;
            }
          }
        }
      }
      console.log("not single link");
      links = $(this.selector + " a");
      console.log(links);
      console.log("selectro : " + this.selector);
      if (links.length === 0) {
        console.log("links.length = 0");
        return;
      }
      console.log("not emplty");
      console.log(links.length);
      _results = [];
      for (_i = 0, _len = links.length; _i < _len; _i++) {
        i = links[_i];
        console.log(i.toString() + "---");
        if ((i.toString().indexOf("http://") === 0) || (i.toString().indexOf("https://") === 0)) {
          console.log(i + ":::");
          if (i !== window.location.host) {
            console.log("Before :: " + $(i).attr("rel"));
            $(i).attr(settings);
            _results.push(console.log("After : " + $(i).attr("rel")));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
  })(jQuery);

}).call(this);
