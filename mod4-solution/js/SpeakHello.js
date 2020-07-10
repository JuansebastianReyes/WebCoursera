(function(window){
  var helloSpeaker={};
  var speakWord = "Hello";
  helloSpeaker.speak = function (nombre) {
    console.log(speakWord + " " + nombre);
 }
 window.helloSpeaker = helloSpeaker;
}
)(window);
