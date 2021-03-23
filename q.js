


var queno = 0, test, progress, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions
const request = new XMLHttpRequest();
 request.open("get","test.json")         
 request.onload = () =>{
     try{
     questions=JSON.parse(request.responseText)
     console.log(questions)
     renderQuestion(0,questions);
     }
     catch(e){
         console.warn("could not load json");
     }
 };
 request.send();


var total_seconds = 120 * 1;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

function CheckTime() {
  document.getElementById("timer").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

  if (total_seconds > 0) {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    timer = setTimeout(CheckTime, 1000);
  }
  
  if(total_seconds===0) {
    test.innerHTML = "<h2>You are out of time, You got "+correct+" of "+questions.length+" questions correct</h2>";
  }
}
timer = setTimeout(CheckTime, 1000);



function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(queno >= questions.length){
    test.innerHTML = "<h2> Your Score is "+correct+".</h2>";
    get("progress").innerHTML = "Congrats!";
    if(get("progress").innerHTML = "Congrats!"){
      clearInterval(timer);
    }
    
   
    queno = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("progress").innerHTML = "Question "+(queno+1)+" of "+questions.length;
  
  question = questions[queno].question;
  chA = questions[queno].a;
  chB = questions[queno].b;
  chC = questions[queno].c;
  chD = questions[queno].d;
 
  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer() '>Submit Answer</button>";
}

function checkAnswer(){
  
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
 
  if(choice == questions[queno].answer){
   
    correct++;
  }
 
  queno++;
  
 
  renderQuestion();
}

window.addEventListener("load", renderQuestion);
