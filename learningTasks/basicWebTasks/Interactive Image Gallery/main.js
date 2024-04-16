function leftClick(){
    pointer--;
    if (pointer<0) pointer+=numImages;
    currentImage.style.backgroundImage=`url("images/img${pointer+1}.jpg")`;
    imageNumber.innerHTML=`Image ${pointer+1}/6`;
}

function rightClick(){
    pointer++;
    pointer%=numImages;
    currentImage.style.backgroundImage=`url("images/img${pointer+1}.jpg")`;
    imageNumber.innerHTML=`Image ${pointer+1}/6`;
}

const numImages=6;
let pointer=0;
const currentImage=document.createElement("div");
currentImage.classList.add("imageContainer");
currentImage.style.backgroundImage=`url("images/img${pointer+1}.jpg")`;
document.querySelector("body").appendChild(currentImage);

const imageNumber=document.querySelector("h1");
imageNumber.innerHTML=`Image ${pointer+1}/6`;

const left=document.querySelector(".left")
const right=document.querySelector(".right")

left.addEventListener("click",leftClick)
right.addEventListener("click",rightClick)
