import { getinputdirection } from "./input.js";

"use strict";
let canvas;
let context;

window.onload = init;

function init(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    function setup() {
        canvas.onresize = function() {
          canvas.height = window.outerHeight;
          canvas.width = canvas.height * (16 / 9);
        }
      }
    setup()
}

function gameLoop(timeStamp){
    draw();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function draw(){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
}