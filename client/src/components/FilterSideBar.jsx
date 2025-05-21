import React, { useState } from 'react';

const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    bedTypes: [],
    priceRanges: [],
    sortBy: '',
  });

  const bedOptions = ['Single Bed', 'Family Suite', 'Double Bed', 'Luxury Room'];
  const priceOptions = ['₹2500 to ₹5000', '₹5000 to ₹8000', '₹8000 to ₹15000'];
  const sortOptions = ['Price Low to High', 'Price High to Low', 'Newest First'];

  const handleCheckboxChange = (section, value) => {
    setFilters((prev) => {
      const currentValues = prev[section];
      return {
        ...prev,
        [section]: currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  const handleSortChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: prev.sortBy === value ? '' : value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      bedTypes: [],
      priceRanges: [],
      sortBy: '',
    });
  };

  const renderCheckboxOption = (option, isChecked, onClick) => (
    <label
      key={option}
      className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition text-sm ${
        isChecked ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onClick}
        className="accent-blue-600"
      />
      {option}
    </label>
  );

  const renderRadioOption = (option, isChecked, onClick) => (
    <label
      key={option}
      className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition text-sm ${
        isChecked ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      <input
        type="radio"
        name="sortBy"
        checked={isChecked}
        onChange={onClick}
        className="accent-blue-600"
      />
      {option}
    </label>
  );

  return (
    <div className="border p-5 w-full max-w-sm rounded-xl bg-white shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-lg text-gray-800">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-500 hover:underline"
        >
          Clear
        </button>
      </div>

      {/* Bed Types */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-3 text-gray-700">Popular Filters</h3>
        <div className="flex flex-col gap-1">
          {bedOptions.map((option) =>
            renderCheckboxOption(option, filters.bedTypes.includes(option), () =>
              handleCheckboxChange('bedTypes', option)
            )
          )}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-3 text-gray-700">Price Range</h3>
        <div className="flex flex-col gap-1">
          {priceOptions.map((option) =>
            renderCheckboxOption(option, filters.priceRanges.includes(option), () =>
              handleCheckboxChange('priceRanges', option)
            )
          )}
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="text-md font-semibold mb-3 text-gray-700">Sort By</h3>
        <div className="flex flex-col gap-1">
          {sortOptions.map((option) =>
            renderRadioOption(option, filters.sortBy === option, () =>
              handleSortChange(option)
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
