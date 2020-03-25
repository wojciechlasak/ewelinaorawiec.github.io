document.getElementById('button-up').addEventListener("click", () => {
  document.getElementsByClassName("project-top")[0].scrollIntoView({ 
    behavior: 'smooth' 
  });
});

window.addEventListener('scroll', () => {
  let windowScrollHeight = window.scrollY;
  let buttonUp = document.getElementById("button-up");
  let projectTop = document.getElementsByClassName("project-top")

  if (!buttonUp.classList.contains("show") && projectTop[0].offsetHeight < windowScrollHeight) {
    buttonUp.classList.add('show');
  } else if(buttonUp.classList.contains("show") && projectTop[0].offsetHeight > windowScrollHeight) {
    buttonUp.classList.remove('show');
  }
})

class Gallery {
  constructor(imagesAmount, imagesName, galleryName){
    this.currentImageNumber = 1;
    this.imagesAmount = imagesAmount;
    this.imagesName = imagesName;
    this.arrowLeft = document.getElementById(`arrow-left-gallery-${galleryName}`);
    this.arrowRight = document.getElementById(`arrow-right-gallery-${galleryName}`);
    this.gallery = document.getElementById(`gallery-${galleryName}`);
    this.arrowLeft.addEventListener('click', () => {
      this.changeNumber(-1);
      this.changeImage();
    });
    this.arrowRight.addEventListener('click', () => {
      this.changeNumber(1);
      this.changeImage();
    });
  }

  changeNumber(direction) {
    this.currentImageNumber += direction;
    if(this.currentImageNumber === 0) {
      this.currentImageNumber = this.imagesAmount;
    } else if(this.currentImageNumber > this.imagesAmount) {
      this.currentImageNumber = 1
    }
  }

  changeImage() {
    this.gallery.style.backgroundImage = `url(img/conference/${this.imagesName}${this.currentImageNumber}.jpg)`
  }
}

const galleryLaptop = new Gallery(4, 'laptop', 'laptop');
const galleryPhone = new Gallery(4, 'aplikacja', 'phone');
