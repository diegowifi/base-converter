function convert(){

  var str = document.getElementById('number').value;
  var fromBase = document.getElementById('from').value;
  var toBase = document.getElementById('to').value;

	var num = parseInt(str, fromBase);
  
  document.getElementById('answer').innerHTML = "El número " + str + " escrito en base " + fromBase + " es igual a " + num.toString(toBase) + " en base " + toBase;
    
}


