var count = 0;
var msg = "No:of clicks:";
function modifyText() {
    count = count + 1;
    document.getElementById("text").innerHTML = msg + count;
}
var elem = document.getElementById("cow");
elem.addEventListener('click',modifyText,false);
