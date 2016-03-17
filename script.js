function convert() {

  var str = document.getElementById('number').value;
  var fromBase = document.getElementById('from').value;
  var toBase = document.getElementById('to').value;

  var num = parseInt(str, fromBase);

  if (isNaN(num)) {
    document.getElementById('answer').innerHTML = "Wrong input! :(";
  } else {
    document.getElementById('answer').innerHTML = str + " in base " + fromBase + " is " + num.toString(toBase).fontcolor("#545454") + " in base " + toBase;
  }
}