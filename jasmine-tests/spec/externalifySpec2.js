(function() {

  describe("", function() {
    beforeEach(function() {
      var divele, l;
      l = document.createElement('a');
      l.id = "link";
      if ($(l).attr("rel")) $(l).removeAttr("rel");
      if ($(l).attr("class")) $(l).removeAttr("class");
      divele = document.createElement('div');
      divele.id = "divlink";
      divele.appendChild(l);
      return document.body.appendChild(divele);
    });
    afterEach(function() {
      console.log("Beforer : ");
      console.log($('#link'));
      $("#divlink").remove();
      console.log("After : ");
      return console.log($('#link'));
    });
    it("external http rel : external", function() {
      $("#link").attr("href", "http://google.com");
      console.log($("#link").attr("href") + " ---");
      $("#link").externalify();
      return expect($("#link").attr("rel")).toBe("external");
    });
    it("external http rel + class : externalexternal", function() {
      $("#link").attr("href", "http://google.com");
      $("#link").externalify({
        'class': 'external'
      });
      return expect($("#link").attr("rel") + $("#link").attr("class")).toBe("externalexternal");
    });
    it("external https rel : external", function() {
      $("#link").attr("href", "https://google.com");
      $("#link").externalify();
      return expect($("#link").attr("rel")).toBe("external");
    });
    it("external https rel+class : externalexternal", function() {
      $("#link").attr("href", "https://google.com");
      $("#link").externalify({
        'class': 'external'
      });
      return expect($("#link").attr("rel") + $("#link").attr("class")).toBe("externalexternal");
    });
    it("external http class is undefined when called without options", function() {
      $("#link").attr("href", "http://google.com");
      $("link").externalify();
      return expect($("#link").attr("class")).toBeUndefined();
    });
    return it("external https class is undefined when called without options", function() {
      $("#link").attr("href", "https://google.com");
      $("#link").externalify();
      return expect($("#link").attr("class")).toBeUndefined();
    });
  });

}).call(this);
