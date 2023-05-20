var back = prompt("Enter List Heading of your choice ...(Cars, Froots, vegis) ").toLowerCase();
var Heading = document.getElementById("Heading").innerText = back;
if ( back == "froots" ) {
    var option = document.getElementById("List");
option.innerHTML = "<li>Apple</li> <li>Banana</li> <li>Grapes</li> <li>Melon</li> <li>Water-melon</li>";
}
else if ( back == "vegis" ){
    var option = document.getElementById("List-1");
option.innerHTML = "<li>Bhindi</li> <li>Karela</li> <li>Kaddu</li> <li>Bengan</li> <li>Tinde</li>";
}
else if ( back == "cars" ) {
    var option = document.getElementById("List-2");
option.innerHTML = "<li>Corola</li> <li>Suzuki</li> <li>Honda</li> <li>Ford</li> <li>Jaguar</li>";
}
else {
    document.write("Wrong Input");
}