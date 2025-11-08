import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ServicesPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="Our Services"
        backgroundImage="/assets/img/kadict/hero11.jpg"
      />

      {/* ======= Our Services Section ======= */}
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>We offer a wide range of remote and on-site services</h2>
          </div>

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <Link href="/services/erp-systems" className="service-card-link">
                <div className="service-card">
                  <i className="bi bi-briefcase service-card-icon" style={{color: '#f57813'}}></i>
                  <h4>ERP Systems</h4>
                  <p>Our team of experts specializes in the development, design, and deployment of Enterprise Resource Planning (ERP) systems.</p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <Link href="/services/training" className="service-card-link">
                <div className="service-card">
                  <i className="bi bi-mortarboard service-card-icon" style={{color: '#15a04a'}}></i>
                  <h4>Training</h4>
                  <p>Our team of certified instructors is dedicated to providing top-notch training on the latest and most in-demand technologies.</p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <Link href="/services/software-testing" className="service-card-link">
                <div className="service-card">
                  <i className="bi bi-pc-display-horizontal service-card-icon" style={{color: '#d90769'}}></i>
                  <h4>Software Testing</h4>
                  <p>Our software testing services are second to none. We offer comprehensive and reliable testing solutions that ensure the quality and performance of your digital products.</p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <Link href="/services/blockchain-lab" className="service-card-link">
                <div className="service-card">
                  <i className="bi bi-currency-bitcoin service-card-icon" style={{color: '#15bfbc'}}></i>
                  <h4>Blockchain Lab</h4>
                  <p>The Africa Blockchain Lab, a groundbreaking initiative in partnership with Satoshi Capital Advisors, is the continent&apos;s premier destination for blockchain research, development, and innovation.</p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <Link href="/services/incubation-acceleration" className="service-card-link">
                <div className="service-card">
                  <i className="bi bi-reception-4 service-card-icon" style={{color: '#f5cf13'}}></i>
                  <h4>Incubation & Acceleration</h4>
                  <p>Our incubation and acceleration programs offer a comprehensive range of services, including mentorship, funding opportunities, workspace, and access to industry experts.</p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <Link href="/services/big-data-cybersecurity" className="service-card-link">
                <div className="service-card">
                  <i className="bi bi-file-lock2 service-card-icon" style={{color: '#1335f5'}}></i>
                  <h4>Big Data & Cyber-security</h4>
                  <p>Our unique approach to combining big data and cybersecurity sets us apart from the competition.</p>
                </div>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ======= Services Cards Section ======= */}
      <section id="services-cards" className="services-cards">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Featured Projects</h2>
          </div>

          <div className="row gy-4">

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <a href="https://kadvreg.net/index.php"><div className="card-bg" style={{backgroundImage: "url(/assets/img/kadvreg.png)"}}></div></a>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">Automated Vehicle Registration platform</h4>
                      <p>We are proud to have developed the first fully automated vehicle registration platform in Nigeria for the Kaduna State Internal Revenue Service (KADIRS).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
