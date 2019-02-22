// просто потренировалась в задании toggle на чистом js

var links = document.querySelectorAll(".nav-item>.nav-link");

var amount = links.length;

for(var i=0; i<amount; i++) {
    links[i].addEventListener('click', function () {

        function removeActive() {
            for(var j=0; j<amount; j++) {
                links[j].classList.remove("active")
            }
        }

        removeActive();
        this.classList.add("active");

    } )
}