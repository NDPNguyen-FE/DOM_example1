var input = document.getElementById("nameUser");

var button = document.getElementById("submit");

function createElement() {
    var li = document.createElement("li");
    var textNode = document.createTextNode(nameUser.value);
    var ul = document.querySelector("ul");
    li.appendChild(textNode);
    ul.appendChild(li);
    nameUser.value = "";
}

function condition() {
    return nameUser.value.length;
}

function afterClick() {

    if (condition() > 0) {
        createElement();
    }
}
button.addEventListener("click", afterClick);

function afterkeyClick(event) {

    if (condition() > 0 && event.keyCode === 13) {
        createElement();
    }
}
input.addEventListener("keypress", afterkeyClick);