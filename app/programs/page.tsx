'use client';

import { useState, useMemo } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CourseCard from '@/components/CourseCard';
import CourseFilters from '@/components/CourseFilters';
import { courses, CourseCategory, CourseLevel } from './courseData';

export default function ProgramsPage() {
  const [filters, setFilters] = useState<{
    search: string;
    category: CourseCategory | 'all';
    level: CourseLevel | 'all';
    sortBy: 'popular' | 'newest' | 'price-low' | 'price-high' | 'rating';
  }>({
    search: '',
    category: 'all',
    level: 'all',
    sortBy: 'popular'
  });

  // Filter and sort courses based on current filters
  const filteredAndSortedCourses = useMemo(() => {
    let filtered = [...courses];

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchLower) ||
          course.description.toLowerCase().includes(searchLower) ||
          course.overview.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter((course) => course.category === filters.category);
    }

    // Apply level filter
    if (filters.level !== 'all') {
      filtered = filtered.filter((course) => course.level === filters.level);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled);
        break;
      case 'newest':
        // Assuming courses array is already in order from newest to oldest
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    return filtered;
  }, [filters]);

  return (
    <main id="main">
      <Breadcrumbs
        title="Our Programs & Courses"
        backgroundImage="/assets/img/kadict/hero5.jpg"
      />

      {/* ======= Courses Section ======= */}
      <section id="courses" className="courses">
        <div className="container" data-aos="fade-up">
          {/* Section Header */}
          <div className="section-header">
            <h2>Browse Our Courses</h2>
            <p>
              Explore our comprehensive range of technology courses designed to equip you
              with the skills needed to excel in today&apos;s digital world. From beginner-friendly
              introductions to advanced specializations, we have something for everyone.
            </p>
          </div>

          {/* Course Filters */}
          {/* <CourseFilters onFilterChange={setFilters} /> */}

          {/* Course Results */}
          {/* <div className="row mb-4">
            <div className="col-12">
              <div className="course-results-info">
                <p>
                  Showing <strong>{filteredAndSortedCourses.length}</strong> of{' '}
                  <strong>{courses.length}</strong> courses
                </p>
              </div>
            </div>
          </div> */}

          {/* Course Grid */}
          {filteredAndSortedCourses.length > 0 ? (
            <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
              {filteredAndSortedCourses.map((course) => (
                <div key={course.slug} className="col-lg-4 col-md-6">
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results" data-aos="fade-up">
              <div className="no-results-content">
                <i className="bi bi-search"></i>
                <h3>No courses found</h3>
                <p>
                  We couldn&apos;t find any courses matching your filters. Try adjusting your
                  search criteria or reset the filters to see all courses.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
