import React from 'react'
import '../../../public/css/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <>
    <footer>
    <div className="footer-container">
        <p>&copy; 2024 Leandro Lion -- Luis Guillon</p>
    </div>
    <div className="footer-whatsapp">
        <a href="https://api.whatsapp.com/send/?phone=5491152263161&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp fa-xl" style={{ color: '#63E6BE' }}></i>
        </a>
    </div>
    </footer>
    </>
  )
}

export default Footer