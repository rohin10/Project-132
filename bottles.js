img="";
status1="";
function preload(){
    img = loadImage("bottles.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(440,240);
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";


}
function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    document.getElementById("status").innerHTML = "Status : Objects Detected";
}
function draw(){
    image(img,0,0,640,420);
    
}