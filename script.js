let form = document.getElementById("contactForm");
let isSending = false;
let btn = document.getElementById("sendbtn");

form.addEventListener("submit", sendemail);

async function sendemail(e){
    e.preventDefault();

    if(isSending) return;

    isSending = true;

    btn.innerText = "Sending...";

    let parms = {
        name: document.getElementById("fullname").value,
        email: document.getElementById("emailaddress").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    
    try {
        await emailjs.send("service_pqo291m", "template_yesp2iz", parms);
        alert(`Email sent successfully to ${parms.email}`);
        form.reset();

    } catch (error) {
        console.log(error);
        alert("Email send fail");
    } finally {
        isSending = false;
        btn.innerText = "Transmit Message";
    }
}