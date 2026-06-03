let selectedCourse = "";
let selectedTeacher = "";
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
if(id === "certificate") document.querySelectorAll("nav button")[7].classList.add("active-nav");
if(id === "games") document.querySelectorAll("nav button")[8].classList.add("active-nav");
if(id === "videos") document.querySelectorAll("nav button")[9].classList.add("active-nav");
if(id === "contact") document.querySelectorAll("nav button")[10].classList.add("active-nav");
    document.getElementById(id).scrollIntoView({
      behavior:"smooth"
    });
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

// ===== BEGINNER QUESTION DATABASE =====

const readingQuestions = [

{
type:"multiple",
category:"reading",
question:"Where does Thomas live?",
options:["The USA","Canada","England"],
correct:"Canada"
},

{
type:"multiple",
category:"reading",
question:"How many siblings does Thomas have?",
options:["Three","Four","Five"],
correct:"Four"
},

{
type:"multiple",
category:"reading",
question:"What does his dad do?",
options:[
"He is a mechanic",
"He works at the bank",
"He is a doctor"
],
correct:"He is a mechanic"
},

{
type:"multiple",
category:"reading",
question:"Who is the oldest child?",
options:[
"Thomas",
"Teresa",
"His brother"
],
correct:"Thomas"
},

{
type:"multiple",
category:"reading",
question:"What does Teresa play?",
options:[
"Volleyball",
"The guitar",
"Video games"
],
correct:"The guitar"
},

{
type:"truefalse",
category:"reading",
question:"Thomas has a small family.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"His mom works at a bank.",
options:["True","False"],
correct:"True"
},

{
type:"truefalse",
category:"reading",
question:"Thomas is the youngest child in his family.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"Teresa goes to school.",
options:["True","False"],
correct:"True"
},

{
type:"truefalse",
category:"reading",
question:"Thomas' dad works on cars.",
options:["True","False"],
correct:"True"
},

{
type:"multiple",
category:"reading",
question:"What is the name of the speaker?",
options:[
"Thomas",
"Tom",
"Leo"
],
correct:"Thomas"
},

{
type:"multiple",
category:"reading",
question:"Where does his mom work?",
options:[
"At the bank",
"At the hospital",
"At school"
],
correct:"At the bank"
},

{
type:"multiple",
category:"reading",
question:"What instrument does Teresa play?",
options:[
"The guitar",
"The piano",
"The violin"
],
correct:"The guitar"
},

{
type:"multiple",
category:"reading",
question:"How old is Teresa?",
options:[
"Fourteen",
"Sixteen",
"Eighteen"
],
correct:"Sixteen"
},

{
type:"multiple",
category:"reading",
question:"Is Canada a city or a country?",
options:[
"A city",
"A country",
"A continent"
],
correct:"A country"
},

{
type:"multiple",
category:"reading",
question:"Thomas is studying ____ in university.",
options:[
"math",
"medicine",
"music"
],
correct:"medicine"
},

{
type:"multiple",
category:"reading",
question:"Thomas lives in a city ____ Canada.",
options:[
"in",
"on",
"at"
],
correct:"in"
},

{
type:"multiple",
category:"reading",
question:"His dad is an ____ mechanic.",
options:[
"auto",
"bus",
"plane"
],
correct:"auto"
},

{
type:"multiple",
category:"reading",
question:"Thomas is ____ years old.",
options:[
"twenty-one",
"twenty-two",
"twenty-three"
],
correct:"twenty-two"
},

{
type:"multiple",
category:"reading",
question:"Teresa is ____ high school.",
options:[
"at",
"in",
"on"
],
correct:"in"
},

{
type:"multiple",
category:"reading",
question:"What day is it in the story?",
options:["Monday","Sunday","Friday"],
correct:"Sunday"
},

{
type:"multiple",
category:"reading",
question:"What time does Tom get up?",
options:["8 o'clock","9 o'clock","10 o'clock"],
correct:"10 o'clock"
},

{
type:"multiple",
category:"reading",
question:"What does he have for breakfast?",
options:[
"Eggs and coffee",
"Cereal and milk",
"Fruit and tea"
],
correct:"Eggs and coffee"
},

{
type:"multiple",
category:"reading",
question:"Where does he play soccer?",
options:[
"At school",
"At the park",
"In the garden"
],
correct:"At the park"
},

{
type:"multiple",
category:"reading",
question:"What time does he go to bed?",
options:[
"10 o'clock",
"11 o'clock",
"12 o'clock"
],
correct:"11 o'clock"
},

{
type:"truefalse",
category:"reading",
question:"Tom gets up early on Sunday.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"He drinks coffee in the morning.",
options:["True","False"],
correct:"True"
},

{
type:"truefalse",
category:"reading",
question:"Tom plays tennis with his friends.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"He watches a movie in the evening.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"Tom goes to bed at 11 o'clock.",
options:["True","False"],
correct:"True"
},

{
type:"multiple",
category:"reading",
question:"What is the boy's name?",
options:["Tom","Leo","Thomas"],
correct:"Tom"
},

{
type:"multiple",
category:"reading",
question:"What does Tom do in the afternoon?",
options:[
"He plays soccer",
"He watches TV",
"He sleeps"
],
correct:"He plays soccer"
},

{
type:"multiple",
category:"reading",
question:"What does Tom watch in the evening?",
options:[
"TV",
"A football match",
"A movie"
],
correct:"TV"
},

{
type:"multiple",
category:"reading",
question:"Does Tom eat breakfast?",
options:["Yes","No","Sometimes"],
correct:"Yes"
},

{
type:"multiple",
category:"reading",
question:"What drink does he have with breakfast?",
options:[
"Tea",
"Coffee",
"Milk"
],
correct:"Coffee"
},

{
type:"multiple",
category:"reading",
question:"Tom gets ____ at 10 o'clock.",
options:["up","in","on"],
correct:"up"
},

{
type:"multiple",
category:"reading",
question:"He plays soccer ____ friends.",
options:["with","to","of"],
correct:"with"
},

{
type:"multiple",
category:"reading",
question:"Tom has a ____ breakfast.",
options:["small","big","short"],
correct:"big"
},

{
type:"multiple",
category:"reading",
question:"He watches TV in the ____.",
options:[
"morning",
"afternoon",
"evening"
],
correct:"evening"
},

{
type:"multiple",
category:"reading",
question:"Tom goes to bed ____ 11 o'clock.",
options:["on","in","at"],
correct:"at"
},

{
type:"multiple",
category:"reading",
question:"Who goes to the restaurant?",
options:[
"Anna and her friends",
"Anna and her family",
"Anna and her sister"
],
correct:"Anna and her family"
},

{
type:"multiple",
category:"reading",
question:"What food does Anna's mom want?",
options:["Pizza","Salad","Soup"],
correct:"Salad"
},

{
type:"multiple",
category:"reading",
question:"What does Anna's dad like?",
options:["Chicken","Pasta","Fish"],
correct:"Chicken"
},

{
type:"multiple",
category:"reading",
question:"What does Anna want to eat?",
options:["Cheese pizza","Salad","Burger"],
correct:"Cheese pizza"
},

{
type:"multiple",
category:"reading",
question:"What does Anna drink?",
options:["Milk","Water","Juice"],
correct:"Water"
},

{
type:"truefalse",
category:"reading",
question:"Anna goes to the restaurant alone.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"The restaurant has bad food.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"The mom wants a salad.",
options:["True","False"],
correct:"True"
},

{
type:"truefalse",
category:"reading",
question:"The dad likes chicken.",
options:["True","False"],
correct:"True"
},

{
type:"truefalse",
category:"reading",
question:"Anna drinks juice.",
options:["True","False"],
correct:"False"
},

{
type:"multiple",
category:"reading",
question:"What is the girl's name?",
options:["Anna","Maria","Lucy"],
correct:"Anna"
},

{
type:"multiple",
category:"reading",
question:"Where are Anna and her family?",
options:[
"At a restaurant",
"At home",
"At school"
],
correct:"At a restaurant"
},

{
type:"multiple",
category:"reading",
question:"Does the mom want chicken?",
options:["Yes","No","Sometimes"],
correct:"No"
},

{
type:"multiple",
category:"reading",
question:"Who wants the salad?",
options:[
"The mom",
"The dad",
"Anna"
],
correct:"The mom"
},

{
type:"multiple",
category:"reading",
question:"What does Anna want to drink?",
options:[
"Water",
"Milk",
"Juice"
],
correct:"Water"
},

{
type:"multiple",
category:"reading",
question:"Today I ____ to a restaurant.",
options:["go","goes","going"],
correct:"go"
},

{
type:"multiple",
category:"reading",
question:"My dad ____ chicken.",
options:["like","likes","liking"],
correct:"likes"
},

{
type:"multiple",
category:"reading",
question:"I want a big cheese ____.",
options:["pizza","salad","fish"],
correct:"pizza"
},

{
type:"multiple",
category:"reading",
question:"We are very ____.",
options:["sad","tired","happy"],
correct:"happy"
},

{
type:"multiple",
category:"reading",
question:"The restaurant has delicious ____.",
options:["food","car","book"],
correct:"food"
},

{
type:"multiple",
category:"reading",
question:"What is the boy's name?",
options:["Leo","Tom","Ben"],
correct:"Leo"
},

{
type:"multiple",
category:"reading",
question:"Where does Leo live?",
options:[
"An apartment",
"A house",
"A hotel"
],
correct:"A house"
},

{
type:"multiple",
category:"reading",
question:"How many rooms does his house have?",
options:["Two","Three","Four"],
correct:"Three"
},

{
type:"multiple",
category:"reading",
question:"Where is the bedroom?",
options:[
"Downstairs",
"Upstairs",
"In the kitchen"
],
correct:"Upstairs"
},

{
type:"multiple",
category:"reading",
question:"How does Leo feel about his house?",
options:[
"He likes it",
"He hates it",
"He is sad"
],
correct:"He likes it"
},

{
type:"truefalse",
category:"reading",
question:"Leo lives in an apartment.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"The living room is small.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"The kitchen is next to the living room.",
options:["True","False"],
correct:"True"
},

{
type:"truefalse",
category:"reading",
question:"Leo's bedroom is downstairs.",
options:["True","False"],
correct:"False"
},

{
type:"truefalse",
category:"reading",
question:"Leo does not like his house.",
options:["True","False"],
correct:"False"
},

{
type:"multiple",
category:"reading",
question:"What does Leo do in the living room?",
options:[
"He watches TV",
"He cooks",
"He sleeps"
],
correct:"He watches TV"
},

{
type:"multiple",
category:"reading",
question:"Which room is next to the living room?",
options:[
"The kitchen",
"The bedroom",
"The garage"
],
correct:"The kitchen"
},

{
type:"multiple",
category:"reading",
question:"How does Leo describe his bedroom?",
options:[
"Quiet",
"Noisy",
"Small"
],
correct:"Quiet"
},

{
type:"multiple",
category:"reading",
question:"Does Leo live in a house or an apartment?",
options:[
"A house",
"An apartment",
"A hotel"
],
correct:"A house"
},

{
type:"multiple",
category:"reading",
question:"What is the speaker's name?",
options:[
"Leo",
"Tom",
"Thomas"
],
correct:"Leo"
},

{
type:"multiple",
category:"reading",
question:"Hi, I ____ Leo.",
options:["am","is","are"],
correct:"am"
},

{
type:"multiple",
category:"reading",
question:"The living room is ____.",
options:[
"small",
"big",
"quiet"
],
correct:"big"
},

{
type:"multiple",
category:"reading",
question:"The ____ is next to the living room.",
options:[
"bedroom",
"kitchen",
"car"
],
correct:"kitchen"
},

{
type:"multiple",
category:"reading",
question:"My bedroom is ____.",
options:[
"upstairs",
"on",
"at"
],
correct:"upstairs"
},

{
type:"multiple",
category:"reading",
question:"I ____ my house!",
options:[
"live",
"like",
"play"
],
correct:"like"
}
];

const grammarQuestions = [{
type:"typing",
category:"grammar",
question:"I ___ a student.",
correct:["am"]
},

{
type:"typing",
category:"grammar",
question:"She ___ my best friend.",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"We ___ from Spain.",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"___ you ready?",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"It ___ a beautiful day.",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"They ___ not at home.",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"He ___ a doctor.",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"___ she your sister?",
correct:["is"]
},

{
type:"typing",
category:"grammar",
question:"You ___ very tall.",
correct:["are"]
},

{
type:"typing",
category:"grammar",
question:"I ___ hungry.",
correct:["am"]
},

{
type:"typing",
category:"grammar",
question:"___ am reading a book.",
correct:["i"]
},

{
type:"typing",
category:"grammar",
question:"This is ___ car.",
correct:["his"]
},

{
type:"typing",
category:"grammar",
question:"___ are playing football.",
correct:["they"]
},

{
type:"typing",
category:"grammar",
question:"Is this ___ dog?",
correct:["your"]
},

{
type:"typing",
category:"grammar",
question:"___ name is Maria.",
correct:["her"]
},

{
type:"typing",
category:"grammar",
question:"We love ___ new house.",
correct:["our"]
},

{
type:"typing",
category:"grammar",
question:"___ is a teacher.",
correct:["he"]
},

{
type:"typing",
category:"grammar",
question:"Look at ___!",
correct:["them"]
},

{
type:"typing",
category:"grammar",
question:"___ keys are on the table.",
correct:["my"]
},

{
type:"typing",
category:"grammar",
question:"Do ___ like coffee?",
correct:["you"]
},

{
type:"typing",
category:"grammar",
question:"I ___ pizza.",
correct:["like"]
},

{
type:"typing",
category:"grammar",
question:"She ___ in a bank.",
correct:["works"]
},

{
type:"typing",
category:"grammar",
question:"They ___ in London.",
correct:[
"do not live",
"don't live"
]
},

{
type:"typing",
category:"grammar",
question:"___ you speak English?",
correct:["do"]
},

{
type:"typing",
category:"grammar",
question:"He ___ a big dog.",
correct:["has"]
},

{
type:"typing",
category:"grammar",
question:"We ___ to school every day.",
correct:["go"]
},

{
type:"typing",
category:"grammar",
question:"___ she like ice cream?",
correct:["does"]
},

{
type:"typing",
category:"grammar",
question:"The sun ___ in the east.",
correct:["rises"]
},

{
type:"typing",
category:"grammar",
question:"I ___ getting up early.",
correct:[
"do not like",
"don't like"
]
},

{
type:"typing",
category:"grammar",
question:"___ they play tennis on Sundays?",
correct:["do"]
},

{
type:"typing",
category:"grammar",
question:"I want ___ apple.",
correct:["an"]
},

{
type:"typing",
category:"grammar",
question:"She has ___ dog and ___ cat.",
correct:["a a"]
},

{
type:"typing",
category:"grammar",
question:"___ book on the table is mine.",
correct:["the"]
},

{
type:"typing",
category:"grammar",
question:"He is ___ English teacher.",
correct:["an"]
},

{
type:"typing",
category:"grammar",
question:"We live in ___ small apartment.",
correct:["a"]
},

{
type:"typing",
category:"grammar",
question:"I saw ___ amazing movie last night.",
correct:["an"]
},

{
type:"typing",
category:"grammar",
question:"___ sky is blue.",
correct:["the"]
},

{
type:"typing",
category:"grammar",
question:"Do you have ___ pen?",
correct:["a"]
},

{
type:"typing",
category:"grammar",
question:"This is ___ best restaurant in town.",
correct:["the"]
},

{
type:"typing",
category:"grammar",
question:"I want to buy ___ car.",
correct:["a"]
},

{
type:"typing",
category:"grammar",
question:"I have two ___.",
correct:["cats"]
},

{
type:"typing",
category:"grammar",
question:"She bought three ___.",
correct:["apples"]
},

{
type:"typing",
category:"grammar",
question:"There are many ___ in the street.",
correct:["people"]
},

{
type:"typing",
category:"grammar",
question:"Look at those ___.",
correct:["children"]
},

{
type:"typing",
category:"grammar",
question:"I need some ___.",
correct:["water"]
},

{
type:"typing",
category:"grammar",
question:"Put the ___ on the table.",
correct:["glasses"]
},

{
type:"typing",
category:"grammar",
question:"Those ___ are very big.",
correct:["boxes"]
},

{
type:"typing",
category:"grammar",
question:"I have two ___.",
correct:["brothers"]
},

{
type:"typing",
category:"grammar",
question:"The ___ are running.",
correct:["dogs"]
},

{
type:"typing",
category:"grammar",
question:"He broke his ___.",
correct:["teeth"]
},

{
type:"typing",
category:"grammar",
question:"The keys are ___ the table.",
correct:["on"]
},

{
type:"typing",
category:"grammar",
question:"I live ___ Tashkent.",
correct:["in"]
},

{
type:"typing",
category:"grammar",
question:"She is ___ home.",
correct:["at"]
},

{
type:"typing",
category:"grammar",
question:"The cat is ___ the box.",
correct:["in"]
},

{
type:"typing",
category:"grammar",
question:"The picture is ___ the wall.",
correct:["on"]
},

{
type:"typing",
category:"grammar",
question:"We meet ___ the cinema.",
correct:["at"]
},

{
type:"typing",
category:"grammar",
question:"The dog is sleeping ___ the bed.",
correct:["under"]
},

{
type:"typing",
category:"grammar",
question:"There is a park ___ our house.",
correct:["near"]
},

{
type:"typing",
category:"grammar",
question:"He works ___ a hospital.",
correct:["in","at"]
},

{
type:"typing",
category:"grammar",
question:"The store is ___ the school and the bank.",
correct:["between"]
},

{
type:"typing",
category:"grammar",
question:"___ is your name?",
correct:["what"]
},

{
type:"typing",
category:"grammar",
question:"___ are you from?",
correct:["where"]
},

{
type:"typing",
category:"grammar",
question:"___ is that man?",
correct:["who"]
},

{
type:"typing",
category:"grammar",
question:"___ is your birthday?",
correct:["when"]
},

{
type:"typing",
category:"grammar",
question:"___ do you study English?",
correct:["why"]
},

{
type:"typing",
category:"grammar",
question:"___ old are you?",
correct:["how"]
},

{
type:"typing",
category:"grammar",
question:"___ do you go to work?",
correct:["how"]
},

{
type:"typing",
category:"grammar",
question:"___ is my jacket?",
correct:["where"]
},

{
type:"typing",
category:"grammar",
question:"___ is your favorite color?",
correct:["what"]
},

{
type:"typing",
category:"grammar",
question:"___ did you call last night?",
correct:["who"]
},

{
type:"typing",
category:"grammar",
question:"___ is my book here.",
correct:["this"]
},

{
type:"typing",
category:"grammar",
question:"___ are your shoes over there.",
correct:["those"]
},

{
type:"typing",
category:"grammar",
question:"Do you like ___ flower?",
correct:["this"]
},

{
type:"typing",
category:"grammar",
question:"___ apples on the tree are delicious.",
correct:["those"]
},

{
type:"typing",
category:"grammar",
question:"Who is ___ guy over there?",
correct:["that"]
},

{
type:"typing",
category:"grammar",
question:"___ are my keys in my hand.",
correct:["these"]
},

{
type:"typing",
category:"grammar",
question:"Is ___ your car?",
correct:["this"]
},

{
type:"typing",
category:"grammar",
question:"___ books here belong to me.",
correct:["these"]
},

{
type:"typing",
category:"grammar",
question:"Look at ___ birds in the sky.",
correct:["those"]
},

{
type:"typing",
category:"grammar",
question:"___ is a great idea!",
correct:["this"]
}
];

const vocabularyQuestions = [

{
type:"typing",
category:"vocabulary",
question:"Where do you sleep?",
correct:["bedroom"]
},

{
type:"typing",
category:"vocabulary",
question:"Where do you cook?",
correct:["kitchen"]
},

{
type:"typing",
category:"vocabulary",
question:"What do you sit on in the living room?",
correct:["sofa","couch"]
},

{
type:"typing",
category:"vocabulary",
question:"You wash your hands in the...",
correct:["bathroom"]
},

{
type:"typing",
category:"vocabulary",
question:"Use this to open a locked door.",
correct:["key"]
},

{
type:"typing",
category:"vocabulary",
question:"You turn this on to see in a dark room.",
correct:["light"]
},

{
type:"typing",
category:"vocabulary",
question:"A place where you can park your car.",
correct:["garage"]
},

{
type:"typing",
category:"vocabulary",
question:"We eat our dinner in the...",
correct:["dining room"]
},

{
type:"typing",
category:"vocabulary",
question:"Use this to climb to the second floor.",
correct:["stairs"]
},

{
type:"typing",
category:"vocabulary",
question:"A soft thing you put your head on in bed.",
correct:["pillow"]
},

{
type:"typing",
category:"vocabulary",
question:"A yellow fruit that monkeys love.",
correct:["banana"]
},

{
type:"typing",
category:"vocabulary",
question:"A red or green fruit used to make juice.",
correct:["apple"]
},

{
type:"typing",
category:"vocabulary",
question:"You drink this hot, black or brown liquid in the morning.",
correct:["coffee"]
},

{
type:"typing",
category:"vocabulary",
question:"A cold, white drink that comes from cows.",
correct:["milk"]
},

{
type:"typing",
category:"vocabulary",
question:"A sweet food eaten on birthdays.",
correct:["cake"]
},

{
type:"typing",
category:"vocabulary",
question:"A long, yellow fruit that grows in bunches.",
correct:["banana"]
},

{
type:"typing",
category:"vocabulary",
question:"A round Italian food with cheese and tomato.",
correct:["pizza"]
},

{
type:"typing",
category:"vocabulary",
question:"You use a knife and... to eat.",
correct:["fork"]
},

{
type:"typing",
category:"vocabulary",
question:"A round orange fruit.",
correct:["orange"]
},

{
type:"typing",
category:"vocabulary",
question:"Water frozen into ice.",
correct:["ice"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear these on your feet inside your shoes.",
correct:["socks"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear this around your waist to hold up your pants.",
correct:["belt"]
},

{
type:"typing",
category:"vocabulary",
question:"An upper-body garment with buttons and a collar.",
correct:["shirt"]
},

{
type:"typing",
category:"vocabulary",
question:"A one-piece garment worn by women or girls.",
correct:["dress"]
},

{
type:"typing",
category:"vocabulary",
question:"Footwear that covers your feet.",
correct:["shoes"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear this warm garment when it is cold outside.",
correct:["coat"]
},

{
type:"typing",
category:"vocabulary",
question:"A piece of clothing worn on your legs (not shorts).",
correct:["pants","trousers"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear this on your head to block the sun.",
correct:["hat"]
},

{
type:"typing",
category:"vocabulary",
question:"A piece of clothing worn over a shirt for formal events.",
correct:["jacket"]
},

{
type:"typing",
category:"vocabulary",
question:"You wear this when swimming.",
correct:["swimsuit"]
},

{
type:"typing",
category:"vocabulary",
question:"The first day of the weekend.",
correct:["saturday"]
},

{
type:"typing",
category:"vocabulary",
question:"The day after Monday.",
correct:["tuesday"]
},

{
type:"typing",
category:"vocabulary",
question:"How many days are in a week?",
correct:["7","seven"]
},

{
type:"typing",
category:"vocabulary",
question:"The fifth month of the year.",
correct:["may"]
},

{
type:"typing",
category:"vocabulary",
question:"The month after December.",
correct:["january"]
},

{
type:"typing",
category:"vocabulary",
question:"This season is very hot.",
correct:["summer"]
},

{
type:"typing",
category:"vocabulary",
question:"Leaves fall from trees in this season.",
correct:["autumn","fall"]
},

{
type:"typing",
category:"vocabulary",
question:"The time of day when you eat breakfast.",
correct:["morning"]
},

{
type:"typing",
category:"vocabulary",
question:"The time of day when you go to sleep.",
correct:["night"]
},

{
type:"typing",
category:"vocabulary",
question:"Another word for 60 minutes.",
correct:["hour"]
}

];

// RANDOM TANLASH

function shuffleArray(array){

    const arr = [...array];

    for(let i = arr.length - 1; i > 0; i--){

        const j =
        Math.floor(
            Math.random() * (i + 1)
        );

        [arr[i], arr[j]] =
        [arr[j], arr[i]];
    }

    return arr;
}

function generateExamQuestions() {

    const readingPart =
    shuffleArray(readingQuestions)
    .slice(0,20);

    const grammarPart =
    shuffleArray(grammarQuestions)
    .slice(0,20);

    const vocabularyPart =
    shuffleArray(vocabularyQuestions)
    .slice(0,10);

  return shuffleArray([
    ...readingPart,
    ...grammarPart,
    ...vocabularyPart
]);
}

// TEST MA'LUMOTLARI
let beginnerQuestions = [];
let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let certificateLevel = "";
let certificateScore = 0;
// ===== CERTIFICATE CENTER =====

function startPlacementTest(){

beginnerQuestions =
generateExamQuestions();

currentQuestion = 0;

correctAnswers = 0;

wrongAnswers = 0;

document
.getElementById("test-area")
.classList.remove("hidden");

showQuestion();

}

function showQuestion(){

const q =
beginnerQuestions[currentQuestion];

document
.getElementById("test-result")
.innerHTML = "";

document
.getElementById("test-question")
.innerHTML =
`${currentQuestion+1}. ${q.question}`;

const optionsDiv =
document.getElementById(
"test-options"
);

const input =
document.getElementById(
"typing-answer"
);

const submitBtn =
document.getElementById(
"submit-answer"
);

optionsDiv.innerHTML = "";

if(
q.type === "multiple" ||
q.type === "truefalse"
){

input.classList.add(
"hidden"
);

submitBtn.classList.add(
"hidden"
);

q.options.forEach(option=>{

const btn =
document.createElement(
"button"
);

btn.innerText =
option;

btn.className =
"yellow";

btn.onclick = ()=>{

checkAnswer(option);

};

optionsDiv.appendChild(
btn
);

});

}else{

input.classList.remove(
"hidden"
);

submitBtn.classList.remove(
"hidden"
);

input.value = "";

submitBtn.onclick =
checkTypingAnswer;

input.onkeydown = function(e){

if(e.key === "Enter"){

checkTypingAnswer();

}

};

}

}

function checkAnswer(answer){

const q =
beginnerQuestions[currentQuestion];

if(answer === q.correct){

document
.getElementById(
"test-result"
).innerHTML =
"<span style='color:green'>Correct</span>";

correctAnswers++;

}else{

document
.getElementById(
"test-result"
).innerHTML =
`
<span style='color:red'>
Wrong
</span>
<br>
The correct answer was:
<b>${q.correct}</b>
`;

wrongAnswers++;

}

setTimeout(()=>{

currentQuestion++;

if(
currentQuestion <
beginnerQuestions.length
){

showQuestion();

}else{

finishTest();

}

},1500);

}

function checkTypingAnswer(){

const q =
beginnerQuestions[currentQuestion];

const userAnswer =
document
.getElementById("typing-answer")
.value
.trim()
.toLowerCase();

let correct = false;

if(Array.isArray(q.correct)){

correct =
q.correct.some(
a => a.toLowerCase() === userAnswer
);

}else{

correct =
q.correct.toLowerCase() === userAnswer;

}

const result =
document.getElementById(
"test-result"
);

if(correct){

correctAnswers++;

result.innerHTML =
"✅ Correct";

}else{

wrongAnswers++;

result.innerHTML =
`
❌ Wrong

<br><br>

The correct answer was:

<b>${
Array.isArray(q.correct)
? q.correct[0]
: q.correct
}</b>
`;

}

setTimeout(()=>{

currentQuestion++;

if(
currentQuestion <
beginnerQuestions.length
){

showQuestion();

}else{

finishTest();

}

},1500);

}

function finishTest(){

document
.getElementById("test-area")
.classList.add("hidden");

const totalQuestions =
correctAnswers + wrongAnswers;

const percentage =
Math.round(
(correctAnswers / totalQuestions) * 100
);

let level = "";

if(percentage <= 20){

level = "A1";

}
else if(percentage <= 40){

level = "A2";

}
else if(percentage <= 60){

level = "B1";

}
else if(percentage <= 80){

level = "B2";

}
else{

level = "C1";

}

certificateLevel = level;
certificateScore = percentage;

alert(

"🎓 Test Finished!\n\n" +

"Correct: " + correctAnswers +

"\nWrong: " + wrongAnswers +

"\n\nScore: " + percentage + "%" +

"\n\nLevel: " + level

);

}