let song;
let img01;

function setup() {
  song = loadSound('data/felaxa.mp3');
  createCanvas(windowWidth, windowHeight);
 background(25,30,20);
  img01 = loadImage ('data/01.jpg');
 
}


function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
 
  } else {
    song.play();
    
   background(img01);
  }
}

function draw() {
 textSize(32);
  fill(255);
  //stroke(0);
  strokeWeight(4);
  text('Click here to play/stop sound', 50, 50);
  text ('"Alexandriani Felacha" performed by Kiriakos Manias', 100,100);
  //let str1 = 'Click here to play';
  //let str2 = 'Alexandriani Felacha performed by Kiriakos Manias';

}
