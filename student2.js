var companyname = "Mina's Pueblo";
var phonenumber = "858-555-6789";
var address = "123 Main St";

function getHeader() {
    var headerHTML = "<div> <h1> Welcome to " + companyname  + "</div> </h1>";
    document.getElementById("headerDiv").innerHTML = headerHTML;
}
function getFooter() {

    var headerHTML = "<div>" +companyname + "<br>" + address + "<br>" + phonenumber+ "</div>";
    document.getElementById("footerDiv").innerHTML = headerHTML;
}

getHeader();
getFooter();