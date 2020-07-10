(function(window){
  var byeSpeak={};
  var speakWord = "Good Bye";
  byeSpeak.speak = function (nombre) {
    console.log (speakWord + " " + nombre);
 }
 window.byeSpeak = byeSpeak;
}
)(window);