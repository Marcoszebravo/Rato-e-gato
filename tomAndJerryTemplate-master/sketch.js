var fundo 
var gato,gatoimg1,gatoimg2,gatoimg3,gatoimg4
var rato,ratoimg1,ratoimg2,ratoimg3,ratoimg4

function preload() {
    //load the images here
    fundo = loadImage("garden.png")

    gatoimg1 = loadImage("cat1.png")
    gatoimg4 = loadImage("cat4.png")

    gatoimg2 = loadAnimation("cat2.png")
    gatoimg3 = loadAnimation("cat3.png")


    ratoimg1 = loadImage("mouse1.png") 
    ratoimg4 = loadImage("mouse4.png")

    ratoimg2 = loadAnimation("mouse2.png")
    ratoimg3 = loadAnimation("mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    gato = createSprite(870,600);
    gato.addAnimation("gatoSentado",gatoimg4)
    gato.scate = 0.2;

    rato = createSprite(200,600);
    rato.addAnimation("ratoProvocando",ratoimg3)
    rato.scate = 0.2

}

function draw() {

    background(fundo);
    if(gato.x - rato.x < (gato.width - rato.width)/2){
    gato.velocityX = 0;
    gato.addAnimation("ultimaImagemGato",gatoimg4)
    gato.changeAnimation("ultimaImagemGato");
   
    
    rato.addAnimation("ultimaImagemRato",ratoimg4)
    rato.changeAnimation("ultimaImagemGato")
    }
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    rato.addAnimation("ratoProvocando",ratoimg3);
    rato.changeAnimation("ratoProvocando")
    rato.frameDeplay = 25;

    gato.velocityX = -5;
}
}
