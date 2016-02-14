var imageSet = ['bethany', 'fern', 'jorge', 'jp', 'luisq'].map(function(name) { return './images/' + name + 'Profile.jpg' });

function getRandomImage(){
    var image = imageSet[Math.floor(Math.random()*imageSet.length)];
    
    return image;
}
function displayRandomImage(){
    var image = getRandomImage();
    randomImage.src = image;
    imageSet.splice(imageSet.indexOf(image));
}
function displayRandomImage2(){
    randomImage2.src = getRandomImage();
}

function onload(){
    displayRandomImage();
    displayRandomImage2();
}