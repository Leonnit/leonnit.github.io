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

form = document.getElementById('contactForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const message = document.getElementById('message').value;

    const serviceID = 'service_jxh6qnd';
    const templateID = 'template_1wlmtz6';
    const userID = 'tGL9Mzz0qL_k0VQaG';

    const templateParams = {
        from_name: nom,
        message: message
    };

    try {
        await emailjs.send(serviceID, templateID, templateParams, userID);
        alert('Message envoyé avec succès !');
        document.getElementById('contactForm').reset();
    } catch (error) {
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } 
});

(function(){
    emailjs.init('tGL9Mzz0qL_k0VQaG'); // Remplacez par votre clé publique EmailJS
})();

/*
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const nom = document.getElementById('nom').value;
    const message = document.getElementById('message').value;
    const mailto = `mailto:leonnitnomenjanahary@gmail.com?subject=Message de ${encodeURIComponent(nom)}&body=${encodeURIComponent(message + "\n\nEmail: " + email)}`;
    window.location.href = mailto;
});
*/