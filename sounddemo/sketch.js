let backgroundMusic;
let spellSound;

function preload() {
  backgroundMusic = loadSound("assets/TownTheme.mp3");
  spellSound = loadSound("assets/rpg_sound_pack/RPG Sound Pack/battle/swing3.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.6);
  backgroundMusic.loop();
  spellSound.setVolume(0.9);
}

function draw() {

}

function mousePressed() {
  fill(random(255), random(255), random(255));
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
  spellSound.play();
}
