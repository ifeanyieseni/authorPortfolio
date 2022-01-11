// Toggle Navbar 


const navTogler = document.querySelector(".nav-toggler");

navTogler.addEventListener("click", toggleNav);

function toggleNav(){
    navTogler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open")
}

// Close nav when clicking on a nav item 

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
})


// Sticky 

window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        this.document.querySelector(".header").classList.add("sticky");
    }
    else{
        this.document.querySelector(".header").classList.remove("sticky");
    }
})





// show More 
const readBtn = document.querySelector("#read-more");
const row = document.querySelector("#second-product");

readBtn.addEventListener("click", () =>{
    if(row.style.display === 'flex'){
        row.style.display = 'none';
    }
    else{
        row.style.display = 'flex';
    }
})

// Scroll 
AOS.init();
