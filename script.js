let selectedCourse = "";

// ===== SECTION ALMASHTIRISH =====
function goSection(id){
  closeModal();

  document.querySelectorAll("section").forEach(section=>{
    section.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  document.querySelector("nav").classList.remove("show-menu");

  document.querySelectorAll("nav button").forEach(btn=>{
    btn.classList.remove("active-nav");
  });

  if(id === "home") document.querySelectorAll("nav button")[0].classList.add("active-nav");
  if(id === "courses") document.querySelectorAll("nav button")[1].classList.add("active-nav");
  if(id === "teachers") document.querySelectorAll("nav button")[2].classList.add("active-nav");
  if(id === "schedule") document.querySelectorAll("nav button")[3].classList.add("active-nav");
  if(id === "results") document.querySelectorAll("nav button")[4].classList.add("active-nav");
  if(id === "contact") document.querySelectorAll("nav button")[5].classList.add("active-nav");

  setTimeout(()=>{
    document.getElementById(id).scrollIntoView({
      behavior:"smooth"
    });
  },100);
}

// ===== MOBILE MENU =====
function toggleMenu(){
  document.querySelector("nav").classList.toggle("show-menu");
}

// ===== COURSE ICHKI OYNALARI =====
function showEnglish(){
  closeModal();
  document.getElementById("course-home").classList.add("hidden");
  document.getElementById("english").classList.remove("hidden");
  document.getElementById("it").classList.add("hidden");
}

function showIT(){
  closeModal();
  document.getElementById("course-home").classList.add("hidden");
  document.getElementById("it").classList.remove("hidden");
  document.getElementById("english").classList.add("hidden");
}

function backCourses(){
  closeModal();
  document.getElementById("course-home").classList.remove("hidden");
  document.getElementById("english").classList.add("hidden");
  document.getElementById("it").classList.add("hidden");
}

// ===== MODAL =====
function openModal(name, teacher, price){
  selectedCourse = name;

  document.getElementById("modal").style.display = "flex";

  document.getElementById("title").innerText =
    `${name}\nKurs narxi ${price}.`;

  let teacherSelect = document.getElementById("teacherSelect");
  teacherSelect.innerHTML = '<option value="">Ustoz tanlang</option>';

  if(name === "Beginner" || name === "Elementary"){
    teacherSelect.classList.remove("hidden");
    teacherSelect.innerHTML += '<option>Ardasher Azizmatov</option>';
    teacherSelect.innerHTML += '<option>Husanova Sevara</option>';
    teacherSelect.innerHTML += '<option>Nihola Mamayusupova</option>';
  }
  else if(name === "Pre-Intermediate"){
    teacherSelect.classList.remove("hidden");
    teacherSelect.innerHTML += '<option>Ardasher Azizmatov</option>';
    teacherSelect.innerHTML += '<option>Husanova Sevara</option>';
    teacherSelect.innerHTML += '<option>Nihola Mamayusupova</option>';
    teacherSelect.innerHTML += '<option>Shahriyor Ruzimatov</option>';
  }
  else{
    teacherSelect.classList.add("hidden");
  }
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

// ===== FORM YUBORISH =====
async function send(){
 async function send(){
  let ism = document.getElementById("ism").value;
  let fam = document.getElementById("fam").value;
  let tel = document.getElementById("tel").value;
  let day = document.getElementById("day").value;
  let time = document.getElementById("time").value;
  let ustoz = document.getElementById("teacherSelect").value;

  if(!ism || !fam || !tel || !day || !time){
    alert("Hammasini to'ldiring!");
    return;
  }

  let data = {
    Ism: ism,
    Familya: fam,
    Telefon: tel,
    Kurs: selectedCourse,
    Ustoz: ustoz || "Tanlanmagan",
    Kun: day,
    Vaqt: time,
    _subject: "Yangi kursga yozilish",
    _captcha: "false",
    _template: "table"
  };

  fetch("https://formsubmit.co/ajax/raxmadjanovi@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      alert("So'rovingiz muvaffaqiyatli yuborildi!");

      document.getElementById("ism").value = "";
      document.getElementById("fam").value = "";
      document.getElementById("tel").value = "";
      document.getElementById("day").value = "";
      document.getElementById("time").value = "";
      document.getElementById("teacherSelect").value = "";

      closeModal();
  })
  .catch(error => {
      alert("Internetda xatolik. Qayta urinib ko'ring.");
  });
}
}

// ===== LIGHTBOX GALLERY =====
let currentImages = [];
let currentIndex = 0;

function openImage(img){
  currentImages = Array.from(img.parentElement.querySelectorAll("img"));
  currentIndex = currentImages.indexOf(img);

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeImage(){
  document.getElementById("lightbox").style.display = "none";
}

function nextImage(e){
  e.stopPropagation();
  currentIndex++;
  if(currentIndex >= currentImages.length){
    currentIndex = 0;
  }
  document.getElementById("lightbox-img").src = currentImages[currentIndex].src;
}

function prevImage(e){
  e.stopPropagation();
  currentIndex--;
  if(currentIndex < 0){
    currentIndex = currentImages.length - 1;
  }
  document.getElementById("lightbox-img").src = currentImages[currentIndex].src;
}

function outsideClose(e){
  if(e.target.id === "lightbox"){
    closeImage();
  }
}

document.addEventListener("keydown", function(e){
  let box = document.getElementById("lightbox");

  if(box.style.display === "flex"){
    if(e.key === "ArrowRight"){
      nextImage(e);
    }
    else if(e.key === "ArrowLeft"){
      prevImage(e);
    }
    else if(e.key === "Escape"){
      closeImage();
    }
  }
});

// ===== TYPEWRITER =====
const text = "Kelajakni birga yaratamiz";
let i = 0;

function typeWriter(){
  if(i < text.length){
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

window.addEventListener("load", typeWriter);

// ===== SCROLL ANIMATION =====
function revealOnScroll(){
  let elements = document.querySelectorAll(".teacher-box, .card, .gallery img, .results-gallery img");

  elements.forEach(el => {
    let top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", () => {
  document.querySelectorAll("nav button")[0].classList.add("active-nav");
});

// DAILY TECH FACTS
const facts = [
  "JavaScript was created in only 10 days.",
  "The first computer bug was an actual insect.",
  "Python is named after Monty Python.",
  "HTML is not a programming language.",
  "The first website is still online today."
];

function newFact(){
  let random = Math.floor(Math.random() * facts.length);
  document.getElementById("factText").innerText = facts[random];
}

newFact();


// QUIZ
const quizData = [
  {
    question: "HTML nima?",
    answers: ["Programming language", "Markup language", "Database"],
    correct: "Markup language"
  },
  {
    question: "CSS nima uchun ishlatiladi?",
    answers: ["Design", "Backend", "Database"],
    correct: "Design"
  },
  {
    question: "JavaScript nima qiladi?",
    answers: ["Interactivity", "Cooking", "Photoshop"],
    correct: "Interactivity"
  }
];

function loadQuiz(){
  let q = quizData[Math.floor(Math.random() * quizData.length)];

  document.getElementById("question").innerText = q.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer=>{
    let btn = document.createElement("button");
    btn.innerText = answer;

    btn.onclick = function(){
      if(answer === q.correct){
        document.getElementById("result").innerText = "✅ Correct!";
      }else{
        document.getElementById("result").innerText = "❌ Wrong!";
      }
    };

    answersDiv.appendChild(btn);
  });
}

loadQuiz();