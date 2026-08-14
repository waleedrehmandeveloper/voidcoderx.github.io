let form = document.getElementById("contactForm");
let isSending = false;
let btn = document.getElementById("sendbtn");

form.addEventListener("submit", sendemail);

async function sendemail(e){
    e.preventDefault();
    if(isSending) return;

  let parms = {
        name: document.getElementById("fullname").value.trim(),
        email: document.getElementById("emailaddress").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim(),
    };

    if(
        parms.name === ""|| 
        parms.email ==="" || 
        parms.message === "" ||
        parms.subject === ""
    ){
        alert("Please fill all feilds before sending.");
        return
    }

    isSending = true;

    btn.innerText = "Sending...";

    
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