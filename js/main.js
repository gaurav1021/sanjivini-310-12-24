// ========= SCROLL NAVIGATION ============ //
function onScroll() {
  if (scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

// ========= MENU MOBILE ============ //
const navMenu = document.getElementById("menu-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

navMenu.addEventListener("click", toggleMenu);

// ========= REMOVE MENU MOBILE ============ //
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

// ========= SCROLL TOP ============ //
const backTopButton = document.querySelector(".back-top");
function backToTop() {
  if (window.scrollY >= 550) {
    backTopButton.classList.add("show");
  } else {
    backTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", function () {
  backToTop();
});

// ========= SCROLL REVEAL ============ //

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
});

scrollReveal.reveal(".topRevealSmall", { delay: 400 });
scrollReveal.reveal(".topRevealMedium", { delay: 600 });
scrollReveal.reveal(".topRevealLarge", { delay: 800 });

// SCROLL BOTTOM
const scrollRevealBottom = ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 2000,
});

scrollReveal.reveal(".bottomRevealSmall", { delay: 400 });
scrollReveal.reveal(".bottomRevealMedium", { delay: 600 });
scrollReveal.reveal(".bottomRevealLarge", { delay: 800 });


// Function to animate the numbers from 0 to the target number
const animateNumbers = () => {
  const stats = document.querySelectorAll('.stat-number');

  stats.forEach((stat) => {
    const target = +stat.getAttribute('data-target'); // Get the target number
    let count = 0;
    const speed = 200; // Adjust speed for a smoother animation

    const updateCount = () => {
      const increment = target / speed; // Increment for each frame
      count += increment;

      if (count < target) {
        stat.textContent = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        stat.textContent = target; // Ensure final value is exactly the target
      }
    };

    updateCount();
  });
};

// Call the animation function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', animateNumbers);



function toggleSubServices(serviceId) {
  const subServices = document.getElementById(serviceId);
  const toggleBtn = subServices.previousElementSibling.querySelector('.toggle-btn');
  
  if (subServices.style.display === 'block') {
    subServices.style.display = 'none';
    toggleBtn.textContent = '+';
  } else {
    subServices.style.display = 'block';
    toggleBtn.textContent = '-';
  }
}

function toggleDescription(descId) {
  const description = document.getElementById(descId);
  const toggleDesc = description.previousElementSibling.querySelector('.toggle-desc');

  if (description.style.display === 'block') {
    description.style.display = 'none';
    toggleDesc.textContent = '+';
  } else {
    description.style.display = 'block';
    toggleDesc.textContent = '-';
  }
}


// Get the modal
var modal = document.getElementById("popupModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// Show the modal 3 seconds after the page loads
window.onload = function() {
  setTimeout(function() {
    modal.style.display = "block";
  }, 3000); // 3000 milliseconds = 3 seconds
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Optional: Automatically close modal after form submission
document.querySelector("form").addEventListener("submit", function() {
  modal.style.display = "none";
});














/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
