const decreasebtn = document.getElementById("decreasebtn");
const  resetbtn = document.getElementById("resetbtn");
const  increasebtn = document.getElementById("increasebtn");
const label = document.getElementById("label");
let count;

increasebtn.onclick = function() {
    count++;
    label.textContent = count; 
}

decreasebtn.onclick = function() {
    count--;
    label.textContent = count; 
}

resetbtn.onclick = function() {
    count = 0;
    label.textContent = count; 
}