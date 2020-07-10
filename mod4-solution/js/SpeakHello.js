(function(window){
  var helloSpeak={};
  var speakWord = "Hello";
  helloSpeak.speak = function (nombre) {
    console.log (speakWord + " " + nombre);
 }
 window.helloSpeak = helloSpeak;
}
)(window);
