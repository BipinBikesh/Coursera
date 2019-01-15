//part 1

var img = new SimpleImage("smallhands.png");
print(img);
for (var pixel of img.values()){
    if(pixel.getX()<((1/3)*img.getWidth())){
        pixel.setRed(255);
    }
    if(pixel.getX()>((1/3)*img.getWidth())&&pixel.getX()<((2/3)*img.getWidth())){
        pixel.setGreen(255);
    }
    if(pixel.getX()>((2/3)*img.getWidth())){
        pixel.setBlue(255);
    }
}
print(img);

//part 2

var img = new SimpleImage("eastereggs.jpg");
print(img);
function swapRedGreen(pixel){
    var r = pixel.getRed();
    var g = pixel.getGreen();
    pixel.setRed(g);
    pixel.setGreen(r);
}

for ( var pixel of img.values()){
    pixel = swapRedGreen(pixel);
}
print(img);

//part 3


var img = new SimpleImage("duke_blue_devil.png");
print(img);
for (var pixel of img.values()){
    if(pixel.getGreen()<220){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
print(img);