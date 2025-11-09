'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCourseBySlug } from '../courseData';
import { useState, use, useEffect } from 'react';

interface CourseDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview');
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const [showFlyerPopup, setShowFlyerPopup] = useState(false);

  const { slug } = use(params);
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Show popup when course page loads
  useEffect(() => {
    if (course.flyer) {
      const timer = setTimeout(() => {
        setShowFlyerPopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [course.flyer]);

  // Toggle module expansion
  const toggleModule = (index: number) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter((i) => i !== index));
    } else {
      setExpandedModules([...expandedModules, index]);
    }
  };

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bi bi-star-fill"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="bi bi-star-half"></i>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>);
    }
    return stars;
  };

  return (
    <main id="main">
      <Breadcrumbs
        title={course.title}
        backgroundImage="/assets/img/kadict/hero5.jpg"
      />

      {/* ======= Course Detail Section ======= */}
      <section id="course-detail" className="course-detail">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Course Header */}
              <div className="course-header">
                <div className="course-header-icon" style={{ backgroundColor: course.iconColor }}>
                  <i className={`bi ${course.icon}`}></i>
                </div>
                <div className="course-header-info">
                  <div className="course-badges-inline">
                    <span className="badge badge-category">{course.category}</span>
                    <span className="badge badge-level">{course.level}</span>
                  </div>
                  <h1>{course.title}</h1>
                  <p className="course-tagline">{course.description}</p>
                  <div className="course-meta-inline">
                    <div className="meta-item">
                      <i className="bi bi-star-fill" style={{ color: '#ffc107' }}></i>
                      <span>{course.rating} ({course.reviewCount} reviews)</span>
                    </div>
                    <div className="meta-item">
                      <i className="bi bi-people"></i>
                      <span>{course.studentsEnrolled.toLocaleString()} students</span>
                    </div>
                    <div className="meta-item">
                      <i className="bi bi-clock"></i>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Tabs */}
              <div className="course-tabs">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Overview
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'curriculum' ? 'active' : ''}`}
                      onClick={() => setActiveTab('curriculum')}
                    >
                      Curriculum
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'instructor' ? 'active' : ''}`}
                      onClick={() => setActiveTab('instructor')}
                    >
                      Instructor
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                      onClick={() => setActiveTab('reviews')}
                    >
                      Reviews ({course.reviewCount})
                    </button>
                  </li>
                </ul>

                <div className="tab-content">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div className="tab-pane active">
                      <div className="course-overview">
                        <h3>About This Course</h3>
                        <p>{course.overview}</p>

                        <h4>What You&apos;ll Learn</h4>
                        <div className="learning-outcomes">
                          {course.learningOutcomes.map((outcome, index) => (
                            <div key={index} className="outcome-item">
                              <i className="bi bi-check-circle-fill"></i>
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>

                        <h4>Prerequisites</h4>
                        <div className="prerequisites">
                          {course.prerequisites.map((prereq, index) => (
                            <div key={index} className="prereq-item">
                              <i className="bi bi-arrow-right-circle"></i>
                              <span>{prereq}</span>
                            </div>
                          ))}
                        </div>

                        <h4>This Course Includes</h4>
                        <div className="course-includes">
                          {course.includes.map((item, index) => (
                            <div key={index} className="include-item">
                              <i className="bi bi-check2"></i>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Curriculum Tab */}
                  {activeTab === 'curriculum' && (
                    <div className="tab-pane active">
                      <div className="course-curriculum">
                        <h3>Course Curriculum</h3>
                        <p className="curriculum-info">
                          {course.curriculum.length} modules • {course.curriculum.reduce((total, module) => total + module.lessons.length, 0)} lessons • {course.duration}
                        </p>

                        <div className="modules-list">
                          {course.curriculum.map((module, index) => (
                            <div key={index} className="module-item">
                              <div
                                className="module-header"
                                onClick={() => toggleModule(index)}
                              >
                                <div className="module-info">
                                  <h5>
                                    <i className={`bi ${expandedModules.includes(index) ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i>
                                    Module {index + 1}: {module.title}
                                  </h5>
                                  <p>{module.lessons.length} lessons • {module.duration}</p>
                                </div>
                              </div>
                              {expandedModules.includes(index) && (
                                <div className="lessons-list">
                                  {module.lessons.map((lesson, lessonIndex) => (
                                    <div key={lessonIndex} className="lesson-item">
                                      <div className="lesson-info">
                                        <i className={`bi ${lesson.type === 'video' ? 'bi-play-circle' : lesson.type === 'quiz' ? 'bi-question-circle' : 'bi-file-text'}`}></i>
                                        <span>{lesson.title}</span>
                                      </div>
                                      <div className="lesson-meta">
                                        <span className="lesson-duration">{lesson.duration}</span>
                                        {lesson.isPreview && (
                                          <span className="lesson-preview">Preview</span>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Instructor Tab */}
                  {activeTab === 'instructor' && (
                    <div className="tab-pane active">
                      <div className="instructor-section">
                        <h3>Your Instructor</h3>
                        <div className="instructor-card">
                          <div className="instructor-avatar">
                            {course.instructor.avatar ? (
                              <img src={course.instructor.avatar} alt={course.instructor.name} />
                            ) : (
                              <div className="avatar-placeholder">
                                <i className="bi bi-person-circle"></i>
                              </div>
                            )}
                          </div>
                          <div className="instructor-info">
                            <h4>{course.instructor.name}</h4>
                            <p className="instructor-title">{course.instructor.title}</p>
                            <p className="instructor-bio">{course.instructor.bio}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Reviews Tab */}
                  {activeTab === 'reviews' && (
                    <div className="tab-pane active">
                      <div className="reviews-section">
                        <h3>Student Reviews</h3>
                        <div className="reviews-summary">
                          <div className="rating-overview">
                            <div className="rating-number">{course.rating}</div>
                            <div className="rating-stars" style={{ color: '#ffc107' }}>
                              {renderStars(course.rating)}
                            </div>
                            <div className="rating-count">{course.reviewCount} reviews</div>
                          </div>
                        </div>

                        <div className="reviews-list">
                          {course.reviews.map((review, index) => (
                            <div key={index} className="review-item">
                              <div className="review-header">
                                <div className="reviewer-info">
                                  <div className="reviewer-avatar">
                                    {review.avatar ? (
                                      <img src={review.avatar} alt={review.name} />
                                    ) : (
                                      <i className="bi bi-person-circle"></i>
                                    )}
                                  </div>
                                  <div>
                                    <h5>{review.name}</h5>
                                    <div className="review-stars" style={{ color: '#ffc107' }}>
                                      {renderStars(review.rating)}
                                    </div>
                                  </div>
                                </div>
                                <div className="review-date">{review.date}</div>
                              </div>
                              <p className="review-comment">{review.comment}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="course-sidebar">
                {/* Enrollment Card */}
                <div className="enrollment-card">
                  <button className="btn-enroll">
                    <i className="bi bi-bookmark-check"></i>
                    Enroll Now
                  </button>

                  <Link href="/programs" className="btn-back">
                    <i className="bi bi-arrow-left"></i>
                    Back to Courses
                  </Link>

                  <div className="enrollment-features">
                    <h5>This course includes:</h5>
                    <ul>
                      {course.includes.slice(0, 6).map((item, index) => (
                        <li key={index}>
                          <i className="bi bi-check-circle"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Course Flyer */}
                {course.flyer && (
                  <div className="course-flyer-card">
                    <img src={course.flyer} alt={`${course.title} Flyer`} className="img-fluid" />
                  </div>
                )}

                {/* Course Info Card */}
                <div className="course-info-card">
                  <h5>Course Information</h5>
                  <div className="info-item">
                    <i className="bi bi-bar-chart"></i>
                    <div>
                      <span className="label">Level</span>
                      <span className="value">{course.level.charAt(0).toUpperCase() + course.level.slice(1)}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="bi bi-clock"></i>
                    <div>
                      <span className="label">Duration</span>
                      <span className="value">{course.duration}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="bi bi-people"></i>
                    <div>
                      <span className="label">Students</span>
                      <span className="value">{course.studentsEnrolled.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="bi bi-grid"></i>
                    <div>
                      <span className="label">Category</span>
                      <span className="value">{course.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Flyer Popup */}
      {showFlyerPopup && course.flyer && (
        <div className="course-flyer-popup-overlay" onClick={() => setShowFlyerPopup(false)}>
          <div className="course-flyer-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={() => setShowFlyerPopup(false)}>
              <i className="bi bi-x-lg"></i>
            </button>
            <img src={course.flyer} alt={`${course.title} Flyer`} className="img-fluid" />
          </div>
        </div>
      )}
    </main>
  );
}
