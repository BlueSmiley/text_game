
$(function(){
 $("button").click(function(event){
  $("span").children("span.blanks").text($(event.target).text());
 });
});
