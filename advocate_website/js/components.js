// Shared website header
const header = `
    <header class="navbar">
        <div class="container nav">
            <a class="brand" href="index.html">
                <span class="brand-mark">⚖</span>
                <span>
                    LEGAL TECH
                    <small>ADVOCATE SERVICES</small>
                </span>
            </a>

            <button class="menu" type="button" aria-label="Open navigation">
                ☰
            </button>

            <nav class="links">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a href="fees.html">Fees</a>
                <a href="appointment.html">Appointment</a>
                <a href="contact.html">Contact</a>
            </nav>
        </div>
    </header>
`;

// Shared website footer
const footer = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h3>Legal Tech</h3>
                    <p>
                        Professional advocate information, legal services and
                        online appointment requests in one responsive platform.
                    </p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <a href="about.html">About Advocate</a>
                    <a href="services.html">Legal Services</a>
                    <a href="fees.html">Fee Structure</a>
                    <a href="appointment.html">Book Appointment</a>
                </div>

                <div>
                    <h3>Contact</h3>
                    <a href="contact.html">📍 Pune, Maharashtra</a>
                    <a href="contact.html">✉ advocate@example.com</a>
                    <a href="contact.html">☎ +91 XXXXX XXXXX</a>
                </div>
            </div>

            <div class="footer-bottom">
                <span>© 2026 Legal Tech. Academic Mini Project.</span>
                <span>BCA23506</span>
            </div>
        </div>
    </footer>
`;

document.querySelector('#site-header')?.insertAdjacentHTML(
    'afterend',
    header
);

document.querySelector('#site-footer')?.insertAdjacentHTML(
    'afterend',
    footer
);
