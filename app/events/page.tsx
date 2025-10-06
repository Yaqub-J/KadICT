import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function EventsPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="Events"
        backgroundImage="/assets/img/kadict/MG_9343-scaled.jpg"
      />

      {/* ======= Blog Section ======= */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">

          <div className="row g-5">

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

              <div className="row gy-5 posts-list">

                <div className="col-lg-6">
                  <article className="d-flex flex-column">

                    <div className="post-img">
                      <img src="/assets/img/kadict/WhatsApp-Image-2023-07-13-at-14.14.21.jpeg" alt="" className="img-fluid" />
                    </div>

                    <h2 className="title">
                      <Link href="/kad55hack">Kaduna @55 Hackathon</Link>
                    </h2>

                    <div className="meta-top">
                      <ul>
                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link href="/kad55hack"><time dateTime="2022-05-05">May 5, 2022</time></Link></li>
                      </ul>
                    </div>

                    <div className="content">
                      <p>
                        The Kaduna Innovation Challenge (HACKATHON) application form was designed on the KAD ICT HUB website, a total number of 70 teams registered and the best 10 ideas were selected from 10 teams across the country.
                      </p>
                    </div>

                    <div className="read-more mt-auto align-self-end">
                      <Link href="/kad55hack">Read More <i className="bi bi-arrow-right"></i></Link>
                    </div>

                  </article>
                </div>

                <div className="col-lg-6">
                  <article className="d-flex flex-column">

                    <div className="post-img">
                      <img src="/assets/img/kadict/DSC_0590-2-scaled.jpg" alt="" className="img-fluid" />
                    </div>

                    <h2 className="title">
                      <Link href="/stemfest">STEM and Creativity Festival</Link>
                    </h2>

                    <div className="meta-top">
                      <ul>
                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link href="/stemfest"><time dateTime="2023-01-01">Jan 1, 2023</time></Link></li>
                      </ul>
                    </div>

                    <div className="content">
                      <p>
                        STEM and Creativity Festival is an annual event that exposes young people to Science, Technology, Engineering, Mathematics and Creative arts. The Festival provides a platform for leading scientist & creative artists both local and inernational to engage with the youth, inspire them to embark on careers in science or the creative arts and become leaders in these fields.
                      </p>
                    </div>

                    <div className="read-more mt-auto align-self-end">
                      <Link href="/stemfest">Read More <i className="bi bi-arrow-right"></i></Link>
                    </div>

                  </article>
                </div>

              </div>

              <div className="blog-pagination">
                <ul className="justify-content-center">
                  <li><a href="#">1</a></li>
                  <li className="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                </ul>
              </div>

            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">

              <div className="sidebar ps-lg-4">

                <div className="sidebar-item search-form">
                  <h3 className="sidebar-title">Search</h3>
                  <form action="" className="mt-3">
                    <input type="text" />
                    <button type="submit"><i className="bi bi-search"></i></button>
                  </form>
                </div>

                <div className="sidebar-item categories">
                  <h3 className="sidebar-title">Categories</h3>
                  <ul className="mt-3">
                    <li><a href="#">General <span>(2)</span></a></li>
                    <li><a href="#">Creative <span>(1)</span></a></li>
                    <li><a href="#">Educaion <span>(1)</span></a></li>
                  </ul>
                </div>

                <div className="sidebar-item recent-posts">
                  <h3 className="sidebar-title">Recent Posts</h3>

                  <div className="mt-3">

                    <div className="post-item mt-3">
                      <img src="/assets/img/kadict/WhatsApp-Image-2023-07-13-at-14.14.21.jpeg" alt="" className="flex-shrink-0" />
                      <div>
                        <h4><Link href="/kad55hack">Kaduna @55 Hackathon</Link></h4>
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </div>
                    </div>

                    <div className="post-item">
                      <img src="/assets/img/kadict/DSC_0590-2-scaled.jpg" alt="" className="flex-shrink-0" />
                      <div>
                        <h4><Link href="/stemfest">STEM and Creativity Festival</Link></h4>
                        <time dateTime="2020-01-01">Jan 1, 2020</time>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="sidebar-item tags">
                  <h3 className="sidebar-title">Tags</h3>
                  <ul className="mt-3">
                    <li><a href="#">App</a></li>
                    <li><a href="#">IT</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Office</a></li>
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Smart</a></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
