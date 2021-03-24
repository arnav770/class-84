canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

rover_width= 100;
rover_height= 90;

rover_x= 10;
rover_y= 10;

background_img= "mars.jpg";
rover_img= "rover.png";

function add(){
    background_imgtag= new Image(); //difining a variable with new image
    background_imgtag.onload= uploadbackground; //setting a function
    background_imgtag.src= background_img; //load image

    rover_imgtag= new Image(); //difining a variable with new image
    rover_imgtag.onload= uploadrover; //setting a function
    rover_imgtag.src= rover_img; //load image
}

function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
    
}

function uploadrover(){
ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height) 
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    if (keyPressed=='38'){
        up();
    }
    if (keyPressed=='40'){
        down();
    }
    if (keyPressed=='37'){
        left();
    }
    if (keyPressed=='39'){
        right();
    }

}
 



