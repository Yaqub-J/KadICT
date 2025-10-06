import Breadcrumbs from '@/components/Breadcrumbs';

export default function ProgramsPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="Programs"
        backgroundImage="/assets/img/kadict/hero5.jpg"
      />

      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">

          <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

            <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-beginner">Beginner</li>
              <li data-filter=".filter-intermediate">Intermediate</li>
              <li data-filter=".filter-advanced">Advanced</li>
            </ul>

            <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="300">

              <div className="col-lg-4 col-md-6 portfolio-item filter-advanced">
                <img src="/assets/img/portfolio/DATA ANALYSIS FLYER.psdADDED PRICE.psd2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>DATA ANALYSIS</h4>
                  <p>Uncover the power of data and transform raw information into actionable insights with our Data Analysis course.</p>
                  <a href="/assets/img/portfolio/DATA ANALYSIS FLYER.psdADDED PRICE.psd2.png" title="DATA ANALYSIS" data-gallery="portfolio-gallery-advanced" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-beginner">
                <img src="/assets/img/portfolio/DIGITAL LITERACY FLYER.psdADDED PRICE.psd2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>DIGITAL LITERACY</h4>
                  <p>Empower yourself with essential digital skills to thrive in today&apos;s tech-driven world through our Digital Literacy course.</p>
                  <a href="/assets/img/portfolio/DIGITAL LITERACY FLYER.psdADDED PRICE.psd2.png" title="DIGITAL LITERACY" data-gallery="portfolio-gallery-beginner" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-beginner">
                <img src="/assets/img/portfolio/GRAPHICS DESIGN.psdADDED PRICE.psd2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>GRAPHICS DESIGN</h4>
                  <p>Bring your creative visions to life and master the art of visual communication with our Graphics Design course.</p>
                  <a href="/assets/img/portfolio/GRAPHICS DESIGN.psdADDED PRICE.psd2.png" title="GRAPHICS DESIGN" data-gallery="portfolio-gallery-beginner" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-advanced">
                <img src="/assets/img/portfolio/KAD ICT HUB CYBER-SECURITY COURSE FLYER.psdADDED PRICE.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>CYBER-SECURITY</h4>
                  <p>Safeguard digital landscapes and protect against online threats with our comprehensive Cybersecurity course.</p>
                  <a href="/assets/img/portfolio/KAD ICT HUB CYBER-SECURITY COURSE FLYER.psdADDED PRICE.png" title="CYBER-SECURITY" data-gallery="portfolio-gallery-advanced" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-intermediate">
                <img src="/assets/img/portfolio/IT STUDENTS FLYER.psdivi.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>IT & SIWES</h4>
                  <p>Bridge the gap between theory and practice in Nigeria&apos;s tech industry through hands-on experience with our IT & SIWES program.</p>
                  <a href="/assets/img/portfolio/IT STUDENTS FLYER.psdivi.png" title="IT & SIWESS" data-gallery="portfolio-gallery-intermediate" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-intermediate">
                <img src="/assets/img/portfolio/KAD ICT HUB NETWORKING COURSE FLYER.psdADDED PRICE.psd2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>NETWORKING</h4>
                  <p>Build and manage secure, efficient networks to connect the world and power modern communication with our Networking course.</p>
                  <a href="/assets/img/portfolio/KAD ICT HUB NETWORKING COURSE FLYER.psdADDED PRICE.psd2.png" title="NETWORKING" data-gallery="portfolio-gallery-intermediate" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-intermediate">
                <img src="/assets/img/portfolio/KAD ICT HUB PROGRAMMING COURSE ADDED PRICE.png2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>PROGRAMMING</h4>
                  <p>Unlock the language of technology and create innovative solutions by mastering coding with our Programming course.</p>
                  <a href="/assets/img/portfolio/KAD ICT HUB PROGRAMMING COURSE ADDED PRICE.png2.png" title="PROGRAMMING" data-gallery="portfolio-gallery-intermediate" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-intermediate">
                <img src="/assets/img/portfolio/MOBILE APP DEVT.png2024 CORRECTION.psdADDED PRICE 2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>MOBILE APP DEVELOPMENT</h4>
                  <p>Turn your app ideas into reality and design seamless user experiences with our Mobile App Development course.</p>
                  <a href="/assets/img/portfolio/MOBILE APP DEVT.png2024 CORRECTION.psdADDED PRICE 2.png" title="MOBILE APP DEVELOPMENT" data-gallery="portfolio-gallery-intermediate" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-beginner">
                <img src="/assets/img/portfolio/MOBILE REPAIRS FLYER.psdIII.psdADDED PRICE.psd2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>MOBILE PHONE REPAIRS</h4>
                  <p>Learn the skills to diagnose and fix mobile phone issues, turning your expertise into a profitable venture with our Mobile Phone Repairs course.</p>
                  <a href="/assets/img/portfolio/MOBILE REPAIRS FLYER.psdIII.psdADDED PRICE.psd2.png" title="MOBILE PHONE REPAIRS" data-gallery="portfolio-gallery-beginner" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-beginner">
                <img src="/assets/img/portfolio/WED DEVELOPMENTR FLYER.psdADDED PRICE.psd2.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>WEB DEVELOPMENT</h4>
                  <p>Craft stunning, user-friendly websites and unleash your creativity in the digital space with our Web Development course.</p>
                  <a href="/assets/img/portfolio/WED DEVELOPMENTR FLYER.psdADDED PRICE.psd2.png" title="WEB DEVELOPMENT" data-gallery="portfolio-gallery-beginner" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <a href="#" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
