jQuery Externalify
==================

Plugin to tag external urls as rel=external. 

# What?

All external urls are marked with a rel="external" attribute. It also optionally adds a class to external links.

# Why?

You can write your code with usual `<a href="http://google.com">` etc, and the plugin will apply this atribute to correct links. (For example for styling external links differently.)
    
# Usage

    $("body").externalify()
    
will apply rel="external" to all links on the page.
    
or
    
    $("#article").externalify({"class": "external"})
    
will apply rel="external", class="external" on all links in `#article` selector.
