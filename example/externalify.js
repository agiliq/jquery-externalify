(function() {

  (function($) {
    return $.fn.externalify = function(options) {
      var i, links, settings, _i, _len, _results;
      settings = $.extend({
        'rel': 'external'
      }, options);
      links = $(this.selector + " a");
      if (links.length === 0) {
        if ((this[0].toString().indexOf("http://") === 0) || (this[0].toString().indexOf("https://") === 0)) {
          if (this[0].host !== window.location.host) $(this).attr(settings);
        }
      }
      _results = [];
      for (_i = 0, _len = links.length; _i < _len; _i++) {
        i = links[_i];
        if ((i.toString().indexOf("http://") === 0) || (i.toString().indexOf("https://") === 0)) {
          if (i !== window.location.host) {
            _results.push($(i).attr(settings));
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