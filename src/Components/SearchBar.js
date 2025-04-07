import React, { useState } from 'react';  // Importing useState hook

const SearchBar = () => {
  // Declare the state variable above the return statement
  const [location, setLocation] = useState('');

  // Function to handle the search when the button is clicked
  const handleSearch = () => {
    console.log('Searching for:', location);  // Log the search location to console
    // You could trigger an API call here to fetch weather data, for example
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for your location"
        value={location}  // Bind input to state
        onChange={(e) => setLocation(e.target.value)}  // Update state on change
      />
      <button onClick={handleSearch}>Search</button>  {/* Search button */}
      <h3>Search for your location</h3>
    </div>
  );
};

export default SearchBar;
// This component is a simple search bar that allows users to input a location and search for weather data.
// It uses the useState hook to manage the input value and a button to trigger the search action.