


let modal = document.getElementById("modal")
let closeTheMadal = document.getElementById("close")
let modalImg = document.getElementById("modalImg")
let modalImgTitle = document.getElementById("modal-img-title")








function displayModal(imgSrc, imgTitle){
  
  modal.style.display="block"
  closeTheMadal.style.display="block";
  modalImg.src = imgSrc
  console.log(imgTitle)
  modalImgTitle.innerHTML = imgTitle

}

closeTheMadal.addEventListener("click", close)
function close(){
    closeTheMadal.style.display="none"
    modal.style.display="none"
}