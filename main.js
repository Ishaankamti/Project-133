img="";
status="";
objects=[];

function preload() {
    img=loadImage('dog_cat.jpg');
    console.log("image_loaded");
}


function draw() {



    image(img,0,0,640,420);

if(status != "") {
    for(i=0; 1<objects.length; i++) {
        document.getElementById("status").innerHTML="Status : Object Detected";

        fill("#FF0000");
        value=objects[i].confidence;
        percent=floor(value * 100);
        text(objects[i].label+" " + percent + "%", objects[i].x+15, objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}


    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);


    fill("#FF0000");
    text("Cat",300,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}
 


function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    console.log("canvas_created");
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detection Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error , results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}