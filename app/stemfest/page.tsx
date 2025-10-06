import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function StemfestPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="STEM and Creativity Festival"
        backgroundImage="/assets/img/kadict/MG_9100-scaled.jpg"
      />

      {/* ======= Blog Details Section ======= */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">

          <div className="row g-5">

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

              <article className="blog-details">

                <div className="post-img">
                  <img src="/assets/img/kadict/DSC_0590-2-scaled.jpg" alt="" className="img-fluid" />
                </div>

                <h2 className="title">STEM and Creativity Festival</h2>

                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link href="/blog-details">John Doe</Link></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link href="/blog-details"><time dateTime="2020-01-01">Jan 1, 2022</time></Link></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link href="/blog-details">12 Comments</Link></li>
                  </ul>
                </div>

                <div className="content">
                  <p>
                    STEM and Creativity Festival is an annual event that exposes young people to Science, Technology, Engineering, Mathematics and Creative arts. The Festival provides a platform for leading scientist & creative artists both local and inernational to engage with the youth, inspire them to embark on careers in science or the creative arts and become leaders in these fields.
                  </p>

                  <p>
                    It also identifies and designs unique interactive events and educational resources with sciencetific integrity to advance science and creativity as well as faciliate learning in an informal way. This provides learners with an oppurtunity for discovery outside the classrooms.
                  </p>

                  <blockquote>
                    <p>
                      The event is inspired by Scifest South Africa and the USA Science & Engineering Festival
                    </p>
                  </blockquote>

                  <p>
                    The event is inspired by Scifest South Africa and the USA Science & Engineering Festival, two of the largest interactive science festivals for students, teachers and families in the world. With the continued support from the Kaduna State Government and other sponsors, the festival makes learning accessible to the public, encouraging parents and schools from around the country to bring learners to the event.
                  </p>

                </div>

                <div className="meta-bottom">
                  <i className="bi bi-folder"></i>
                  <ul className="cats">
                    <li><a href="#">Business</a></li>
                  </ul>

                  <i className="bi bi-tags"></i>
                  <ul className="tags">
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Tips</a></li>
                    <li><a href="#">Marketing</a></li>
                  </ul>
                </div>

              </article>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
