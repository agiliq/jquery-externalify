(function( $ ) {
  $.fn.externalify = function(options) {
     
       
         
      var settings = $.extend({
      
        'rel' : 'external'
      
      },options);
      
   
    
   var  links = $(this.selector+" a");
   
   if(links.length==0)
   {
     //dealing with single hyperlink
    
     
     if(this[0].toString().indexOf("http://")==0)
     $(this).attr(settings);
   
   }
   
   //dealing with links in a container
   for(i=0;i<links.length;i++)
   {
     if(links[i].toString().indexOf("http://")>-1)
         {
            
             $(links[i]).attr(settings);
         }
   }
     
     
    
  };
})( jQuery );
