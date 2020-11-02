let zoomIn = document.querySelectorAll(".zoom-in");
let main = document.getElementById("main");
console.log(zoomIn);
for (let i = 0; i < zoomIn.length; i++){
    zoomIn[i].addEventListener("click", () => {
        console.log(zoomIn[i].outerHTML);
        let imgdiv = document.createElement("div");
        imgdiv.innerHTML = `${zoomIn[i].outerHTML} <img id="back" src="image/back.png"> `;
        imgdiv.classList.add("large-img");
        main.appendChild(imgdiv);
        document.getElementById("back").addEventListener("click",()=>{
            imgdiv.innerHTML = "";
        });
    });
}
