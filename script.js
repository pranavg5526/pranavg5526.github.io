console.clear();

// Select the circle element
/* const circleElement = document.querySelector('.circle');

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

let currentScale = 0;
let currentAngle = 0;

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const speed = 0.17;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  const scaleValue = (mouseVelocity / 150) * 0.5;
  currentScale += (scaleValue - currentScale) * speed;
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  const rotateTransform = `rotate(${currentAngle}deg)`;

  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
}

tick(); */


// Add event listener to research link
const researchLink = document.getElementById('research-link');
const researchContent = document.getElementById('research-content');
const homeContent = document.getElementById('home-content');
let isResearchVisible = false;
let isHomeVisible = true;
let isInternshipsVisible = false;

researchLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isResearchVisible) {
    homeContent.style.display = 'none';
    internshipsContent.style.display = 'none';
    researchContent.style.display = 'block';
    isResearchVisible = true;
    isHomeVisible = false;
    isInternshipsVisible = false;
    document.getElementById('research-link').style.color = 'yellow';
    document.getElementById('home-link').style.color = '';
    document.getElementById('internship-link').style.color = '';
  } else {
    document.getElementById('research-link').style.color = '';
  }
});

// Add event listener to home link
const homeLink = document.getElementById('home-link');

homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isHomeVisible) {
    researchContent.style.display = 'none';
    internshipsContent.style.display = 'none';
    homeContent.style.display = 'block';
    isResearchVisible = false;
    isInternshipsVisible = false;
    isHomeVisible = true;
    document.getElementById('home-link').style.color = 'yellow';
    document.getElementById('research-link').style.color = '';
    document.getElementById('internship-link').style.color = '';
  } else {
    document.getElementById('home-link').style.color = '';
  }
});

// Add event listener to internships link
const internshipsLink = document.getElementById('internship-link');
const internshipsContent = document.getElementById('internships-content');

internshipsLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isInternshipsVisible) {
    if (isHomeVisible) {
      homeContent.style.display = 'none';
    } else {
      researchContent.style.display = 'none';
    }
    internshipsContent.style.display = 'block';
    isInternshipsVisible = true;
    isHomeVisible = false;
    isResearchVisible = false;
    document.getElementById('internship-link').style.color = 'yellow';
    document.getElementById('home-link').style.color = '';
    document.getElementById('research-link').style.color = '';
  } else {
    document.getElementById('internship-link').style.color = '';
  }
});



    const flags = document.querySelectorAll("img");
    const tooltip = document.getElementById("tooltip");

    flags.forEach(flag => {
        flag.addEventListener("mouseover", (e) => {
            tooltip.textContent = flag.getAttribute("title");
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
            tooltip.style.display = "block";
        });

        flag.addEventListener("mousemove", (e) => {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        flag.addEventListener("mouseout", () => {
            tooltip.style.display = "none";
        });
    });


document.querySelectorAll('.more-news').forEach(details => {
  const summary = details.querySelector('summary');
  details.addEventListener('toggle', () => {
    summary.textContent = details.open ? 'Less News' : 'More News';
  });
});
