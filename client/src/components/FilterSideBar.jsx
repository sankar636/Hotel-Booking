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

    return (
        <div className="border p-4 w-64 rounded-md bg-white shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-sm">FILTERS</h2>
                <button onClick={clearFilters} className="text-xs text-blue-500 hover:underline">
                    CLEAR
                </button>
            </div>
            <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Popular filters</h3>
                {bedOptions.map((option) => (
                    <div key={option} className="flex items-center gap-2 mb-2">
                        <input
                            type="checkbox"
                            checked={filters.bedTypes.includes(option)}
                            onChange={() => handleCheckboxChange('bedTypes', option)}
                        />
                        <label className="text-sm">{option}</label>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Price</h3>
                {priceOptions.map((option) => (
                    <div key={option} className="flex items-center gap-2 mb-2">
                        <input
                            type="checkbox"
                            checked={filters.priceRanges.includes(option)}
                            onChange={() => handleCheckboxChange('priceRanges', option)}
                        />
                        <label className="text-sm">{option}</label>
                    </div>
                ))}
            </div>
            <div>
                <h3 className="text-sm font-medium mb-2">Sort By</h3>
                {sortOptions.map((option) => (
                    <div key={option} className="flex items-center gap-2 mb-2">
                        <input
                            type="checkbox"
                            checked={filters.sortBy === option}
                            onChange={() => handleSortChange(option)}
                        />
                        <label className="text-sm">{option}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterSidebar;
