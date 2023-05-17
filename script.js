const button = document.querySelector(".navmenu");
      links = document.querySelector(".navlinks");

      button.addEventListener("click",()=>{
        links.classList.toggle("display");
        button.children[0].classList.toggle("line1");
        button.children[1].classList.toggle("line2");
        button.children[2].classList.toggle("line3");
      })