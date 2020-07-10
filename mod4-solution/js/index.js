var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
// Immediately Invoked Function Expression
// IIFE
(function (name) {
  for(var i=0; i<name.length;i++){
    if(name[i].charAt(0)=='J' || name[i].charAt(0)=='j'){
      helloSpeak.speak(name[i]);
    }else{
      byeSpeak.speak(name[i]);
    }
  }
})(names);