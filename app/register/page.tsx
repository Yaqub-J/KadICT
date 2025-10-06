import Breadcrumbs from '@/components/Breadcrumbs';

export default function RegisterPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="Register"
        backgroundImage="/assets/img/kadict/hero10.jpg"
      />

      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container position-relative" data-aos="fade-up">

          <div className="row gy-4 d-flex justify-content-center">

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
              <div className="container" id="ff-compose"></div>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc013bOG-U1eOXkUGfvDtB5bkWJjrZ0P1CkrK7dgt5Q05m8Bw/viewform?embedded=true" width="640" height="1600" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
