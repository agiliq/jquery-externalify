testExternalLinkHttp = ->
  aa = document.createElement('a')
  aa.href = "http://google.com"
  $(aa).externalify()
  #return ($(aa).attr 'class')+($(aa).attr 'rel')
  #return $(aa).attr 'rel'
  return $(aa)[0].rel
 
testExternalLinkHttps = ->
  aa = document.createElement 'a'
  aa.href = "https://google.com"
  $(aa).attr "gg","nnnn"
  $(aa).externalify({'class':'external'})
  #return ($(aa).attr 'class')+($(aa).attr 'rel')
  #return $(aa).attr 'rel'
  kk = $(aa)[0]
  $(aa).attr  "rel",(j) ->  
    alert "inside"
    alert j
    
    
tt = ->
  return "hh"  
  
  
  
window.tt = tt  
window.testExternalLinkHttp=testExternalLinkHttp
window.testExternalLinkHttps=testExternalLinkHttps
