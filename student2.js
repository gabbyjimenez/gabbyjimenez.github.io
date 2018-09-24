

//Lab 7
var companyname = "Mina's Pueblo";
var phonenumber = "858-555-6789";
var address = "123 Main St";

function getHeader() {
    var headerHTML = "<div> <h1> Welcome to " + companyname  + "</div> </h1>";
    document.getElementById("my_header").innerHTML = headerHTML;
}
function getFooter() {

    var headerHTML = "<div>" + navigator.appName  + " "+ navigator.appVersion + " " + navigator.platform+ "<br><div>" +companyname + "<br>" + address + "<br>" + phonenumber+ "</div>";
    document.getElementById("my_footer").innerHTML = headerHTML;
}

getHeader();
getFooter();


//Lab 8
function makeMenu(size){
    var menuNumHTML = "";
for(i=0; i<size; i++){
    menuNumHTML += "Menu<br>";
}
return menuNumHTML;
}

function makeMain(){

    var mainHTML = "<table style='width:100%' border=1 cellpadding=10><tr> " 
    +"<td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>" 
    +"<span id='prod_img'>Product Image</span></td> "
    +"<td id='prod_name'>Product Name</td> "
    +"<td style='text-align:right' id='prod_id'>Product ID</td></tr> "
    +"<tr><td style='text-align:center' colspan=2> "
    +"<span id='prod_bar'>Shopping Cart Link Bar</span> </td></tr> " 
    +"<tr><td colspan=2 id='prod_desc'>Product Description</td></tr> " 
   +" </table>";

    return mainHTML;
}

var getMyMenu = document.getElementById("my_menu").innerHTML= makeMenu(5);

var getMain = document.getElementById("my_main").innerHTML = makeMain();