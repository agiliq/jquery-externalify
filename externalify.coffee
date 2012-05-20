(($) ->
    
  $.fn.externalify = (options) ->
    
    settings = $.extend {
      'rel' : 'external' 
      } , options 
     
     
    
    if document.getElementById(@selector.substr(1,@selector.length))
      if document.getElementById(@selector.substr(1,@selector.length)).nodeName is "A"
        link = $(@selector)
        if (link[0].toString().indexOf("http://") is 0)or(link[0].toString().indexOf("https://") is 0)
          # "it is a single link"
          unless link[0] is window.location.host
            link.attr settings
            return
    
    links = $ @selector+" a"
    if links.length is 0
      return
     
    for i in links
      if (i.toString().indexOf("http://") is 0)or(i.toString().indexOf("https://") is 0)
        unless i is window.location.host
          $(i).attr settings
          
) jQuery  
