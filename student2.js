//Lab 9 Done
//Lab 10 done
//Lab 11 done
//Lab 12 done
//Lab 13 done
//Lab 14 done

var product1 = {
    name: "Village Tapestry",
    id: "100",
    desc: "Hand-made tapestry from Oaxaca, Mexico. These tapestries are made with organic and natural dyes."
};
var product2 = {
    name: "Authentic Oaxacan Blouse",
    id: "200",
    desc: "Hand embroidered Oaxacan blouse. The blouse is embroidered with a floral design."
};
var product3 = {
    name: "Hand-Crafted Backpack",
    id: "300",
    desc: "Hand-made backpack for everyday use. This is sturdy and durable with adjustable straps."
};
var cardArray = [];
var cardnum = -1;
var ad1Window = null;
var ad2Window = null;
var ad3Window = null;

var currentAdNum = 0;

//Lab 7
var companyname = "Mina's Pueblo";
var phonenumber = "858-555-6789";
var address = "123 Main St";

function getHeader() {
    var headerHTML = "<div> <h1> Welcome to " + companyname + "</div> </h1>";
    document.getElementById("my_header").innerHTML = headerHTML;
}

function getFooter() {

    var headerHTML = "<div>" + navigator.appName + " " + navigator.appVersion + " " + navigator.platform + "<br><div>" + companyname + "<br>" + address + "<br>" + phonenumber + "</div>";
    document.getElementById("my_footer").innerHTML = headerHTML;
}

getHeader();
getFooter();


//Lab 8
function makeMenu(size) {
    var menuNumHTML = "";
    for (i = 1; i <= size; i++) {
        currentProd = eval("product" + i);

        menuNumHTML += "<button onClick='makeMain(product" + i + ")'>Product#" + i + "</button><br><br>";

    }
    menuNumHTML += "<button onClick='dealCards()'>Deal Cards </button><br><br>";
    menuNumHTML += "<button onClick='hitCard()'>Hit Card </button><br><br>";
    menuNumHTML += "<button onClick='popupAd()'>Pop Up Ad </button><br><br>";
    menuNumHTML += "<button onClick='closeAd()'>Close Ad </button><br><br>";
    menuNumHTML += "<button onClick='makeForm()'>Make Form </button><br><br>";
    return menuNumHTML;
}

function makeMain(product) {
    cardnum = -1;
    var imgurl = 'https://raw.githubusercontent.com/gabbyjimenez/gabbyjimenez.github.io/master/images/';
    var produrl = imgurl + product.id + '.jpg';
    var mainHTML = "<table style='width:100%' border=1 cellpadding=10><tr> " +
        "<td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>" +
        "<span id='prod_img'><img src='"+produrl+"' alt='Product Image' width='200px' height='200px'></span></td> " +
        "<td id='prod_name'><h1 style='color:red; text-align:center'>" + product.name + "</h1></td> " +
        "<td style='text-align:center' id='prod_id'>" + product.id + "</td></tr> " +
        "<tr><td style='text-align:center' colspan=2> " +
        "<span id='prod_bar'>" + makeLinkBar() + "</span> </td></tr> " +
        "<tr><td colspan=2 id='prod_desc' style='text-align:center'>" + product.desc + "</td></tr> " +
        " </table>";

    document.getElementById("my_main").innerHTML = mainHTML;
}

var getMyMenu = document.getElementById("my_menu").innerHTML = makeMenu(3);

//var getMain = document.getElementById("my_main").innerHTML = makeMain();


function makeLinkBar() {
    var htmlAnswer = "<a alt='' width='1' height='1' " +
        "src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'> Buy Here </a>";

    return htmlAnswer;
}

function dealCards() {
    cardArray = [];
    cardnum = 2;
    var max = 51;
    var min = 0;


    for(i=0;i<5;i++){
        var newNum = Math.floor(Math.random() * (max - min + 1)) + min;
        //This while loop is to make sure that there isn't duplicates in the array.
        while(cardArray.includes(newNum)){
            newNum = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        cardArray.push(newNum);
    }
    var imgurl = 'http://www.college1.com/classes/cs190/lecture/images/cards/gbCard';
    var card1url = imgurl + cardArray[0] + '.gif';
    var card2url = imgurl + cardArray[1] + '.gif';
    var backCardurl = imgurl + '52.gif';
    var cardHTML = "<img src='"+card1url+"' id='card1'>";
    cardHTML += "<img src='" + card2url + "' id='card2'>";
    cardHTML += "<img src='" + backCardurl + "' id='card3'>";
    cardHTML += "<img src='" + backCardurl + "' id='card4'>";
    cardHTML += "<img src='" + backCardurl + "' id='card5'>";
    document.getElementById("my_main").innerHTML = cardHTML;
    // where cardnumber is 0 to 51 for a face up card and 52 for the back 
    // insert cardurl into an img tag to display, DO NOT forget id='cardX'
}
function hitCard() {
    if(cardnum==-1){
        alert("Please select 'Deal Cards' to play first.");
        return;
    }
    cardnum += 1;
    if(cardnum<=5){
    var max = 51;
    var min = 0;
    var cardImageNum = cardArray[cardnum-1];
    var imgurl = 'http://www.college1.com/classes/cs190/lecture/images/cards/gbCard';
    var cardURL = imgurl + cardImageNum + '.gif';
    // var hitCardHTML = "<img src='" + cardURL + "' id='"+cardnum+"'>";
    document.getElementById("card" + cardnum).src = cardURL;
    }else {
        alert("You cannot show more than 5 cards!")
    }

}

function popupAd() {
    currentAdNum +=1;
    if(currentAdNum  > 3){
        currentAdNum = 1;
    }
    if(currentAdNum==1){
   ad1Window = open("", "ad1", "width=450,height=500");
   ad1Window.document.writeln("<style>body{background-color:red;}</style><div id='my_div'></div>");
   ad1Window.document.close();
   ad1Window.document.getElementById('my_div').innerHTML =
       "<h1>Looking for cheap tickets to Mexico?! <a href='https://www.volaris.com/?gclid=EAIaIQobChMI0sKPj4n23QIVUZ7ACh1pFgtQEAAYASAAEgLhzvD_BwE'> Click Here! </a></h1>";
    ad1Window.focus();
    }
    if(currentAdNum==2){
   ad2Window = open("", "ad2", "width=700,height=400");
   ad2Window.document.writeln("<style>body{background-color:grey;}</style><div id='my_div'></div>");
   ad2Window.document.close();
   ad2Window.document.getElementById('my_div').innerHTML =
       "<h1>Looking for a cheap room in Oaxaca, Mexico?! <a href='https://www.airbnb.com/s/Oaxaca--Mexico'> Click Here! </a></h1>";
   ad2Window.focus();
    }
    if(currentAdNum==3){
   ad3Window = open("", "ad3", "width=600,height=700");
   ad3Window.document.writeln("<style>body{background-color:green;}</style><div id='my_div'></div>");
   ad3Window.document.close();
   ad3Window.document.getElementById('my_div').innerHTML =
       "<h1>Do you want to cheap Mexican food in the LA Area?! <a href='http://www.ilovemole.com/'> Click Here! </a></h1>";
   ad3Window.focus();

    }
    
}
function closeAd(){
    if(currentAdNum==1){
        if(ad1Window!=null){
            ad1Window.close();
        }
    }
    if(currentAdNum==2){
        if (ad2Window != null) {
            ad2Window.close();
        }
    }
    if(currentAdNum==3){
        if (ad3Window != null) {
            ad3Window.close();
        }
    }
}
function checkForm(){
    var firstName = document.customerform.firstname.value;
    var lastName = document.customerform.lastname.value;
    var address = document.customerform.address.value;
    var city = document.customerform.city.value;
    var state = document.customerform.state.value;
    var zip = document.customerform.zip.value;
    var emailaddr = document.customerform.emailaddr.value;
    var formArray = [firstName, lastName, address, city, state, zip, emailaddr];
    var fieldNameArray = ["First Name", "Last Name", "Address", "City", "State", "Zip", "Email Address"];
    var emptyFieldArray = [];
    for(i=0;i<formArray.length;i++){
        if(formArray[i]==null || formArray[i]==""){
            emptyFieldArray.push(fieldNameArray[i]);
        }
    }
    if (emptyFieldArray.length > 0) {

        var alertStr = "Please fill out the following fields in order to submit: ";
        for(i=0;i<emptyFieldArray.length;i++){
            alertStr += emptyFieldArray[i];
            if(i!=emptyFieldArray.length-1){
                alertStr+= ", ";
            }
        }
        alert(alertStr);
        return false;
    }else {
        return true;
    }
}
function makeForm(){
    var formHTML = "";
    formHTML += "<form onSubmit='return checkForm()' name='customerform' method='post' action='http://www.college1.com/classes/javascript/survey.php'>";
    formHTML += "<table width=70% border=1>";
    formHTML += "<INPUT TYPE='hidden' NAME='send_email' VALUE='gjimenez6@my.canyons.edu'>";
    formHTML += "<tr>";
    formHTML += "<td>First Name: <input type='text' name='firstname'></td>";
    formHTML += "<td align=right> Last Name: <input type='text' name='lastname'></td>";
    formHTML += "</tr> <tr> ";
    formHTML += "<td colspan=2>Address: <input type='text' name='address' size=50></td></tr><tr>";
    formHTML += "<td>City: <input type='text' name='city'></td>";
    formHTML += "<td align=right>State: <input type='text' name='state' size=3>";
    formHTML += "Zip: <input type='text' name='zip' size=6></td><tr>";
    formHTML += "<td colspan=2>Email Address: <input type='text' name='emailaddr' size=50></td></tr><tr>";
    formHTML += "<td><input type='submit' value='Submit'></td>";
    formHTML += "<td align=right><input type='reset'></td></tr>";
    formHTML += "</table></form>";
    document.getElementById("my_main").innerHTML = formHTML;
}