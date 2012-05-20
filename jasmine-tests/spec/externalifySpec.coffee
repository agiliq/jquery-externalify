
describe "external https link rel", ->
  beforeEach ->
    if $("#ahttps")
      if $("#ahttps").attr "rel"
        $("#ahttps").removeAttr "rel"
        
  it "its attribute should be rel : external", ->
    l = document.createElement 'a'
    l.href = "https://google.com"
    l.id = "ahttps"
    
    divele = document.createElement 'div'
    divele.appendChild l
    divele.id = "divhttps"  
    
    document.body.appendChild divele
    $("#divhttps").externalify()
    expect($("#ahttps").attr("rel")).toBe("external")

describe "external https link rel+class", ->
  beforeEach ->
    if $("#ahttps")
      if $("#ahttps").attr "rel"
        $("#ahttps").removeAttr "rel"
      if $("#ahttps").attr "class"
        $("#ahttps").removeAttr "class"
    
  it "its attribute should be rel : external , class : external", ->
    l = document.createElement 'a'
    l.href = "https://google.com"
    l.id = "ahttps"
    
    divele = document.createElement 'div'
    divele.appendChild l
    divele.id = "divhttps"  
    
    document.body.appendChild divele
    $("#divhttps").externalify({'class':'external'})
    expect($("#ahttps").attr("rel") + $("#ahttps").attr("class")).toBe("externalexternal")


describe "external http link rel", ->
  beforeEach ->
    if $("#ahttp")
      if $("#ahttp").attr "rel"
        $("#ahttp").removeAttr "rel"
        
  it "its attribute should be rel : external", ->
    l = document.createElement 'a'
    l.href = "http://google.com"
    l.id = "ahttp"
    
    divele = document.createElement 'div'
    divele.appendChild l
    divele.id = "divhttp"  
    
    document.body.appendChild divele
    $("#divhttp").externalify()
    expect($("#ahttp").attr("rel")).toBe("external")
    

describe "external http link rel+class", ->
  beforeEach ->
    if $("#ahttp")
      if $("#ahttp").attr "rel"
        $("#ahttp").removeAttr "rel"
      if $("#ahttp").attr "class"
        $("#ahttp").removeAttr "class"
    
  it "its attribute should be rel : external , class : external", ->
    l = document.createElement 'a'
    l.href = "http://google.com"
    l.id = "ahttp"
    
    divele = document.createElement 'div'
    divele.appendChild l
    divele.id = "divhttp"  
    
    document.body.appendChild divele
    $("#divhttp").externalify({'class':'external'})
    expect($("#ahttp").attr("rel") + $("#ahttp").attr("class")).toBe("externalexternal")

describe "Internal link rel", ->
  beforeEach ->
    if $("#aint")
      if $("#aint").attr "rel"
        $("#aint").removeAttr "rel"
        
  it "its attribute should be rel : undefined", ->
    l = document.createElement 'a'
    l.href = "gggg"
    l.id = "aint"
    
    divele = document.createElement 'div'
    divele.appendChild l
    divele.id = "divint"  
    
    document.body.appendChild divele
    $("#divint").externalify()
    expect($("#aint").attr("rel")).toBeUndefined()

describe "Internal link  with options class:external", ->
  beforeEach ->
    l = document.createElement 'a'
    l.href = "gggg"
    l.id = "aintrelclass"
    
    divele = document.createElement 'div'
    divele.appendChild l
    divele.id = "divintrelclass"  
    
    document.body.appendChild divele
    
    if $("#aintrelclass")
      if $("#aintrelclass").attr "rel"
        $("#aintrelclass").removeAttr "rel"
      if $("#aintrelclass").attr "class"
        $("#aintrelclass").removeAttr "class"
    
  it "its attribute should be rel : undefined ", ->
    
    $("#divintrelclass").externalify({'class':'external'})
    expect($("#aintrelclass").attr("rel")).toBeUndefined()
    
  it "its attribute should be class : undefined ", ->
    $("#divintrelclass").externalify({'class':'external'})
    expect($("#aintrelclass").attr("class")).toBeUndefined()
    
    
    
