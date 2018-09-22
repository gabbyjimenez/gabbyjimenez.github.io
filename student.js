 //Lab 3

 // declare this variable outside of your functions
    currentspecial = 1     // selects which item that is "on special"

    function displayspecial() {

       if (currentspecial == 1) {
          alert("The current special is #1")
       }
       if (currentspecial == 2)  {
          alert("The current special is #2")
       }
       if (currentspecial == 3)  {
          alert("The current special is #3")
       }
       
       currentspecial = currentspecial + 1;
       if (currentspecial > 3) {
         currentspecial = 1
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

function displayinfo ( ) {  
       alert ( "My name is " + myname + ", My class is " + classdescription + ", The Date is " + thedate); 
} 


    