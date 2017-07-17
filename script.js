
$(function(){
 var currentLine;
 
 $("span.sentence").dblclick(function(event){
     currentLine = event.target.id;                  
  });
 
 $("button").click(function(event){
  if(currentLine){
   $("#" + currentLine).children(".blanks").text($(event.target).text());
  }
 });
});
