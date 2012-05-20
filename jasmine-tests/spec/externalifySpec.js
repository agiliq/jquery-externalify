(function() {

  describe("external https link rel", function() {
    beforeEach(function() {
      if ($("#ahttps")) {
        if ($("#ahttps").attr("rel")) return $("#ahttps").removeAttr("rel");
      }
    });
    return it("its attribute should be rel : external", function() {
      var divele, l;
      l = document.createElement('a');
      l.href = "https://google.com";
      l.id = "ahttps";
      divele = document.createElement('div');
      divele.appendChild(l);
      divele.id = "divhttps";
      document.body.appendChild(divele);
      $("#divhttps").externalify();
      return expect($("#ahttps").attr("rel")).toBe("external");
    });
  });

  describe("external https link rel+class", function() {
    beforeEach(function() {
      if ($("#ahttps")) {
        if ($("#ahttps").attr("rel")) $("#ahttps").removeAttr("rel");
        if ($("#ahttps").attr("class")) return $("#ahttps").removeAttr("class");
      }
    });
    return it("its attribute should be rel : external , class : external", function() {
      var divele, l;
      l = document.createElement('a');
      l.href = "https://google.com";
      l.id = "ahttps";
      divele = document.createElement('div');
      divele.appendChild(l);
      divele.id = "divhttps";
      document.body.appendChild(divele);
      $("#divhttps").externalify({
        'class': 'external'
      });
      return expect($("#ahttps").attr("rel") + $("#ahttps").attr("class")).toBe("externalexternal");
    });
  });

  describe("external http link rel", function() {
    beforeEach(function() {
      if ($("#ahttp")) {
        if ($("#ahttp").attr("rel")) return $("#ahttp").removeAttr("rel");
      }
    });
    return it("its attribute should be rel : external", function() {
      var divele, l;
      l = document.createElement('a');
      l.href = "http://google.com";
      l.id = "ahttp";
      divele = document.createElement('div');
      divele.appendChild(l);
      divele.id = "divhttp";
      document.body.appendChild(divele);
      $("#divhttp").externalify();
      return expect($("#ahttp").attr("rel")).toBe("external");
    });
  });

  describe("external http link rel+class", function() {
    beforeEach(function() {
      if ($("#ahttp")) {
        if ($("#ahttp").attr("rel")) $("#ahttp").removeAttr("rel");
        if ($("#ahttp").attr("class")) return $("#ahttp").removeAttr("class");
      }
    });
    return it("its attribute should be rel : external , class : external", function() {
      var divele, l;
      l = document.createElement('a');
      l.href = "http://google.com";
      l.id = "ahttp";
      divele = document.createElement('div');
      divele.appendChild(l);
      divele.id = "divhttp";
      document.body.appendChild(divele);
      $("#divhttp").externalify({
        'class': 'external'
      });
      return expect($("#ahttp").attr("rel") + $("#ahttp").attr("class")).toBe("externalexternal");
    });
  });

  describe("Internal link rel", function() {
    beforeEach(function() {
      if ($("#aint")) {
        if ($("#aint").attr("rel")) return $("#aint").removeAttr("rel");
      }
    });
    return it("its attribute should be rel : undefined", function() {
      var divele, l;
      l = document.createElement('a');
      l.href = "gggg";
      l.id = "aint";
      divele = document.createElement('div');
      divele.appendChild(l);
      divele.id = "divint";
      document.body.appendChild(divele);
      $("#divint").externalify();
      return expect($("#aint").attr("rel")).toBeUndefined();
    });
  });

  describe("Internal link  with options class:external", function() {
    beforeEach(function() {
      var divele, l;
      l = document.createElement('a');
      l.href = "gggg";
      l.id = "aintrelclass";
      divele = document.createElement('div');
      divele.appendChild(l);
      divele.id = "divintrelclass";
      document.body.appendChild(divele);
      if ($("#aintrelclass")) {
        if ($("#aintrelclass").attr("rel")) $("#aintrelclass").removeAttr("rel");
        if ($("#aintrelclass").attr("class")) {
          return $("#aintrelclass").removeAttr("class");
        }
      }
    });
    it("its attribute should be rel : undefined ", function() {
      $("#divintrelclass").externalify({
        'class': 'external'
      });
      return expect($("#aintrelclass").attr("rel")).toBeUndefined();
    });
    return it("its attribute should be class : undefined ", function() {
      $("#divintrelclass").externalify({
        'class': 'external'
      });
      return expect($("#aintrelclass").attr("class")).toBeUndefined();
    });
  });

}).call(this);
