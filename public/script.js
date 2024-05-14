const back = document.getElementsByClassName("back");
function goBack(){
    window.history.back();
}

const scrollContainer = document.querySelectorAll(".scrollContainer");
function scrolltoLeft(bt) {
    var currentPosition;
        if(bt == "bt1"){
            currentPosition = scrollContainer[0].scrollLeft;
            scrollContainer[0].scrollTo({
                left: currentPosition - 200,
                behavior: 'smooth'
            });
        } else if(bt == "bt2"){
            currentPosition = scrollContainer[1].scrollLeft;
            scrollContainer[1].scrollTo({
                left:  currentPosition - 200,
                behavior: 'smooth'
            });
        } else if(bt == "bt3"){
            currentPosition = scrollContainer[2].scrollLeft;
            scrollContainer[2].scrollTo({
                left:  currentPosition - 200,
                behavior: 'smooth'
            });
        }

}

function scrolltoRight(bt) {
    var currentPosition;
    if(bt == "bt1"){
        currentPosition = scrollContainer[0].scrollLeft;
        scrollContainer[0].scrollTo({
            left: currentPosition + 200,
            behavior: 'smooth'
        });
    } else if(bt == "bt2"){
        currentPosition = scrollContainer[1].scrollLeft;
        scrollContainer[1].scrollTo({
            left:  currentPosition + 200,
            behavior: 'smooth'
        });
    } else if(bt == "bt3"){
        currentPosition = scrollContainer[2].scrollLeft;
        scrollContainer[2].scrollTo({
            left:  currentPosition + 200,
            behavior: 'smooth'
        });
    }
}

function showmore(){
    const showMoreBtn = document.querySelector(".show-more-btn");
    const show = document.querySelector("#description");
    if(showMoreBtn.innerText === "Show more"){
        show.classList.add("line-clamp-none");
        showMoreBtn.innerText = "Show less"
    } else{
        show.classList.remove("line-clamp-none");
        showMoreBtn.innerText = "Show more"
    }
}

const mobileNavBtn = document.querySelector("#mobileMenuBtn");
const mobileNav = document.querySelector(".mobileMenu");

mobileNavBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('md:hidden');
});

function sendEmail(e){
    e.preventDefault();
    (function(){
        emailjs.init({
          publicKey: "fBrm2QucDoMpGt-qz",
        });
    })();
    let params = { 
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    if(params.email_id == ""){
        alert("Please field all the requirements!");
        return false;
    }
    
    emailjs.send("service_zey2njp", "template_ov22a9y", params)
    .then(function (res){
        alert("Message Sent!");
    })
    .catch(function (error) {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      });
}

const contact = document.getElementById("contacts");
contact.addEventListener('submit', sendEmail);