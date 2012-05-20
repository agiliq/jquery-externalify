(($) ->
    
  $.fn.externalify = (options) ->
    
    settings = $.extend {
      'rel' : 'external' 
      } , options 
     
    console.log "-start-"
    console.log @
    
    if document.getElementById(@selector.substr(1,@selector.length))
      if document.getElementById(@selector.substr(1,@selector.length)).nodeName is "A"
        link = $(@selector)
        if (link[0].toString().indexOf("http://") is 0)or(link[0].toString().indexOf("https://") is 0)
          # "it is a single link"
          unless link[0] is window.location.host
            link.attr settings
            console.log "single link"
            return
    console.log "not single link"
    links = $ @selector+" a"
    console.log links
    console.log "selectro : "+@selector
    if links.length is 0
      console.log "links.length = 0"
      return
    console.log "not emplty" 
    console.log links.length
    for i in links
      console.log i.toString()+"---"
      if (i.toString().indexOf("http://") is 0)or(i.toString().indexOf("https://") is 0)
        console.log i+":::"
        unless i is window.location.host
          console.log "Before :: "+$(i).attr("rel")
          $(i).attr settings
          console.log "After : "+$(i).attr("rel")
          
) jQuery  
