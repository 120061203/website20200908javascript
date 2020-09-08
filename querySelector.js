function bigFunc() {
    for (var i = 0; i < _box.length; i++) {
        _box[i].classList.toggle("big");
    }
}


let _box = document.querySelectorAll(".box");
for (var i = 0; i < _box.length; i++) {
    _box[i].addEventListener("mouseover", bigFunc);
    _box[i].addEventListener("mouseleave", bigFunc);
}