
$(function(){
 var currentLine;
 
 $("span.sentence").click(function(event){
     if(currentLine){
      $("#" + currentLine).css("color","black");
     }
     currentLine = event.target.id;
     $("#" + currentLine).css("color","red");
  });
 
 $("button").click(function(event){
  if(currentLine){
   $("#" + currentLine).children(".blanks").text($(event.target).text());
  }
 });
});
