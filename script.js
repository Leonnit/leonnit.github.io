const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
menu.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});

const button = document.getElementById("button");

button.addEventListener('click', () =>{
    const link = document.createElement("a");
    link.href = "cv/mon CV.pdf";
    link.download = "CV_Leonnit.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

const cv = document.getElementById("cv");

cv.addEventListener('click', () =>{
    const link = document.createElement("a");
    link.href = "cv/mon CV.pdf";
    link.download = "CV_Leonnit.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});