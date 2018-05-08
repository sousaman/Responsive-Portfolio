$(document).ready(function() {
    var email = "james.l.henley@gmail.com";
    var subject = "";
    var body = "";
    var form = document.querySelector("#form");
    form.addEventListener("submit", function(event) {
        subject = "Portfolio - " + form.elements.exampleInputName1.value;
        body = form.elements.exampleFormControlTextarea1.value; 
        console.log('mailto:' + email +'?subject=' + subject + '&body=' + body);
        window.open('mailto:' + email +'?subject=' + subject + '&body=' + body);
        event.preventDefault();
      });
})

