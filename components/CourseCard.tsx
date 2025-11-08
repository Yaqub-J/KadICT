'use client';

import Link from 'next/link';
import { Course } from '@/app/programs/courseData';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  // Generate star rating display
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

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Data & Analytics': '#0dcaf0',
      'Digital Skills': '#198754',
      'Design & Creative': '#d63384',
      'Security': '#dc3545',
      'Internship': '#6f42c1',
      'Infrastructure': '#fd7e14',
      'Development': '#0d6efd',
      'Hardware': '#6c757d'
    };
    return colors[category] || '#6c7bc4';
  };

  // Get level color
  const getLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      'beginner': '#198754',
      'intermediate': '#ffc107',
      'advanced': '#dc3545'
    };
    return colors[level] || '#6c757d';
  };

  return (
    <div className="course-card">
      <Link href={`/programs/${course.slug}`} className="course-card-link">
        <div className="course-card-header">
          <div className="course-icon" style={{ backgroundColor: course.iconColor }}>
            <i className={`bi ${course.icon}`}></i>
          </div>
          <div className="course-badges">
            <span
              className="course-category-badge"
              style={{ backgroundColor: getCategoryColor(course.category) }}
            >
              {course.category}
            </span>
            <span
              className="course-level-badge"
              style={{ backgroundColor: getLevelColor(course.level) }}
            >
              {course.level}
            </span>
          </div>
        </div>

        <div className="course-card-body">
          <h4 className="course-title">{course.title}</h4>
          <p className="course-description">{course.description}</p>

          <div className="course-meta">
            <div className="course-meta-item">
              <i className="bi bi-clock"></i>
              <span>{course.duration}</span>
            </div>
            <div className="course-meta-item">
              <i className="bi bi-people"></i>
              <span>{course.studentsEnrolled.toLocaleString()} students</span>
            </div>
          </div>

          <div className="course-rating">
            <div className="stars" style={{ color: '#ffc107' }}>
              {renderStars(course.rating)}
            </div>
            <span className="rating-text">
              {course.rating} ({course.reviewCount} reviews)
            </span>
          </div>
        </div>

        <div className="course-card-footer">
          <div className="course-price">
            {course.price === 0 ? (
              <span className="price-free">Free</span>
            ) : (
              <>
                <span className="price-currency">₦</span>
                <span className="price-amount">{course.price.toLocaleString()}</span>
              </>
            )}
          </div>
          <div className="course-instructor">
            <i className="bi bi-person-circle"></i>
            <span>{course.instructor.name}</span>
          </div>
        </div>

        <div className="course-enroll-btn">
          <span>Enroll Now</span>
          <i className="bi bi-arrow-right"></i>
        </div>
      </Link>
    </div>
  );
}
