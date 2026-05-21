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
if(id === "facts") document.querySelectorAll("nav button")[5].classList.add("active-nav");
if(id === "quiz") document.querySelectorAll("nav button")[6].classList.add("active-nav");
if(id === "games") document.querySelectorAll("nav button")[7].classList.add("active-nav");
if(id === "videos") document.querySelectorAll("nav button")[8].classList.add("active-nav");
if(id === "contact") document.querySelectorAll("nav button")[9].classList.add("active-nav"); 
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
  selectedTeacher = teacher.replace(" tomonidan olib boriladi", "");

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
    teacherSelect.innerHTML += '<option>Shahriyor Ruzimatov</option>';
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
function send(){

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

  // TELEGRAM USERNAME
  let username = "Shahriyor_teach";

  // XABAR
  let message =
`📚 Yangi kursga yozilish!

👤 Ism: ${ism}
👤 Familya: ${fam}
📞 Telefon: ${tel}

📘 Kurs: ${selectedCourse}
👨‍🏫 Ustoz: ${ustoz || selectedTeacher}

📅 Kun: ${day}
⏰ Vaqt: ${time}`;

  // TELEGRAM LINK
  let telegramUrl =
`https://t.me/${username}?text=${encodeURIComponent(message)}`;

  // TELEGRAMNI OCHISH
  window.open(telegramUrl, "_blank");

  // INPUTLARNI TOZALASH
  document.getElementById("ism").value = "";
  document.getElementById("fam").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("day").value = "";
  document.getElementById("time").value = "";
  document.getElementById("teacherSelect").value = "";

  closeModal();
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

  document.getElementById("result").innerText = "";

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer=>{
    let btn = document.createElement("button");
    btn.innerText = answer;

  btn.onclick = function(){

  let result =
  document.getElementById("result");

  result.classList.remove("shake","pop");

  void result.offsetWidth;

  if(answer === q.correct){

    result.innerText =
    "✅ Correct!";

    result.classList.add("pop");

  }else{

    result.innerText =
    "❌ Wrong!";

    result.classList.add("shake");

  }

};

    answersDiv.appendChild(btn);
  });
}

loadQuiz();

function showGame(gameId){

document.getElementById(
"game-home"
).classList.add("hidden");

document.querySelectorAll(
"#games > div"
).forEach(div=>{

if(div.id!=="game-home"){
div.classList.add("hidden");
}

});

document.getElementById(gameId)
.classList.remove("hidden");

if(gameId==="wordgame"){
startWordGame();
}

if(gameId==="typing"){
startTypingGame();
}

if(gameId==="memory"){
startMemoryGame();
}

if(gameId==="battle"){
startBattleGame();
}

}

function backGames(){

document.getElementById(
"game-home"
).classList.remove("hidden");

document.querySelectorAll(
"#games > div"
).forEach(div=>{

if(div.id!=="game-home"){
div.classList.add("hidden");
}

});

}

// ===== WORD GUESS GAME =====

const gameWords = [
"apple",
"teacher",
"computer",
"school",
"javascript",
"student",
"internet",
"keyboard",
"english",
"python"
];

let currentWord = "";
let gameScore = 0;

function startWordGame(){

currentWord =
gameWords[
Math.floor(
Math.random()*gameWords.length
)
];

// SO'ZNI YASHIRISH

let hiddenWord = "";

for(let i=0; i<currentWord.length; i++){

if(
i===0 ||
i===2 ||
i===currentWord.length-1
){

hiddenWord +=
currentWord[i] + " ";

}else{

hiddenWord += "_ ";

}

}

document.getElementById(
"hiddenWord"
).innerText =
hiddenWord;

document.getElementById(
"answer"
).value="";

document.getElementById(
"resultWord"
).innerText="";

}

currentWord =
gameWords[
Math.floor(
Math.random()*gameWords.length
)
];

let hidden =
"_ ".repeat(currentWord.length);

document.getElementById(
"hiddenWord"
).innerText = hidden;

document.getElementById(
"answer"
).value="";

document.getElementById(
"resultWord"
).innerText="";

function checkWord(){

let answer =
document.getElementById(
"answer"
).value.toLowerCase();

let result =
document.getElementById(
"resultWord"
);

result.classList.remove(
"pop",
"shake"
);

// animatsiyani qayta ishga tushirish
void result.offsetWidth;

if(answer===currentWord){

gameScore++;

result.innerText =
"✅ To'g'ri topdingiz!";

result.classList.add("pop");

document.getElementById(
"score"
).innerText =
"Ball: "+gameScore;

setTimeout(
startWordGame,
1000
);

}else{

result.innerText =
"❌ Noto'g'ri, qayta urinib ko'ring!";

result.classList.add("shake");

}

}

// ===== TYPING SPEED GAME =====

const typingWords = [
"javascript",
"computer",
"internet",
"school",
"teacher",
"english",
"keyboard"
];

let currentTypingWord = "";

let typingTime = 10;
let typingInterval;

function startTypingGame(){

clearInterval(
typingInterval
);

typingTime = 10;

document.getElementById(
"typingTimer"
).innerText =
typingTime;

typingInterval =
setInterval(()=>{

typingTime--;

document.getElementById(
"typingTimer"
).innerText =
typingTime;

if(typingTime<=0){

clearInterval(
typingInterval
);

document.getElementById(
"typingResult"
).innerText =
"⏰ Vaqt tugadi!";

setTimeout(
startTypingGame,
1500
);

}

},1000);

currentTypingWord =
typingWords[
Math.floor(
Math.random()*typingWords.length
)
];

document.getElementById(
"typingWord"
).innerText =
currentTypingWord;

document.getElementById(
"typingInput"
).value = "";

document.getElementById(
"typingResult"
).innerText = "";

}

currentTypingWord =
typingWords[
Math.floor(
Math.random()*typingWords.length
)
];

document.getElementById(
"typingWord"
).innerText =
currentTypingWord;

document.getElementById(
"typingInput"
).value = "";

document.getElementById(
"typingResult"
).innerText = "";


function checkTyping(){

let userText =
document.getElementById(
"typingInput"
).value.toLowerCase();

if(userText === currentTypingWord){

clearInterval(
typingInterval
);

if(typingTime >= 5){

document.getElementById(
"typingResult"
).innerText =
"🚀 Juda tez va to'g'ri yozdingiz!";

}
else if(typingTime >= 3){

document.getElementById(
"typingResult"
).innerText =
"⚡ Tez va to'g'ri yozdingiz!";

}
else{

document.getElementById(
"typingResult"
).innerText =
"🐢 Sekin yozdingiz, keyingisini urinib ko'ring!";

}

setTimeout(
startTypingGame,
1500
);

}else{

document.getElementById(
"typingResult"
).innerText =
"❌ Xato yozdingiz!";

}

}

// ===== MEMORY GAME =====

const memoryIcons = [
"🍎",
"🍎",

"💻",
"💻",

"📚",
"📚",

"🎮",
"🎮",

"🧠",
"🧠",

"⌨️",
"⌨️",

"🌎",
"🌎",

"🚀",
"🚀"
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function startMemoryGame(){

let board =
document.getElementById(
"memoryBoard"
);

board.innerHTML = "";

document.getElementById(
"memoryResult"
).innerText = "";

let shuffled =
memoryIcons.sort(
()=>Math.random()-0.5
);

shuffled.forEach(icon=>{

let card =
document.createElement("div");

card.classList.add(
"memory-card"
);

card.dataset.icon = icon;

card.innerText = icon;

card.onclick = function(){

flipCard(card);

};

board.appendChild(card);

});

}

function flipCard(card){

if(lockBoard) return;

if(card.classList.contains("open"))
return;

card.classList.add("open");

if(!firstCard){

firstCard = card;
return;

}

secondCard = card;

lockBoard = true;

if(
firstCard.dataset.icon ===
secondCard.dataset.icon
){

firstCard.classList.add("done");
secondCard.classList.add("done");

resetMemory();

checkMemoryWin();

}else{

setTimeout(()=>{

firstCard.classList.remove(
"open"
);

secondCard.classList.remove(
"open"
);

resetMemory();

},1000);

}

}

function resetMemory(){

firstCard = null;
secondCard = null;
lockBoard = false;

}

function checkMemoryWin(){

let doneCards =
document.querySelectorAll(
".memory-card.done"
);

if(doneCards.length === 16){

document.getElementById(
"memoryResult"
).innerText =
"🏆 Siz g'alaba qozondingiz!";

}

}

// ===== QUIZ BATTLE GAME =====

const battleQuestions = [

{
question:
"HTML nima?",

answers:[
"Programming language",
"Markup language",
"Database"
],

correct:
"Markup language"
},

{
question:
"CSS nima qiladi?",

answers:[
"Design",
"Cooking",
"Hacking"
],

correct:
"Design"
},

{
question:
"JavaScript nima uchun ishlatiladi?",

answers:[
"Interactivity",
"Photoshop",
"Gaming console"
],

correct:
"Interactivity"
},

{
question:
"Python qanday til?",

answers:[
"Programming language",
"Browser",
"Computer"
],

correct:
"Programming language"
}

];

let battleScore = 0;

function startBattleGame(){

loadBattleQuestion();

}

function loadBattleQuestion(){

let q =
battleQuestions[
Math.floor(
Math.random()*
battleQuestions.length
)
];

document.getElementById(
"battleQuestion"
).innerText =
q.question;

document.getElementById(
"battleResult"
).innerText = "";

let answersDiv =
document.getElementById(
"battleAnswers"
);

answersDiv.innerHTML = "";

q.answers.forEach(answer=>{

let btn =
document.createElement(
"button"
);

btn.innerText = answer;

btn.onclick = function(){

let result =
document.getElementById(
"battleResult"
);

result.classList.remove(
"shake",
"pop"
);

void result.offsetWidth;

if(answer === q.correct){

battleScore++;

result.innerText =
"✅ Correct!";

result.classList.add("pop");

}else{

result.innerText =
"❌ Wrong!";

result.classList.add("shake");

}  

document.getElementById(
"battleScore"
).innerText =
"Ball: " + battleScore;

setTimeout(
loadBattleQuestion,
1000
);

};

answersDiv.appendChild(btn);

});

}