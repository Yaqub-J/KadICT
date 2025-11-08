import Link from 'next/link';
import Image from 'next/image';
import WelcomePopup from '@/components/WelcomePopup';

export default function Home() {
  return (
    <>
      {/* Welcome Popup */}
      <WelcomePopup />

      {/* Hero Section */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="logo" data-aos="fade-up">
                <Link href="/" aria-label="KAD ICT Hub">
                  <Image
                  src="/assets/img/kadict/logo.png"
                  alt="KAD ICT Hub Logo"
                  width={250}
                  height={60}
                  className="img-fluid glow-effect"
                  priority
                  style={{
                    filter: 'drop-shadow(100px 100px 100px rgba(255, 255, 255, 1))'
                  }}
                  />
                </Link>
              </div>
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p>A world class innovation hub that from inception has trained more than 20,000 residents of Kaduna State. It is an outsourcing powerhouse from which the public and private sector can outsource their tech needs as well as an incubation/acceleration destination for startups.</p>
              </blockquote>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <Link href="/register" className="btn-get-started">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        {/* Why Choose Us Section */}
        <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>What We Do</h2>
            </div>

            <div className="row g-0" data-aos="fade-up" data-aos-delay="200">
              <div className="col-xl-5 img-bg" style={{ backgroundImage: "url('/assets/img/kadict/hero13.jpg')" }}></div>
              <div className="col-xl-7 slides position-relative">
                <div className="slides-1 swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item">
                        <h3 className="mb-3">Training Programs</h3>
                        <h4 className="mb-3">Learn from the Best, Master the Latest.</h4>
                        <p>Our team of certified instructors is dedicated to providing top-notch training on the latest and most in-demand technologies. With their expertise and passion for teaching, they deliver engaging and informative courses that equip learners with the skills they need to excel in today&apos;s competitive tech landscape.</p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="item">
                        <h3 className="mb-3">Software Developement</h3>
                        <h4 className="mb-3">Crafting Tomorrow&apos;s Tech Solutions, Today.</h4>
                        <p>Our software development team specializes in creating innovative and tailored solutions to address the unique needs of government agencies, private organizations, and individuals. By leveraging cutting-edge technologies and industry best practices, we deliver high-quality software that drives efficiency, improves operations, and solves complex challenges.</p>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="item">
                        <h3 className="mb-3">Consultancy</h3>
                        <h4 className="mb-3">Your Trusted Partners for Growth and Success.</h4>
                        <p>Our experienced consultants offer expert guidance and advice across a wide range of domains, including management, information technology, and more. With a deep understanding of industry trends and best practices, we help organizations identify opportunities, optimize processes, and achieve their strategic goals.</p>
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

        {/* Our Services Section */}
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Services</h2>
            </div>

            <div className="row gy-4">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <Link href="/services/erp-systems" className="service-card-link">
                  <div className="service-card">
                    <i className="bi bi-briefcase service-card-icon" style={{ color: '#f57813' }}></i>
                    <h4>ERP Systems</h4>
                    <p>Our team of experts specializes in the development, design, and deployment of Enterprise Resource Planning (ERP) systems.</p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <Link href="/services/training" className="service-card-link">
                  <div className="service-card">
                    <i className="bi bi-mortarboard service-card-icon" style={{ color: '#15a04a' }}></i>
                    <h4>Training</h4>
                    <p>Our team of certified instructors is dedicated to providing top-notch training on the latest and most in-demand technologies.</p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <Link href="/services/software-testing" className="service-card-link">
                  <div className="service-card">
                    <i className="bi bi-pc-display-horizontal service-card-icon" style={{ color: '#d90769' }}></i>
                    <h4>Software Testing</h4>
                    <p>Our software testing services are second to none. We offer comprehensive and reliable testing solutions that ensure the quality and performance of your digital products.</p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <Link href="/services/blockchain-lab" className="service-card-link">
                  <div className="service-card">
                    <i className="bi bi-currency-bitcoin service-card-icon" style={{ color: '#15bfbc' }}></i>
                    <h4>Blockchain Lab</h4>
                    <p>The Africa Blockchain Lab, a groundbreaking initiative in partnership with Satoshi Capital Advisors, is the continent&apos;s premier destination for blockchain research, development, and innovation.</p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <Link href="/services/incubation-acceleration" className="service-card-link">
                  <div className="service-card">
                    <i className="bi bi-reception-4 service-card-icon" style={{ color: '#f5cf13' }}></i>
                    <h4>Incubation & Acceleration</h4>
                    <p>Our incubation and acceleration programs offer a comprehensive range of services, including mentorship, funding opportunities, workspace, and access to industry experts.</p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <Link href="/services/big-data-cybersecurity" className="service-card-link">
                  <div className="service-card">
                    <i className="bi bi-file-lock2 service-card-icon" style={{ color: '#1335f5' }}></i>
                    <h4>Big Data & Cyber-security</h4>
                    <p>Our unique approach to combining big data and cybersecurity sets us apart from the competition.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h3>Kaduna State Innovation Challenge</h3>
                <p>Are you ready to showcase your innovative ideas? Don&apos;t miss the Kaduna State Innovation Challenge, a state-wide competition that celebrates creativity and ingenuity. Compete against fellow innovators and stand a chance to win prestigious awards and substantial cash prizes. This is your opportunity to make a lasting impact on your community and beyond.</p>
                <Link className="cta-btn" href="/challenge">Learn More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                <h3>Startup Incubation <br />And Accelleration</h3>
                <p>The KAD ICT Hub is a dynamic innovation ecosystem that fosters growth and development for startups. Through strategic partnerships with local and international tertiary institutions, we have achieved significant milestones, including the generation of three patents and the development of innovative products for both domestic and global markets. Our incubation and acceleration programs provide startups with the necessary support and resources to succeed. In collaboration with the U.S. Embassy, we have successfully accelerated 55 women-led startups through the Academy for Women Entrepreneurs program, empowering them with grants and seed funding to fuel their entrepreneurial ventures.</p>
                <div className="row gy-4"></div>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <Image src="/assets/img/verticalnbg.png" alt="Startup Incubation" width={500} height={800} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="details">
            <div className="container" data-aos="fade-up" data-aos-delay="300">
              <div className="row">
                <div className="col-md-6">
                  <h4>Stem and Creativity <br />Festival</h4>
                  <p>The STEM and Creativity Festival is an annual celebration of innovation and learning. This exciting event provides young people with the opportunity to explore the fields of Science, Technology, Engineering, Mathematics, and Creative Arts. Through engaging activities, workshops, and competitions, participants are inspired to develop their problem-solving skills, critical thinking abilities, and creative expression.</p>
                  <Link href="/assets/img/STEM Festival 2024 Print final.pdf" className="btn-get-started">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Testimonials</h2>
            </div>

            <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>&quot;This is a rare opportunity, created by Kaduna State Government, that I encourage youths from within and outside the state&quot;</p>
                    <div className="profile mt-auto">
                      <Image src="/assets/img/testimonials/Pantami.jpeg" className="testimonial-img" alt="Prof. Ali Isa Pantami" width={90} height={90} />
                      <h3>Prof. Ali Isa Pantami</h3>
                      <h4><strong>Minister</strong><br />Ministry of Communication & Digital Economy</h4>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>&quot;We are glad to see brilliant young people endowed with creative and innovative talents from schools to come together to showcase their talents&quot;</p>
                    <div className="profile mt-auto">
                      <Image src="/assets/img/testimonials/balarabe.jpg" className="testimonial-img" alt="Dr. Hadiza Balarabe" width={90} height={90} />
                      <h3>Dr. Hadiza Balarabe</h3>
                      <h4><strong>Deputy Governor</strong><br />Kaduna State</h4>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>&quot;We are very greatful partnering with the KAD ICT HUB because they are doing amazingly very well as we have young people now doing great things from Kaduna State&quot;</p>
                    <div className="profile mt-auto">
                      <Image src="/assets/img/testimonials/mato.jpg" className="testimonial-img" alt="Hon. Prof. Kabir Mato" width={90} height={90} />
                      <h3>Hon. Prof. Kabir Mato</h3>
                      <h4><strong>Commissioner</strong><br />Ministry of Business, Innovation and Technology</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
