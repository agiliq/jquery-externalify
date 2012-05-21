(function() {

  (function($) {
    return $.fn.externalify = function(options) {
      var i, link, links, settings, _i, _len, _results;
      settings = $.extend({
        'rel': 'external'
      }, options);
      if (document.getElementById(this.selector.substr(1, this.selector.length))) {
        if (document.getElementById(this.selector.substr(1, this.selector.length)).nodeName === "A") {
          link = $(this.selector);
          if ((link[0].toString().indexOf("http://") === 0) || (link[0].toString().indexOf("https://") === 0)) {
            if (link[0] !== window.location.host) {
              link.attr(settings);
              return;
            }
          }
        }
      }
      links = $(this.selector + " a");
      if (links.length === 0) return;
      console.log("not single,not empty");
      _results = [];
      for (_i = 0, _len = links.length; _i < _len; _i++) {
        i = links[_i];
        console.log("href : " + i.href);
        if ((i.href.indexOf("http://")) || (i.href.indexOf("https://"))) {
          console.log(i);
          console.log(i.host);
          console.log(i.href);
          console.log(i.toString());
          console.log("Before : " + $(i).attr("class"));
          if (i !== window.location.host) {
            i;
            $(i).attr(settings);
            _results.push(console.log("After : " + $(i).attr("class")));
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
