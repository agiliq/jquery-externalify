(function() {
  var testExternalLinkHttp, testExternalLinkHttps, tt;

  testExternalLinkHttp = function() {
    var aa;
    aa = document.createElement('a');
    aa.href = "http://google.com";
    $(aa).externalify();
    return $(aa)[0].rel;
  };

  testExternalLinkHttps = function() {
    var aa, kk;
    aa = document.createElement('a');
    aa.href = "https://google.com";
    $(aa).attr("gg", "nnnn");
    $(aa).externalify({
      'class': 'external'
    });
    kk = $(aa)[0];
    return $(aa).attr("rel", function(j) {
      alert("inside");
      return alert(j);
    });
  };

  tt = function() {
    return "hh";
  };

  window.tt = tt;

  window.testExternalLinkHttp = testExternalLinkHttp;

  window.testExternalLinkHttps = testExternalLinkHttps;

}).call(this);
