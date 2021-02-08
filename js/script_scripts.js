var photos = []; // Declare empty array to store all the partner images
var fileNames = []; //declare empty element to store image file name
var imageList = []; //declare empty array to store all html list that contain images
var image; // variable to store assembled image
var openList = "<li class='partner'>"; //variable that contain open list
var closeList = "</li>"; // declare a variable that contain close list tag

//creating a loop to create 6 images starting with 0
for (var i = 0; i < 6; i++) {
  fileNames.push("partner" + "-" + (i + 1)); // create image file name and storing in the array
  photos.push("<img src='partners/" + fileNames[i] + ".png'>");
  image = openList + photos[i] + closeList;
  imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList;


