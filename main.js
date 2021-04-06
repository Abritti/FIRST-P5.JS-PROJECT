function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();


    
}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 430, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 430, 80);



    fill(0, 128, 0);
    stroke(255, 0, 0);
    rect(90, 40, 460, 20);


   
    
    ellipse(51, 49, 55, 55);
    ellipse(51, 430, 55, 55);
    ellipse(591, 50, 55, 55);
    ellipse(591, 430, 55, 55);
   
    

    

    rect(90, 420, 460, 20);


}

function take_snapshot(){
    save('Abritti.png');
}
