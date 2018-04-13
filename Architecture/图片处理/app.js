
// Cross-platform image decoder(png/jpeg/gif) and encoder(png/jpeg) for Node.js
// Node.js轻量级跨平台图像编解码库
var images = require("images");

var path = __dirname + '/product.jpg';
console.log(path)
images("./images/product.jpg")                     //Load image from file 
                                        //加载图像文件
    .size(800)                          //Geometric scaling the image to 400 pixels width
                                        //等比缩放图像到400像素宽
    .draw(images("./images/logo.png"), 10, 10)   //Drawn logo at coordinates (10,10)
                                        //在(10,10)处绘制Logo
    .save("./images/output.jpg", {               //Save the image to a file, with the quality of 50
        quality : 50                    //保存图片到文件,图片质量为50
    });