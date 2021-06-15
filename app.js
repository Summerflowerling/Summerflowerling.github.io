
// Ｇlobal variable
let modal = document.getElementById("modal")
let modalCloseBtn = document.getElementById("close")
let modalImg = document.getElementById("modalImg")
let modalImgTitle = document.getElementById("modal-img-title")

function displayModal(imgSrc, imgTitle){
    modal.style.display="block"
    modalCloseBtn.style.display="block";
    modalImg.src = imgSrc
    console.log(imgTitle)
    modalImgTitle.innerHTML = imgTitle
}

function close(){
    modalCloseBtn.style.display="none"
    modal.style.display="none"
}

modalCloseBtn.addEventListener("click", close)