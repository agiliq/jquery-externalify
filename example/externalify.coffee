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
    
    console.log "not single,not empty"
    
    for i in links
        
      #if (i.toString().indexOf("http://") is 0)or(i.toString().indexOf("https://") is 0)
      console.log "href : "+i.href 
      if (i.href.indexOf("http://"))or(i.href.indexOf("https://"))
        console.log i
        console.log i.host
        console.log i.href
        console.log i.toString()
        console.log "Before : "+$(i).attr("class")
        unless i is window.location.host
          i
          $(i).attr settings
          console.log "After : "+$(i).attr("class")
          
) jQuery  
