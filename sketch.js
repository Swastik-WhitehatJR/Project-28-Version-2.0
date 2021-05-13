const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


var gameState = "HOME";

var win;

var world;
var engine;
var canvas;

var logo, logoimg;
var logo2, logo2img;
var play, playimg;
var backimg, back_character_select_img, back_game_img;
var icon, iconimg;
var info, infoimg;
var boy1, boy1img;
var boy2, boy2img;
var boy3, boy3img;
var boy4, boy4img;
var girl1, girl1img;
var character_select_text, character_select_text_itreeback_btn, back_btn_img;
var selected_character = "none";
var tree, treeimg;

var stone, ground, elastic;
var joint;
var chance = 0;


function preload() {
  backimg = loadImage("images/background.jpg");
  back_game_img = loadImage("images/back_game_edit.jpg");
  back_character_select_img = loadImage("images/back_character_select.jfif")
  logoimg = loadImage("images/mini_mango.png");
  logo2img = loadImage("images/mini_mango.png");
  playimg = loadImage("images/play.png");
  win = loadImage("images/win.jpg");
  iconimg = loadImage("images/logo.png");
  infoimg = loadImage("images/info.png");
  boy1img = loadImage("images/boy1.png");
  boy2img = loadImage("images/boy2.png");
  boy3img = loadImage("images/boy3.png");
  boy4img = loadImage("images/boy4.png");
  girl1img = loadImage("images/girl1.png");
  back_btn_img = loadImage("images/back_btn.png");
  tree_img = loadImage("images/mango_tree.png");
  character_select_text_img = loadImage("images/character_select_text.png");
}


function setup() {
  createCanvas(1500, 900);

  engine = Engine.create();
  world = engine.world;

  logo = createSprite(750, 150, 20, 20);
  logo.addImage("logoimg", logoimg)
  logo.scale = 0.4;

  logo2 = createSprite(125, 40, 20, 20);
  logo2.addImage("logo2img", logo2img)
  logo2.scale = 0.1;
  logo2.visible = false;

  play = createSprite(750, 800, 20, 20);
  play.addImage("playimg", playimg)
  play.scale = 0.2;

  icon = createSprite(750, 470, 20, 20);
  icon.addImage("iconimg", iconimg)
  icon.scale = 0.2;

  info = createSprite(1430, 45, 20, 20);
  info.addImage("infoimg", infoimg)
  info.scale = 0.2;
  info.visible = false;

  boy1 = createSprite(187.5, 470, 20, 20);
  boy1.addImage("boy1img", boy1img)
  boy1.scale = 0.1;
  boy1.visible = false;

  boy2 = createSprite(480, 450, 20, 20);
  boy2.addImage("boy2img", boy2img)
  boy2.scale = 0.4;
  boy2.visible = false;

  boy3 = createSprite(750, 450, 20, 20);
  boy3.addImage("boy3img", boy3img)
  boy3.scale = 0.125;
  boy3.visible = false;

  boy4 = createSprite(1050, 450, 20, 20);
  boy4.addImage("boy4img", boy4img)
  boy4.scale = 0.075;
  boy4.visible = false;

  girl1 = createSprite(1350, 450, 20, 20);
  girl1.addImage("girl1img", girl1img)
  girl1.scale = 0.42;
  girl1.visible = false;

  character_select_text = createSprite(750, 112.5, 20, 20);
  character_select_text.addImage("character_select_text_img", character_select_text_img)
  character_select_text.visible = false;

  back_btn = createSprite(37.5, 40, 20, 20);
  back_btn.addImage("back_btn_img", back_btn_img)
  back_btn.scale = 0.2;
  back_btn.visible = false;

  /*tree = createSprite(1150, 500, 20, 20);
  tree.addImage("tree_img", tree_img)
  tree.scale = 0.15;
  tree.visible = false;*/

  GROUND = new Ground(0,900,5000,10);
  STONE = new Stone(180, 376, 20);
  MANGO_1 = new Mango(1025, 400, 30);
  MANGO_2 = new Mango(1075, 345, 30);
  MANGO_3 = new Mango(1125, 455, 30);
  MANGO_4 = new Mango(1245, 445, 30);
  MANGO_5 = new Mango(1150, 375, 30);
  MANGO_6 = new Mango(1325, 375, 30);
  MANGO_7 = new Mango(1050, 485, 30);
  MANGO_8 = new Mango(960, 450, 30);
  MANGO_9 = new Mango(1190, 470, 30)
  MANGO_10 = new Mango(1200, 200, 30)
  ELASTIC = new Elastic(STONE.body, { x: 140, y: 728 });


}


function draw() {
  background(backimg);

  Engine.update(engine);

  if (gameState === "HOME") {
    logo.visible = true;
    play.visible = true;
    icon.visible = true;
    info.visible = true;

    boy1.visible = false;
    boy2.visible = false;
    boy3.visible = false;
    boy4.visible = false;
    girl1.visible = false;
    logo2.visible = false;
    back_btn.visible = false;
    character_select_text.visible = false;

    if (mousePressedOver(play)) {
      gameState = "CHARACTER_SELECT";
    }

  }

  if (gameState === "CHARACTER_SELECT") {
    background(back_character_select_img);

    logo.visible = false;
    play.visible = false;
    icon.visible = false;
    info.visible = false;

    boy1.visible = true;
    boy2.visible = true;
    boy3.visible = true;
    boy4.visible = true;
    girl1.visible = true;
    logo2.visible = true;
    back_btn.visible = true;
    character_select_text.visible = true;

    if (mousePressedOver(back_btn)) {
      gameState = "HOME";
    }

    if (mousePressedOver(boy1)) {
      selected_character = "boy1";
      gameState = "GAME";
    }

    if (mousePressedOver(boy2)) {
      selected_character = "boy2";
      gameState = "GAME";
    }

    if (mousePressedOver(boy3)) {
      selected_character = "boy3";
      gameState = "GAME";
    }

    if (mousePressedOver(boy4)) {
      selected_character = "boy4";
      gameState = "GAME";
    }

    if (mousePressedOver(girl1)) {
      selected_character = "girl1";
      gameState = "GAME";
    }

    console.log(selected_character);

  }

  if (gameState === "GAME") {

    background(back_game_img);

    logo.visible = false;
    play.visible = false;
    icon.visible = false;
    info.visible = false;
    boy1.visible = false;
    boy2.visible = false;
    boy3.visible = false;
    boy4.visible = false;
    girl1.visible = false;
    logo2.visible = false;
    back_btn.visible = false;
    character_select_text.visible = false;
    
    MANGO_1.display();
    MANGO_2.display();
    MANGO_3.display();
    MANGO_4.display();
    MANGO_5.display();
    MANGO_6.display();
    MANGO_7.display();
    MANGO_8.display();
    MANGO_9.display();
    MANGO_10.display();
    STONE.display();
    ELASTIC.display();

    Collision(STONE, MANGO_1);
    Collision(STONE, MANGO_2);
    Collision(STONE, MANGO_3);
    Collision(STONE, MANGO_4);
    Collision(STONE, MANGO_5);
    Collision(STONE, MANGO_6);
    Collision(STONE, MANGO_7);
    Collision(STONE, MANGO_8);
    Collision(STONE, MANGO_9);
    Collision(STONE, MANGO_10);

    Collision(MANGO_1, MANGO_2);
    Collision(MANGO_1, MANGO_3);
    Collision(MANGO_1, MANGO_4);
    Collision(MANGO_1, MANGO_5);
    Collision(MANGO_1, MANGO_6);
    Collision(MANGO_1, MANGO_7);
    Collision(MANGO_1, MANGO_8);
    Collision(MANGO_1, MANGO_9);
    Collision(MANGO_1, MANGO_10);

    Collision(MANGO_2, MANGO_3);
    Collision(MANGO_2, MANGO_4);
    Collision(MANGO_2, MANGO_5);
    Collision(MANGO_2, MANGO_6);
    Collision(MANGO_2, MANGO_7);
    Collision(MANGO_2, MANGO_8);
    Collision(MANGO_2, MANGO_9);
    Collision(MANGO_2, MANGO_10);

    Collision(MANGO_3, MANGO_4);
    Collision(MANGO_3, MANGO_5);
    Collision(MANGO_3, MANGO_6);
    Collision(MANGO_3, MANGO_7);
    Collision(MANGO_3, MANGO_8);
    Collision(MANGO_3, MANGO_9);
    Collision(MANGO_3, MANGO_10);

    Collision(MANGO_4, MANGO_5);
    Collision(MANGO_4, MANGO_6);
    Collision(MANGO_4, MANGO_7);
    Collision(MANGO_4, MANGO_8);
    Collision(MANGO_4, MANGO_9);
    Collision(MANGO_4, MANGO_10);

    Collision(MANGO_5, MANGO_6);
    Collision(MANGO_5, MANGO_7);
    Collision(MANGO_5, MANGO_8);
    Collision(MANGO_5, MANGO_9);
    Collision(MANGO_5, MANGO_10);

    Collision(MANGO_6, MANGO_7);
    Collision(MANGO_6, MANGO_8);
    Collision(MANGO_6, MANGO_9);
    Collision(MANGO_6, MANGO_10);

    Collision(MANGO_7, MANGO_8);
    Collision(MANGO_7, MANGO_9);
    Collision(MANGO_7, MANGO_10);

    Collision(MANGO_8, MANGO_9);
    Collision(MANGO_8, MANGO_10);

    Collision(MANGO_9, MANGO_10);

    textSize(30);
    stroke("black")
    fill("orange")
    text("Click space to get a try" , 600,40);

    if (selected_character === "boy1") {
      boy1.visible = true;
      boy1.x = 214;
      boy1.y = 800;
      boy1.scale = 0.15;
    }

    if (selected_character === "boy2") {
      boy2.visible = true;
      boy2.x = 214;
      boy2.y = 750;
      boy2.scale = 0.5;
    }

    if (selected_character === "boy3") {
      boy3.visible = true;
      boy3.x = 240;
      boy3.y = 750;
      boy3.scale = 0.2;
    }

    if (selected_character === "boy4") {
      boy4.visible = true;
      boy4.x = 70;
      boy4.y = 770;
      boy4.scale = 0.08;
    }

    if (selected_character === "girl1") {
      girl1.visible = true;
      girl1.x = 210;
      girl1.y = 770;
      girl1.scale = 0.5;
    }

  }

  drawSprites();

}

function mouseDragged() {
  Matter.Body.setPosition(STONE.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  ELASTIC.fly();
  chance = chance + 1;
}

function keyPressed(){
  if (keyCode === 32 && selected_character === "boy1") {
    Matter.Body.setPosition(STONE.body, { x: 180, y: 376 });
    ELASTIC.attach(STONE.body);
  }

  if (keyCode === 32 && selected_character === "boy2") {
    Matter.Body.setPosition(STONE.body, { x: 200, y: 376 });
    ELASTIC.attach(STONE.body);
  }

  if (keyCode === 32 && selected_character === "boy3") {
    Matter.Body.setPosition(STONE.body, { x: 200, y: 376 });
    ELASTIC.attach(STONE.body);
  }

  if (keyCode === 32 && selected_character === "boy4") {
    Matter.Body.setPosition(STONE.body, { x: 180, y: 376 });
    ELASTIC.attach(STONE.body);
  }

  if (keyCode === 32 && selected_character === "girl1") {
    Matter.Body.setPosition(STONE.body, { x: 180, y: 376 });
    ELASTIC.attach(STONE.body);
  }
}

function Collision(object1, object2) {
  var distance = dist(object1.body.position.x, object1.body.position.y, object2.body.position.x, object2.body.position.y)
  if (distance <= object1.radius + object2.radius) {
    Matter.Body.setStatic(object2.body, false);
  }
}

