var radius2 = Math.pow(0.175, 2); //a variable to get radius square
var pi = 3.14159 //get pi from math funtion
var area = pi * radius2; //area of the cross section of wire
var density = 1.25;

function tUse() {
    var length = document.getElementById("len").value;

    var volume = area * length;
    var weight = (volume * density).toFixed(3);
    document.getElementById("out").innerHTML = weight+ " gram ";
}