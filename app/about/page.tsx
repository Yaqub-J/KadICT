import Breadcrumbs from '@/components/Breadcrumbs';

export default function AboutPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="About Us"
        backgroundImage="/assets/img/kadict/hero10.jpg"
      />

      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">

          <div className="row gy-4" data-aos="fade-up">
            <div className="col-lg-4">
              <img src="/assets/img/kadict/hero2.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8">
              <div className="content ps-lg-5">
                <h3>History of KAD ICT Hub</h3>
                <p>
                  The KAD ICT Hub is a premier innovation center dedicated to fostering technological advancements in Kaduna State.
                  Since its establishment, the hub has successfully trained over 15,000 local residents, equipping them with the skills
                  necessary to thrive in the digital age. As a leading outsourcing powerhouse, the KAD ICT Hub serves as a valuable resource
                  for both public and private sectors, offering expert tech solutions to meet their diverse needs.
                  Additionally, the hub functions as an incubation and acceleration hub, providing startups with the support and resources
                  required to grow and succeed.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======= Why Choose Us Section ======= */}
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">

          <div className="row g-0" data-aos="fade-up" data-aos-delay="200">

            <div className="col-xl-5 img-bg" style={{backgroundImage: "url('/assets/img/kadict/hero5.jpg')"}}></div>
            <div className="col-xl-7 slides position-relative">

              <div className="slides-1 swiper">
                <div className="swiper-wrapper">

                  <div className="swiper-slide">
                    <div className="item">
                      <h3 className="mb-3">Our Mission</h3>
                      <p>Our mission is to bridge the gap between cutting-edge technologies and local communities, fostering a culture of innovation and empowerment. By bringing together world-class innovations and expertise, we aim to drive economic growth, create sustainable jobs, and improve the quality of life for all.</p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="item">
                      <h3 className="mb-3">Our Vision</h3>
                      <p>Our vision is to become a leading hub for entrepreneurs, computer engineers, software developers, and IT professionals. We strive to create a vibrant and supportive environment where individuals can connect, collaborate, and thrive. By providing access to cutting-edge resources, mentorship, and networking opportunities, we aim to empower the next generation of tech innovators and drive the digital transformation of our region.</p>
                    </div>
                  </div>

                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
