(($) ->
  $.fn.externalify = (options) ->
    
    settings = $.extend {
      'rel' : 'external' 
      } , options 
    
    links = $ @selector+" a"
    if links.length is 0
      if ((@[0].toString().indexOf("http://") is 0) or (@[0].toString().indexOf("https://") is 0))
        unless @[0].host is  window.location.host
          $(@).attr settings
          
    for i in links
      if (i.toString().indexOf("http://") is 0)or(i.toString().indexOf("https://") is 0)
        unless i is window.location.host
          
          $(i).attr settings
    
) jQuery  
