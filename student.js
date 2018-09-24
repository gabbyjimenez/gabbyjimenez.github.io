 
 
 //Lab 6

 function getBreaks() {
  i=0;
  
  
  do{
  enterNum = prompt("Enter a number from 1 to 5" , "");
  
  }
  while (parseInt(enterNum) > 5 || parseInt(enterNum) < 1);
  
  
  answer = "";
  
  for(var j = 0; j<parseInt(enterNum); j++){
  answer += "<br>";
  
  }
  
  document.getElementById("breakResult").innerHTML +=  answer;
  
  }
  
  
  
  function getCards() {
  
  
  do {
      enterNum = prompt("Enter a number from 2 to 7", "");
  
  }
  while (parseInt(enterNum) > 7 || parseInt(enterNum) < 2);
  
  answer = "";
  count = 0;
  for (var j = 0; j < parseInt(enterNum); j++) {
      answer += "<span id='card"+count + "'>Card#" + count + "</span>";
      count += 1;
  
  }
  document.getElementById("cardResult").innerHTML += answer;
  
  }
  
  
  
  
   //Lab 5
  
   function getName() {
  
      var name = prompt("Please enter your name", "");
      if(name.length<5){
  
          alert("You have a short name!");
      }else if(name.length<10) {
  
          alert("You have a medium name!");
      } else if(name.length>10){
  
          alert("You have a long name!");
      }
  
     document.getElementById("nameResult").innerHTML = "Your name is: <b>" + name + "</b>";
  
  
   }
   
   
  function getAge(){
  
  var age = prompt("Please enter your age", "");
   
  if(parseInt(age)<18){
  
      alert("You are a kid!");
  
  }else if (parseInt(age)<50){
  
   alert("You are an adult!");
  
  }else if(parseInt(age)>50){
  
      alert("You are a senior citizen! ");
  
  }
  
  document.getElementById("ageResult").innerHTML = "You age is: <b> " + age + "</b";
  
  }
   
  //Lab 4
  var customertype = "direct";
  function changetype() {
      var newCustomerType;
  
      if(customertype == "direct"){
  
          newCustomerType = "advertising";
      }
      if(customertype == "advertising") {
  
          newCustomerType = "subscription";
      }
      if(customertype=="subscription"){
  
          newCustomerType = "direct";
      }
      customertype = newCustomerType;
  }
  function displaytype() {
      if (customertype == "direct") {
  
          alert("Buy Now! From this web page! My children need new shoes!");
      }
      if (customertype == "advertising") {
  
          alert("Support our advertisers! Click on an ad, so I can make money!");
      }
      if (customertype == "subscription") {
  
          alert("Renew your subscription today! My children need medicine!");
      }
  }
  
  
  
  
   //Lab 3
  
   // declare this variable outside of your functions
  
   currentspecial = 1; // selects which item that is "on special"
  
   function displayspecial() {
  
       if (currentspecial == 1) {
           alert("The current special is #1");
       }
       if (currentspecial == 2) {
           alert("The current special is #2");
       }
       if (currentspecial == 3) {
           alert("The current special is #3");
       }
  
       currentspecial = currentspecial + 1;
       if (currentspecial > 3) {
           currentspecial = 1;
       }
  
  
   }
  
   //Lab 2
   function linkTo(linkname) {
       console.log(linkname);
       if (confirm("Are you sure you want to jump to " + linkname + "?"))
           location = linkname;
  
  
   }
  
   //Lab 1 
   var myname = "Gabby";
   var classdescription = "Javascript";
   var thedate = "09/03/2018";
  
   function displayinfo() {
       alert("My name is " + myname + ", My class is " + classdescription + ", The Date is " + thedate);
   }