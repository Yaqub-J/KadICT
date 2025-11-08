'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getServiceBySlug } from '../serviceData';
import { use } from 'react';

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main id="main">
      <Breadcrumbs
        title={service.title}
        backgroundImage="/assets/img/kadict/hero11.jpg"
      />

      {/* Service Overview Section */}
      <section id="service-details" className="service-details">
        <div className="container" data-aos="fade-up">

          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="service-content">
                <div className="service-icon-title mb-4">
                  <i className={`bi ${service.icon}`} style={{ fontSize: '48px', color: service.iconColor, marginRight: '20px' }}></i>
                  <h2 style={{ display: 'inline-block', verticalAlign: 'middle' }}>{service.title}</h2>
                </div>

                <h3>Overview</h3>
                <p>{service.overview}</p>

                <h3 className="mt-4">Key Features</h3>
                <ul className="feature-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle" style={{ color: service.iconColor, marginRight: '10px' }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-4">Benefits</h3>
                <ul className="benefit-list">
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>
                      <i className="bi bi-arrow-right-circle" style={{ color: service.iconColor, marginRight: '10px' }}></i>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {service.demoContent && service.demoContent.length > 0 && (
                  <>
                    <h3 className="mt-4">Demo / Showcase</h3>
                    <div className="demo-section">
                      {service.demoContent.map((demo, index) => (
                        <div key={index} className="demo-item mb-3">
                          {demo.type === 'link' && (
                            <div className="demo-link-card">
                              <a href={demo.src} target="_blank" rel="noopener noreferrer" className="demo-link">
                                <i className="bi bi-box-arrow-up-right" style={{ marginRight: '10px' }}></i>
                                View Demo: {demo.caption}
                              </a>
                            </div>
                          )}
                          {demo.type === 'image' && (
                            <div className="demo-image">
                              <img src={demo.src} alt={demo.caption || 'Demo'} className="img-fluid rounded" />
                              {demo.caption && <p className="mt-2 text-muted">{demo.caption}</p>}
                            </div>
                          )}
                          {demo.type === 'video' && (
                            <div className="demo-video">
                              <video controls className="w-100 rounded">
                                <source src={demo.src} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                              {demo.caption && <p className="mt-2 text-muted">{demo.caption}</p>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-box">
                  <h4>Get Started</h4>
                  <p>Ready to leverage our {service.title} services? Get in touch with us today!</p>
                  <Link href="/contact" className="btn btn-primary w-100 mb-2">
                    <i className="bi bi-envelope" style={{ marginRight: '8px' }}></i>
                    Contact Us
                  </Link>
                  <Link href="/register" className="btn btn-secondary w-100">
                    <i className="bi bi-person-plus" style={{ marginRight: '8px' }}></i>
                    Register Now
                  </Link>
                </div>

                <div className="sidebar-box mt-4">
                  <h4>All Services</h4>
                  <ul className="service-links">
                    <li><Link href="/services/erp-systems"><i className="bi bi-briefcase"></i> ERP Systems</Link></li>
                    <li><Link href="/services/training"><i className="bi bi-mortarboard"></i> Training</Link></li>
                    <li><Link href="/services/software-testing"><i className="bi bi-pc-display-horizontal"></i> Software Testing</Link></li>
                    <li><Link href="/services/blockchain-lab"><i className="bi bi-currency-bitcoin"></i> Blockchain Lab</Link></li>
                    <li><Link href="/services/incubation-acceleration"><i className="bi bi-reception-4"></i> Incubation & Acceleration</Link></li>
                    <li><Link href="/services/big-data-cybersecurity"><i className="bi bi-file-lock2"></i> Big Data & Cyber-security</Link></li>
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
