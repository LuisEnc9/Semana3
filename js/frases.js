
window.onload = choosePic;

var myPix = new Array("images/f1.png","images/f2.png","images/f3.png","images/f4.png","images/f5.png");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}