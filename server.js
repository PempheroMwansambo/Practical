const express = require("express");
const axios = require("axios");
const app = express();
const port = 5432;

app.use(express.static("public"));
app.use(express.json());

// Create a facility
app.post("/create-facility", (req, res) => {
  const { facility_name, district_id, owner_id } = req.body;

  // Check if facility exists in MHFR (you need to implement this)
  const facilityExists = false;

  if (facilityExists) {
    res.status(400).json({ message: "Facility already exists in MHFR." });
  } else {
    // Generate a unique facility_code as per your requirements

    // Save the facility to your database (not shown here)
    res.json({ message: "Facility created successfully." });
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
