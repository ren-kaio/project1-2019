for(var links=document.querySelectorAll(".nav-item>.nav-link"),amount=links.length,i=0;i<amount;i++)links[i].addEventListener("click",function(){!function(){for(var i=0;i<amount;i++)links[i].classList.remove("active")}(),this.classList.add("active")});