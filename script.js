document.getElementByClassName("blanks").innerHTML = "New text!";
window.alert("wat");
$(function(){
 $("span").children("span.blanks").css({"color": "red"});
 $("p").hide();
});
