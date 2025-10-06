import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BlogPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="Blog"
        backgroundImage="/assets/img/kadict/hero3.jpg"
      />

      {/* ======= Blog Section ======= */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">

          <div className="row g-5">

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

              <div className="row gy-5 posts-list">

                <div className="col-lg-12">
                  <article className="d-flex flex-column">

                    <div className="post-img">
                      <img src="/assets/img/kadict/hero3.jpg" alt="" className="img-fluid" />
                    </div>

                    <h2 className="title">
                      <Link href="/blog-details">Blog Posts Coming Soon</Link>
                    </h2>

                    <div className="meta-top">
                      <ul>
                        <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <time dateTime="2024-01-01">Jan 1, 2024</time></li>
                      </ul>
                    </div>

                    <div className="content">
                      <p>
                        Stay tuned for upcoming blog posts about technology, innovation, and our programs at KAD ICT Hub.
                      </p>
                    </div>

                  </article>
                </div>

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
                    <li><a href="#">Technology <span>(0)</span></a></li>
                    <li><a href="#">Innovation <span>(0)</span></a></li>
                    <li><a href="#">Education <span>(0)</span></a></li>
                  </ul>
                </div>

                <div className="sidebar-item tags">
                  <h3 className="sidebar-title">Tags</h3>
                  <ul className="mt-3">
                    <li><a href="#">Tech</a></li>
                    <li><a href="#">Innovation</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Startups</a></li>
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
