const btn = document.querySelector(".btn-scroll")
const btnReservar = document.querySelectorAll(".btn-scroll-reservar")

btn.addEventListener("click", () => {
    scroll(0, 10000)
})

for (let i = 0; i < btnReservar.length; i++) {
    btnReservar[i].addEventListener("click", ()=>{
       scroll(0, 10000)
    })    
}