import Breadcrumbs from '@/components/Breadcrumbs';

export default function StartupsPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="Incubated Startups"
        backgroundImage="/assets/img/kadict/MG_9481-scaled.jpg"
      />

      {/* ======= Team Section ======= */}
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Major Startups Incubated by KAD ICT Hub</h2>
          </div>

          <div className="row gy-4">

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member">
                <div className="member-img">
                  <a href="https://cyberaim.ng/"><img src="/assets/img/team/Orange Modern Letter A Icon Design Template  Logo .png" className="img-fluid" alt="" /></a>
                  <div className="social">
                    <a href="https://www.facebook.com/yaqubjae.ishaq/"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/cyberaimtech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/cyber-aim-tech/"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <a href="https://cyberaim.ng/"><h4>Cyber-aim Tech</h4></a>
                  <span>IOT & Software startup accellerated by KAD ICT hub.</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member">
                <div className="member-img">
                  <img src="/assets/img/team/WhatsApp Image 2024-10-06 at 12.56.07 PM.jpeg" className="img-fluid" alt="" />
                  <div className="social">
                    <a href="https://www.instagram.com/sunstreamtech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="bi bi-instagram"></i></a>
                    <a href="https://x.com/SunstreamTech"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sunstream Tech</h4>
                  <span>Drone production startup incubated by KAD ICT hub.</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team-member">
                <div className="member-img">
                  <a href="https://rasproject.ng/"><img src="/assets/img/team/Reflex Agritech Logo.png" className="img-fluid" alt="" /></a>
                  <div className="social">
                    <a href="https://www.instagram.com/sunstreamtech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="bi bi-instagram"></i></a>
                    <a href="https://x.com/SunstreamTech"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <a href="https://rasproject.ng/"><h4>Reflex Agritech Solutions</h4></a>
                  <span>Farmer support community incubated by KAD ICT Hub.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
