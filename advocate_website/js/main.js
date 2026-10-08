// Mobile navigation
const menuButton = document.querySelector('.menu');
const navigationLinks = document.querySelector('.links');

if (menuButton && navigationLinks) {
    menuButton.addEventListener('click', () => {
        navigationLinks.classList.toggle('open');
    });
}

// Highlight the current page in the navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

if (navigationLinks) {
    navigationLinks.querySelectorAll('a').forEach((link) => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// Add the popup animation to every content div.
// Structural placeholder divs are excluded so the layout remains stable.
const animatedDivs = document.querySelectorAll(
    'div:not(#site-header):not(#site-footer):not(.toast)'
);

animatedDivs.forEach((element, index) => {
    element.classList.add('popup');
    element.style.setProperty('--popup-delay', `${(index % 6) * 0.08}s`);
});

// Reveal elements when they enter the viewport.
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
    }
);

document.querySelectorAll('.popup').forEach((element) => {
    revealObserver.observe(element);
});

// Appointment form demo
const appointmentForm = document.querySelector('#appointmentForm');
const toast = document.querySelector('.toast');

if (appointmentForm) {
    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(appointmentForm);
        const appointmentData = Object.fromEntries(formData);

        localStorage.setItem(
            'lastAppointment',
            JSON.stringify(appointmentData)
        );

        appointmentForm.reset();

        if (toast) {
            toast.classList.add('show');

            setTimeout(() => {
                toast.classList.remove('show');
            }, 3500);
        }
    });
}
