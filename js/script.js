
// Slide Comment

var slideIndex = 1;
showDivs(slideIndex);

function plusDives(n){
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var slideList = document.getElementsByClassName("slide");
  if(n > slideList.length) slideIndex = 1;
  else if(n < 1) slideIndex = slideList.length;

  for(i = 0; i < slideList.length; i++){
    slideList[i].style.display = "none";
  }

  slideList[slideIndex - 1].style.display = "block";
}

setInterval(()=>{
  plusDives(1);
},3000 );


// Slide Best Selling

const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });  

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });  
});  


// Validation

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {
  clearMessage();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Nama tidak boleh kosong";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }
  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Email tidak valid";
    email.classList.add("error-border");
    errorFlag = true;
  }
  if (!isValidPhone(phone.value)) {
    errorNodes[2].innerText = "Nomor anda tidak valid";
    phone.classList.add("error-border");
    errorFlag = true;
  }
  if (message.value.length < 1) {
    errorNodes[3].innerText = "Tolong tuliskan sebuah pesan";
    message.classList.add("error-border");
    errorFlag = true;
  }
  if(!errorFlag){
    alert("Terimakasih telah menghubungi kami, pesan anda akan kami proses :)");
    document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
  }
}

function clearMessage() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  phone.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

function isValidPhone(phone) {
  var phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
}



// Behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


