
const btn = document.getElementById("btn")

const allbox = document.getElementsByClassName("box_one")

const alldot = document.getElementsByClassName("dot")
console.log(alldot)

btn.addEventListener("click", (eo) => {
  
for (let i = 0; i < allbox.length; i++) {
  
  alldot[i].style.display = "none"
  allbox[i].style.backgroundColor = "#E5EFFA"
}



})

