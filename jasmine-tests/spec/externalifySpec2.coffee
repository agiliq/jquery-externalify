describe "", ->
  beforeEach ->
    l = document.createElement 'a'
    l.id = "link"
    if $(l).attr "rel"
      $(l).removeAttr "rel"
    if $(l).attr "class"
      $(l).removeAttr "class"  
    
    divele = document.createElement 'div'
    divele.id = "divlink"
    
    divele.appendChild l
    document.body.appendChild divele
    
    
    
  afterEach ->
    
    $("#divlink").remove()
    
  
  it "external http rel : external",->
    $("#link").attr "href", "http://google.com"
    
    $("#link").externalify()
    expect($("#link").attr("rel")).toBe("external")
  
  it "external http rel + class : externalexternal", ->
    $("#link").attr "href","http://google.com"
    $("#link").externalify({'class':'external'})  
    expect($("#link").attr("rel")+$("#link").attr("class")).toBe("externalexternal")
  
  it "external https rel : external", ->
    $("#link").attr "href","https://google.com"
    $("#link").externalify()
    expect($("#link").attr("rel")).toBe("external")
  
  it "external https rel+class : externalexternal", ->
    $("#link").attr "href","https://google.com"
    $("#link").externalify({'class':'external'})  
    expect($("#link").attr("rel")+$("#link").attr("class")).toBe("externalexternal")    
  
  it "external http class is undefined when called without options",->
    $("#link").attr "href","http://google.com"
    $("link").externalify()
    expect($("#link").attr("class")).toBeUndefined()
  
  it "external https class is undefined when called without options", ->
    $("#link").attr "href","https://google.com"
    $("#link").externalify()
    expect($("#link").attr("class")).toBeUndefined()
    
    
      
