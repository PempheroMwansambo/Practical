document.addEventListener("DOMContentLoaded", () => {
  const facilityForm = document.getElementById("facility-form");
  const facilityList = document.getElementById("facility-list");
  const searchInput = document.getElementById("search-input");
  const filterSelect = document.getElementById("filter-select");

  facilityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user input
    const facilityName = document.getElementById("facility-name").value;
    document
      .getElementById("searchButton")
      .addEventListener("click", function () {
        // Get the user's search input
        var searchInput = document.getElementById("searchInput").value;

        // Construct the API request URL
        var apiUrl =
          "https://zipatala.health.gov.mw/api/facilities" + searchInput;

        // Make an API request (you can use the Fetch API or jQuery's $.ajax)
        fetch(apiUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // Process the API response and display the results
            displaySearchResults(data);
          })
          .catch(function (error) {
            console.error("API request error: " + error);
          });
      });

    function displaySearchResults(results) {
      var resultsContainer = document.getElementById("searchResults");
      resultsContainer.innerHTML = ""; // Clear previous results

      // Iterate through the API results and display them on your website
      results.forEach(function (result) {
        var resultElement = document.createElement("div");
        resultElement.textContent = result.title;
        resultsContainer.appendChild(resultElement);
      });
    }

    // Get user input
    const districtId = document.getElementById("district_id").value;
    document
      .getElementById("searchButton")
      .addEventListener("click", function () {
        // Get the user's search input
        var searchInput = document.getElementById("searchInput").value;

        // Construct the API request URL
        var apiUrl =
          "https://zipatala.health.gov.mw/api/districts" + searchInput;

        // Make an API request (you can use the Fetch API or jQuery's $.ajax)
        fetch(apiUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // Process the API response and display the results
            displaySearchResults(data);
          })
          .catch(function (error) {
            console.error("API request error: " + error);
          });
      });

    function displaySearchResults(results) {
      var resultsContainer = document.getElementById("searchResults");
      resultsContainer.innerHTML = ""; // Clear previous results

      // Iterate through the API results and display them on your website
      results.forEach(function (result) {
        var resultElement = document.createElement("div");
        resultElement.textContent = result.title;
        resultsContainer.appendChild(resultElement);
      });
    }

    const districtId = document.getElementById("district-id").value;

    // Get user input
    const ownerId = document.getElementById("owner-id").value;
    document
      .getElementById("searchButton")
      .addEventListener("click", function () {
        // Get the user's search input
        var searchInput = document.getElementById("searchInput").value;

        // Construct the API request URL
        var apiUrl = "https://zipatala.health.gov.mw/api/ownwers" + searchInput;

        // Make an API request (you can use the Fetch API or jQuery's $.ajax)
        fetch(apiUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // Process the API response and display the results
            displaySearchResults(data);
          })
          .catch(function (error) {
            console.error("API request error: " + error);
          });
      });

    function displaySearchResults(results) {
      var resultsContainer = document.getElementById("searchResults");
      resultsContainer.innerHTML = ""; // Clear previous results

      // Iterate through the API results and display them on your website
      results.forEach(function (result) {
        var resultElement = document.createElement("div");
        resultElement.textContent = result.title;
        resultsContainer.appendChild(resultElement);
      });
    }

    const ownerId = document.getElementById("owner-id").value;

    // Send data to the server for facility creation (POST request)
    axios
      .post("/create-facility", {
        facility_name: facilityName,
        district_id: districtId,
        owner_id: ownerId,
      })
      .then((response) => {
        // Handle success (facility created)
        console.log(response.data.message);
      })
      .catch((error) => {
        // Handle error (facility exists or other issues)
        console.error(error.response.data.message);
      });
  });

  // Additional code for listing, searching, and filtering facilities can be added here.
});
