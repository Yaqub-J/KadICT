'use client';

import Breadcrumbs from '@/components/Breadcrumbs';

export default function ContactPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="Contact"
        backgroundImage="/assets/img/kadict/hero10.jpg"
      />

      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container position-relative" data-aos="fade-up">

          <div className="row gy-4 d-flex justify-content-end">

            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">

              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>No. 47 Kanta Road,
                    by Independence way,
                    Kaduna State.</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@kadhub.ng</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+234 8035169089</p>
                </div>
              </div>

            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">

              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
