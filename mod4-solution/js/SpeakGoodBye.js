(function(window){
  var byeSpeaker={};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function (nombre) {
    console.log(speakWord + " " + nombre);
 }
 window.byeSpeaker = byeSpeaker;
}
)(window);