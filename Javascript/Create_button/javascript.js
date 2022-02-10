// create the button
var button = document.createElement("button");
button.innerHTML = "test create button";

var button2 = document.createElement("button");
button2.innerHTML = "test create button 2";

//Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// Append DIV
var get_js_create = document.getElementById("div-in-section-4");
get_js_create.appendChild(button2);