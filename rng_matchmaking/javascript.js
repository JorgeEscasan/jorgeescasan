var imageSet = ['bethany', 'fern', 'jorge', 'jp', 'luisq'].map(function(name) { return './images/' + name + 'Profile.jpg' });
var randomA = Math.floor(Math.random()*imageSet.length)
var imageA = imageSet[randomA];
var randomB = Math.floor(Math.random()*imageSet.length)
if (randomA == randomB){
    if (randomB = imageSet.length) {
        randomB--;
    } else {
        randomB++;
    }
}
var imageB = imageSet[randomB];

function getRandomImage(){
    return imageA;

}
function getRandomImage2(){
    return imageB;
}
function displayRandomImage(){

    randomImage.src = getRandomImage();

}
function displayRandomImage2(){
    randomImage2.src = getRandomImage2();
}
var txt = '{"lovers":[' +
'{"firstName":"Bethany","lastName":"Colgrove" },' +
'{"firstName":"Fernanda","lastName":"Lutteroth" },' +
'{"firstName":"Jorge","lastName":"Escasan" },' +
'{"firstName":"JP","lastName":"Ricardo" },' +
'{"firstName":"Luis","lastName":"Quiambo" }]}';
function displayNames(){
    var obj = eval ("(" + txt + ")");
    document.getElementById("demo").innerHTML =
    obj.lovers[randomA].firstName + " " + obj.lovers[randomA].lastName;
}
function displayNames2(){
    var obj = eval ("(" + txt + ")");
    document.getElementById("demo2").innerHTML =
    obj.lovers[randomB].firstName + " " + obj.lovers[randomB].lastName;
}
function onload(){
    displayRandomImage();
    displayRandomImage2();
    displayNames();
    displayNames2();
}