var product1 = { name:"HP 4426", id:"4426", desc:"Newest and Best Laptop from HP Computer"}; 
var product2 = { name:"Apple 88123 iPad", id:"88123", desc:"Apple Tablet Computer"}; 
var product3 = { name:"Dell Dimension 2400", id:"2400X", desc:"A fast 2.4 ghz computer"};

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
for(i=1; i<=size; i++){
    console.log(i);
    currentProd = eval("product" + i);
    console.log(product1);

    menuNumHTML += "<button onClick='makeMain(product" + i + ")'>Product#"+ i + "</button><br><br>";
    
}
return menuNumHTML;
}

function makeMain(productObj){
    console.log(makeLinkBar());
    var mainHTML = "<table style='width:100%' border=1 cellpadding=10><tr> " 
    +"<td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>" 
    +"<span id='prod_img'>Product Image</span></td> "
    +"<td id='prod_name'>"+ productObj.name +"</td> "
    +"<td style='text-align:right' id='prod_id'>"+productObj.id+"</td></tr> "
    +"<tr><td style='text-align:center' colspan=2> "
    +"<span id='prod_bar'>"+ makeLinkBar() + "</span> </td></tr> " 
    +"<tr><td colspan=2 id='prod_desc'>"+productObj.desc+"</td></tr> " 
   +" </table>";

    document.getElementById("my_main").innerHTML = mainHTML;
}

var getMyMenu = document.getElementById("my_menu").innerHTML= makeMenu(3);

//var getMain = document.getElementById("my_main").innerHTML = makeMain();


function makeLinkBar() {
 var htmlAnswer = "<a alt='' width='1' height='1' "
 + "src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'> Buy Here </a>";

 return htmlAnswer;
}

