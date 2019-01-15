//part 1
/* Write the green screen algorithm you saw in the lecture video yourself.*/

var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");

var outputImage= new SimpleImage(fgImage.getWidth(),fgImage.getHeight());

for(var pixel of fgImage.values()){
    if(pixel.getGreen()>= pixel.getRed()+pixel.getBlue()){
        var x=pixel.getX();
        var y=pixel.getY();
        var bgPixel=bgImage.getPixel(x,y);
        outputImage.setPixel(x,y,bgPixel);
    }
    
    else{
        outputImage.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
}
print(outputImage);

//part 2
/* Debugging the Given Code*/

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x <= img.getWidth()/2 && y<=img.getHeight()/2){
    px.setRed(255);
  }
  if (x >= img.getWidth()/2 && y<img.getHeight()/2 ){
    px.setGreen(255);
  }
  if (x <= img.getWidth()/2 && y>=img.getHeight()/2 ){
    px.setRed(255);
    px.setBlue(255);
  }
  if(x >= img.getWidth()/2 && y>=img.getHeight()/2){
      px.setBlue(255);
  }
}
print (img);

//part 3
/* Write a function named setBlack that has one parameter pixel (representing a single pixel) and 
returns pixel with its red, green, and blue components changed so that the pixel’s color is black.
Now you will write another function named addBorder. This function will add a black border to an image*/

function setBlack(pixel){
     pixel.setRed(0);
     pixel.setGreen(0);
     pixel.setBlue(0);
}

function addBorder(img){
    img = new SimpleImage("smallpanda.png");
    for (var pixel of img.values()){
        if (pixel.getX() <10 || pixel.getX() >img.getWidth() - 10 || pixel.getY() < 10 || pixel.getY() > img.getHeight() - 10  ) {
             pixel = setBlack(pixel);
             
        }
    }
    return(img);
}

print (addBorder(img));
