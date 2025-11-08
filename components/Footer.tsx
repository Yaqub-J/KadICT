import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link href="/" className="logo d-flex align-items-center">
                  <span>KAD ICT Hub</span>
                </Link>
                <p>A world class innovation hub that from inception has trained more than 15,000 residents of Kaduna State.</p>
                <div className="social-links d-flex mt-3">
                  <a href="https://x.com/thekadhub?s=08" className="twitter" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="https://web.facebook.com/theKADICTHUB" className="facebook" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/thekadhub?igsh=MWlzZm1teXNjNGszMg==" className="instagram" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bi bi-dash"></i> <Link href="/assets/img/STEM Festival 2024 Print final.pdf">STEM Festival</Link></li>
                  <li><i className="bi bi-dash"></i> <Link href="/challenge">Innovation Challenge</Link></li>
                  <li><i className="bi bi-dash"></i> <Link href="/challenge">Gallery</Link></li>
                  <li><i className="bi bi-dash"></i> <Link href="/programs">Programs</Link></li>
                  <li><i className="bi bi-dash"></i> <Link href="#">KadICT Online</Link></li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Training Programs</h4>
                <ul>
                  <li><i className="bi bi-dash"></i> <Link href="/programs">Beginner</Link></li>
                  <li><i className="bi bi-dash"></i> <Link href="/programs">Intermediate</Link></li>
                  <li><i className="bi bi-dash"></i> <Link href="/programs">Advanced</Link></li>
                  <li><i className="bi bi-dash"></i> <Link href="/programs">SIWESS / IT</Link></li>
                  <li><i className="bi bi-dash"></i> <Link href="/programs">Special Training</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  No. 47 Kanta Road, <br />
                  by Independence way,<br />
                  Kaduna State. <br /><br />
                  <strong>Phone:</strong> +234 8034575765<br />
                  <strong>Phone:</strong> +234 9135203350<br />
                  <strong>Email:</strong><a href="mailto:info@kadhub.ng"> info@kadhub.ng</a><br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              &copy; Copyright <strong><span>KAD ICT</span></strong>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
