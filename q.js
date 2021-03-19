


var queno = 0, test, progress, question, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
  {
      "question" :"What is the full form of Ajax?",
      "a":"Asynchronous JavaScript And XML",
      "b":"Asynchronous jQuery And XML",
      "c":"Asynchronous JavaScript And XHTML",
      "d":"Asynchronous jQuery And XHTML",
      "answer":"A"
  
  },
  {
      "question" :"In AJAX you can ",
      "a":"Update a web page without reloading the page",
      "b":"Receive data from a server - after the page has loaded",
      "c":"Send data to a server - in the background",
      "d":"All of the above",
      "answer":"D"
  
  },
  {
      "question" :"What is the name of the object used for AJAX request?",
      "a":"HttpRequest",
      "b":"xmlRequest",
      "c":"XMLHTTPRequest",
      "d":"Request",
      "answer":"C"
  
  },
  {
      "question" :"Ajax is a",
      "a":"Programing Language",
      "b":"Technology",
      "c":"OOPs concepts",
      "d":"Options B and C",
      "answer":"B"
  
  },
  {
      "question" :"Implementing AJAX in our websites we can make our web pages ____ ?",
      "a":"More Dynamic",
      "b":"More interactive and faster ",
      "c":"More Responsive",
      "d":"Easy to connect web page with server",
      "answer":"B"
  
  },
  {
      "question" :"AJAX allows web page to dynamically",
      "a":"Change content",
      "b":"Reload at times",
      "c":"Control other pages",
      "d":"Connect to other addresses",
      "answer":"A"
  
  },
   {
      "question" :"___ Of the following technologies, which one provides the ability to dynamically interact with Web page layout?",
      "a":"XML",
      "b":"HTML",
      "c":"JavaScript",
      "d":"Document Object Model",
      "answer":"D"
  
  },
  {
      "question" :"What does the XMLHttpRequest object accomplish in Ajax?",
      "a":"It provides the ability to asynchronously exchange data between Web browser and a Web server",
      "b":"It's the programming language used to develop Ajax applications",
      "c":"It provides the ability to markup and style the display of web-page text",
      "d":"It provides a means of exchanging structured data between the Web server and client",
      "answer":"A"
  
  },
  {
      "question" :" What two main structures compose JSON?",
      "a":"Key and value",
      "b":"Class and Object",
      "c":"Arrays and Objects",
      "d":"None of the above",
      "answer":"A"
  
  },
  {
      "question" :"Which is the correct format of writing a json name/value pair?",
      "a":"name : value'",
      "b":"name = \"value\"",
      "c":"\"name\" : \"value\"",
      "d":"All of the Above",
      "answer":"C"
  
  }
  ];
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
