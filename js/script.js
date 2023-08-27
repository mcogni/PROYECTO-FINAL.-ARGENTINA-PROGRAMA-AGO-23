document.getElementById("enviarMail").addEventListener("click", function() {
    var subject = "Estoy interesado en sus servicios.";
    var recipient = "dustinray@gmx.com";
    var mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject);
    window.location.href = mailtoLink;
  });
  