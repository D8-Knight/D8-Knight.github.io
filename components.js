// Add console log to verify script loading
console.log('Components script loaded');

class Header extends HTMLElement {
    connectedCallback() {
        const currentPage = window.location.pathname.split('/').pop(); // Get the current page
        this.innerHTML = `
            <style>
                header {
                    background-color: rgb(20, 20, 20);
                    padding: 1rem;
                    position: fixed;
                    width: 100%;
                    z-index: 100;
                }

                .nav-links {
                    list-style: none;
                    display: flex;
                    gap: 1rem;
                    padding: 0;
                    justify-content: center;
                }

                .nav-links a {
                    color: white;
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    border: 2px solid white;
                    border-radius: 10px;
                    transition: background-color 0.3s, color 0.3s;
                }

                .nav-links a.active {
                    font-weight: bold;
                    background-color: var(--main-color);
                    color: rgb(20, 20, 20);
                }

                .nav-links a:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }
            </style>
            <header>
                <nav>
                    <ul class="nav-links">
                        <li><a href="/index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a></li>
                        <li><a href="/pages/Gameplay.html" class="${currentPage === 'Gameplay.html' ? 'active' : ''}">Gameplay</a></li>
                        <li><a href="/pages/Cuisine.html" class="${currentPage === 'Cuisine.html' ? 'active' : ''}">Cuisine</a></li>
                        <li><a href="/pages/Souvenirs.html" class="${currentPage === 'Souvenirs.html' ? 'active' : ''}">Souvenirs</a></li>
                        <li><a href="/pages/Booking.html" class="${currentPage === 'Booking.html' ? 'active' : ''}">Book Now</a></li>
                        <li><a href="/pages/Contact.html" class="${currentPage === 'Contact.html' ? 'active' : ''}">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .social-links {
                    text-align: center;
                    padding: 1rem;
                }

                .social-links img {
                    height: 60px;
                    margin: 0 5px;
                    transition: transform 0.2s;
                }

                .social-links img:hover {
                    transform: scale(1.1);
                }
            </style>
            <footer>
                <div class="social-links">
                    <a href="http://discord.d8-knight.com" target="_blank">
                        <img src="/assets/Social Links/Discord Stamp.png" alt="Discord">
                    </a>
                    <a href="http://tiktok.d8-knight.com" target="_blank">
                        <img src="/assets/Social Links/Tiktok Stamp.png" alt="TikTok">
                    </a>
                    <a href="http://x.d8-knight.com" target="_blank">
                        <img src="/assets/Social Links/X Stamp.png" alt="X">
                    </a>
                    <a href="http://instagram.d8-knight.com" target="_blank">
                        <img src="/assets/Social Links/Instagram Stamp.png" alt="Instagram">
                    </a>
                    <a href="http://youtube.d8-knight.com" target="_blank">
                        <img src="/assets/Social Links/Youtube Stamp.png" alt="YouTube">
                    </a>
                </div>
            </footer>
        `;
    }
}

// Register the components
customElements.define('d8-header', Header);
customElements.define('d8-footer', Footer);
