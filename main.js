const typed = new Typed(".typing-text", {
  strings: ["Frontend Developer", "Professional Coder"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

const closeMenus = document.querySelector(".fa-times");
const openMenus = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-links")
function openMenu() {
  navMenu.classList.add("open-menu");
}

function closeMenu() {
  navMenu.classList.remove("open-menu");
}

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navMenu.classList.remove("open-menu");
  });
});

// Add event listeners
openMenus.addEventListener("click", openMenu);
closeMenus.addEventListener("click", closeMenu);

/*======================== Change background upon scroll====================*/
const scrollHeader = () => {
  const scrollHeader = document.getElementById("header");
  // when the page scrolls more than 50vh, add scroll header to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  })
  sr.reveal('.hero-title', {delay:400, origin: 'top',duration: 2000,distance: '60px'})
  sr.reveal('.hero-description', {delay:400, origin: 'top', distance: '60px'})
  sr.reveal('.social-media-icons', {delay:400, origin: 'top',distance: '60px'})
  sr.reveal('.hero-subtitle', {delay:400, origin: 'top',duration: 500, distance: '60px'})
  sr.reveal('.hero-content')
  sr.reveal('.hero-img', {delay:400, origin: 'bottom', distance: '60px', duration: 2500,})
  sr.reveal('.about-me-img', { origin: 'left', interval: 100})
  sr.reveal('.about-me-content ', { origin: 'right', interval: 100})
  sr.reveal('.project-box, .service-box')
  sr.reveal('.contact-content', {origin: 'left'}, '.contact-form', {origin: 'right'})
  sr.reveal('.contact-form', {origin: 'right'})
  sr.reveal('.social-link', {origin: 'bottom'})


  /*=============== SCROLL SECTION ACTIVE ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const navMenu = document.querySelector(`.nav-menu li a[href="#${sectionId}"]`);
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      // This is the active section, apply underline
      navMenu.style.setProperty('--underline-width', '100%');
    } else {
      // This is not the active section, remove underline
      navMenu.style.setProperty('--underline-width', '0%');
    }
    
  });
};

window.addEventListener('scroll', scrollActive);


/*=============== EMAIL JS ===============*/
function sendMail(event) {
  event.preventDefault();

  // Collect form data
  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Send the email
  emailjs.send("service_vjen0l3", "template_blcel45", templateParams).then(
    function (response) {
      alert("Message sent successfully!");
      console.log("Success response:", response);
    },
    function (error) {
      alert("Failed to send email. Check console for details.");
      console.error("Error:", error);
    }
  );
}

// document.getElementById('contact-form').addEventListener('submit', sendMail);


// Get all project boxes
const projectBoxes = document.querySelectorAll('.project-box');

// Get modal elements
const modal = document.getElementById('project-modal');
const modalContent = modal.querySelector('.modal-content');
const closeBtn = modal.querySelector('.close');

// Function to open modal
function openModal(imageSrc, description, subDescription) {
  modalContent.innerHTML = `
    <img src="${imageSrc}" alt="Project Image">
    <p class="project-description">${description}</p>
    <p class="project-sub-description">${subDescription}</p>
  `;
  modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

// Add click event to each project box
projectBoxes.forEach(projectBox => {
  const image = projectBox.querySelector('img');
  const description = projectBox.querySelector('.project-description').textContent;
  const subDescription = projectBox.querySelector('.project-sub-description').textContent;

  projectBox.addEventListener('click', () => {
    openModal(image.src, description, subDescription);
  });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

function setHeroHeight() {
  const hero = document.querySelector('.hero');
  hero.style.minHeight = `${window.innerHeight - 100}px`;
}

setHeroHeight();
window.addEventListener('resize', setHeroHeight);

