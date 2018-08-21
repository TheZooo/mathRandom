var x = ["Stirfry", "Fried", "Pan-cooked", "Steamed", "Grilled", "Slow-cooked", "Baked", "Broiled", "Minced", "BBQ", "Glazed", "Charred"];
var y = ["Steak", "Pork", "Fish", "Potato", "Onions", "Clams", "Rice", "Hams", "Egg", "Carrot", "Tomato", "Chicken", "Lettuce", "Squid"];
var a = Math.floor(Math.random() * x.length);
var b = Math.floor(Math.random() * x.length);
var c = Math.floor(Math.random() * y.length);
var d = Math.floor(Math.random() * y.length);
window.alert(x[a] + " " + y[c] + " " + "with" + " " + x[b] + " " + y[d]);
