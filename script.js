document.getElementByClassName("blanks").innerHTML = "New text!";
$(function(){
 $("span").children("span.blanks").css({"color": "red"});
 $("p").hide();
});
