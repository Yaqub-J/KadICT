import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Kad55hackPage() {
  return (
    <main id="main">
      <Breadcrumbs
        title="Kaduna @ 55 Hackathon"
        backgroundImage="/assets/img/kadict/hero3.jpg"
      />

      {/* ======= Blog Details Section ======= */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">

          <div className="row g-5">

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

              <article className="blog-details">

                <div className="post-img">
                  <img src="/assets/img/kadict/WhatsApp-Image-2023-07-13-at-14.14.21.jpeg" alt="" className="img-fluid" />
                </div>

                <h2 className="title">Kaduna @55 Hackathon</h2>

                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <Link href="/blog-details">John Doe</Link></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <Link href="/blog-details"><time dateTime="2020-01-01">Jan 1, 2022</time></Link></li>
                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <Link href="/blog-details">12 Comments</Link></li>
                  </ul>
                </div>

                <div className="content">
                  <p>
                    Due to more than a half of the global population living in cities (a proportion that is expected to increase to two thirds by 2050) the quantity and quality of urban services made available to citizens by the local government – directly or through specific agencies and/or alliances with civil society – becomes of prominent importance.
                  </p>

                  <p>
                    Indeed, urban services deeply affect our lives by shaping and constraining the way we experience, and interact with, the city organization in its manifold aspects. Tradition-ally, this was related to the fulfillment of the basic needs of a decent life – from street cleaning to domestic water supply, from waste collection to sanitary sewer systems – issues that have been in the focus of city managers for thousands of years now.
                  </p>

                  <blockquote>
                    <p>
                      The Kaduna Innovation Challenge (HACKATHON) application form was designed on the KAD ICT HUB website, a total number of 70 teams registered and the best 10 ideas were selected from 10 teams across the country as follows:
                    </p>
                  </blockquote>

                </div>

              </article>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
