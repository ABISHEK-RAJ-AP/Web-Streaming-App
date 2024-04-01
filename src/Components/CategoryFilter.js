import React from 'react';
const CategoryFilter = ({ setFilterCategory }) => {
  return (
    <div className="category-filter">
      <button onClick={() => setFilterCategory('All')}>All</button>
      <button onClick={() => setFilterCategory('Gaming')}>Gaming</button>
      <button onClick={() => setFilterCategory('Music')}>Music</button>
      <button onClick={() => setFilterCategory('Tech')}>Tech</button>
    </div>
  );
};

export default CategoryFilter;
