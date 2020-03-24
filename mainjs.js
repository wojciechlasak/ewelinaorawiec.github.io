document.getElementById('button-up').addEventListener("click", () => {
  document.getElementById('peron-top').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

window.addEventListener('scroll', () => {
  let windowScrollHeight = window.scrollY;
  let buttonUp = document.getElementById("button-up");

  console.log("siema",windowScrollHeight,document.getElementById("peron-top").offsetHeight,document.getElementById("peron-top").offsetHeight < windowScrollHeight)

  if (!buttonUp.classList.contains("show") && document.getElementById("peron-top").offsetHeight < windowScrollHeight) {
    buttonUp.classList.add('show');
  } else if(buttonUp.classList.contains("show") && document.getElementById("peron-top").offsetHeight > windowScrollHeight) {
    buttonUp.classList.remove('show');
  }
})