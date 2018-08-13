var popularSlidesList = document.querySelectorAll(".details__item");
var popularControlsList = document.querySelectorAll(".details__input");
popularControlsList.forEach( function(item, id) {
    popularControlsList[id].addEventListener("click", function (evt) {
        popularControlsList.forEach(function(buttonNum, slideNumber) {
            if (popularControlsList[slideNumber].checked) {
                      popularSlidesList[slideNumber].classList.remove("details__item--hidden");
            } else if (!popularControlsList[slideNumber].checked) {
                      popularSlidesList[slideNumber].classList.add("details__item--hidden");
            }
        });
    });
});