// просто потренировалась в задании toggle на чистом js

let links = document.querySelectorAll(".nav-item>.nav-link");

let amount = links.length;

for(let i=0; i<amount; i++) {
    links[i].addEventListener('click', function () {

        function removeActive() {
            for(let j=0; j<amount; j++) {
                links[j].classList.remove("active")
            }
        }

        removeActive();
        this.classList.add("active");

    } )
}