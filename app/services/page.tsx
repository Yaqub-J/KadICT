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

          <div className="row gy-5">

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="icon flex-shrink-0"><i className="bi bi-briefcase" style={{color: '#f57813'}}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">ERP Systems</a></h4>
                <p className="description">Our team of experts specializes in the development, design, and deployment of Enterprise Resource Planning (ERP) systems.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="icon flex-shrink-0"><i className="bi bi-mortarboard" style={{color: '#15a04a'}}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Training</a></h4>
                <p className="description">Our team of certified instructors is dedicated to providing top-notch training on the latest and most in-demand technologies.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="icon flex-shrink-0"><i className="bi bi-pc-display-horizontal" style={{color: '#d90769'}}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Software Testing</a></h4>
                <p className="description">Our software testing services are second to none. We offer comprehensive and reliable testing solutions that ensure the quality and performance of your digital products.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <div className="icon flex-shrink-0"><i className="bi bi-currency-bitcoin" style={{color: '#15bfbc'}}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Blockchain Lab</a></h4>
                <p className="description">The Africa Blockchain Lab, a groundbreaking initiative in partnership with Satoshi Capital Advisors, is the continent&apos;s premier destination for blockchain research, development, and innovation.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <div className="icon flex-shrink-0"><i className="bi bi-reception-4" style={{color: '#f5cf13'}}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Incubation & Accelleration</a></h4>
                <p className="description">Our incubation and acceleration programs offer a comprehensive range of services, including mentorship, funding opportunities, workspace, and access to industry experts.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
              <div className="icon flex-shrink-0"><i className="bi bi-file-lock2" style={{color: '#1335f5'}}></i></div>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">Big Data & Cyber-security</a></h4>
                <p className="description">Our unique approach to combining big data and cybersecurity sets us apart from the competition.</p>
              </div>
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
