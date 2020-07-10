var nombres = ['juan','pedro','Jhon','david','jose'];

for(var i = 0;i < nombres.length;i++){
   saludar(nombres[i]);
}

function dividir(nombre){
  var name = nombre.split('');
  return name;
}

function unir(cadena){
  var cadena = cadena.join('');
  return cadena;
}

function saludar(name){  
  name = dividir(name); 

  if(name[0]=='j' || name[0]=='J'){
    return console.log("hello " + unir(name));
  }else{
    return console.log("Goodbye " + unir(name));
  }
}
