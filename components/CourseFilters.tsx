'use client';

import { useState } from 'react';
import { CourseCategory, CourseLevel } from '@/app/programs/courseData';

interface CourseFiltersProps {
  onFilterChange: (filters: {
    search: string;
    category: CourseCategory | 'all';
    level: CourseLevel | 'all';
    sortBy: 'popular' | 'newest' | 'price-low' | 'price-high' | 'rating';
  }) => void;
}

export default function CourseFilters({ onFilterChange }: CourseFiltersProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CourseCategory | 'all'>('all');
  const [level, setLevel] = useState<CourseLevel | 'all'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'price-low' | 'price-high' | 'rating'>('popular');

  const categories: (CourseCategory | 'all')[] = [
    'all',
    'Development',
    'Design',
    'Security',
    'Data',
    'Hardware',
    'Business'
  ];

  const levels: (CourseLevel | 'all')[] = ['all', 'beginner', 'intermediate', 'advanced'];

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onFilterChange({ search: value, category, level, sortBy });
  };

  const handleCategoryChange = (value: CourseCategory | 'all') => {
    setCategory(value);
    onFilterChange({ search, category: value, level, sortBy });
  };

  const handleLevelChange = (value: CourseLevel | 'all') => {
    setLevel(value);
    onFilterChange({ search, category, level: value, sortBy });
  };

  const handleSortChange = (value: 'popular' | 'newest' | 'price-low' | 'price-high' | 'rating') => {
    setSortBy(value);
    onFilterChange({ search, category, level, sortBy: value });
  };

  const handleReset = () => {
    setSearch('');
    setCategory('all');
    setLevel('all');
    setSortBy('popular');
    onFilterChange({ search: '', category: 'all', level: 'all', sortBy: 'popular' });
  };

  return (
    <div className="course-filters">
      <div className="container">
        <div className="row g-4">
          {/* Search Bar */}
          <div className="col-lg-4 col-md-6">
            <div className="filter-group">
              <label className="filter-label">
                <i className="bi bi-search"></i> Search Courses
              </label>
              <input
                type="text"
                className="filter-input"
                placeholder="Search by course name or keyword..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="col-lg-2 col-md-6">
            <div className="filter-group">
              <label className="filter-label">
                <i className="bi bi-grid"></i> Category
              </label>
              <select
                className="filter-select"
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value as CourseCategory | 'all')}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Level Filter */}
          <div className="col-lg-2 col-md-6">
            <div className="filter-group">
              <label className="filter-label">
                <i className="bi bi-bar-chart"></i> Level
              </label>
              <select
                className="filter-select"
                value={level}
                onChange={(e) => handleLevelChange(e.target.value as CourseLevel | 'all')}
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl === 'all' ? 'All Levels' : lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort By */}
          <div className="col-lg-2 col-md-6">
            <div className="filter-group">
              <label className="filter-label">
                <i className="bi bi-sort-down"></i> Sort By
              </label>
              <select
                className="filter-select"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as 'popular' | 'newest' | 'price-low' | 'price-high' | 'rating')}
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Reset Button */}
          <div className="col-lg-2 col-md-6">
            <div className="filter-group">
              <label className="filter-label" style={{ opacity: 0 }}>Reset</label>
              <button className="filter-reset-btn" onClick={handleReset}>
                <i className="bi bi-arrow-counterclockwise"></i> Reset Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
