var fundo
var fimg
var b
var imb
var pl
var pr
var p
var imp
var f
var imf
var po
var efs
var edj="jogar"
var ib
var isb

function preload() {
    fimg=loadImage("tower.png")
    imb=loadImage("ghost-standing.png")
    imp=loadImage("door.png")
    imf=loadImage("climber.png")
}

function setup () {
createCanvas(600,600)
fundo= createSprite (300,300)
fundo.addImage("petcovic",fimg)
fundo.velocityY=+1
b=createSprite (200,200,50,50)
b.addImage("tbsfv",imb)
b.scale=0.300000000000000000000000000000000000000000000
pl=createSprite(10,0,10,10000)
pr=createSprite(600,0,10,10000)

pl.visible=false
pr.visible=false

po= new Group()


efs= new Group()

isb= new Group()

}
function draw (){
drawSprites()




b.collide(pl)
b.collide(pr)
b.collide(efs)




 if (edj=="jogar"){   
 if (fundo.y>400){
 fundo.y=300
        }
if (keyDown(LEFT_ARROW)){

 b.x-=6
            
            
}
            
 if (keyDown(RIGHT_ARROW)){
            
 b.x+=6
                
}
            
 if (keyDown("space")){
            
b.velocityY=-6
                    
                    
}
b.velocityY+=0.55
create()
if(b.collide(isb)||b.y>600){
edj="fim"



}

}
if (edj=="fim"){

b.remove()

efs.destroyEach()
po.destroyEach()
isb.destroyEach()
fundo.veloctityY=0
textSize(67)
text("fim de jogo",230,250)
}






}
function create()
{if (frameCount%120==0){
p=createSprite(200,-50)
p.addImage(imp)
f=createSprite(200,10)
f.addImage(imf)
p.velocityY=+1
f.velocityY=+1
p.x=Math.round(random(140,400))
f.x=p.x

 po.add(p)   
efs.add(f)

p.depth=b.depth
b.depth+=1
ib=createSprite(200,20)
ib.width=f.width
ib.height=2
ib.visible=false
ib.x=p.x
ib.velocityY=1
isb.add(ib)
}








}






