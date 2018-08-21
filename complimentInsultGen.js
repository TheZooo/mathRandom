var x = ["Nice", "Cool", "Awesome", "Pretty", "Handsome", "Marvelous"];
var m = ["Horrible", "Bad", "Negative", "Lacking", "Lazy", "Worst"];
var y = prompt("What is your name");
var z = Math.floor(Math.random() * x.length);
var w = Math.floor(Math.random() * 4);
if (w === 0 || w === 1) {
  window.alert(x[z] + " " + y);
} else if (w === 2 || w === 3) {
  window.alert(m[z] + " " + y);
} else {}