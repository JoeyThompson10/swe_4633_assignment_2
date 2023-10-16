import React from 'react';
import '../css/global.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div>
        <h2>SWE 4633 - Assignment Details</h2>
        <p>In this assignment, we will practice developing a small web service application to send and retrieve data from a cloud-based database.</p>
        <p>Scenario: You want to develop a small grade calculator for KSU students. Students can enter an ID number and a grade in a webpage, and send it to the database. After submission, students will be taken to a page where they can see all ID numbers in the database, grades associated with the IDs, and the average grade of all students.</p>
        <p>To complete this assignment, you should:</p>
        <ul>
          <li>Set up a database on the cloud hosting platform</li>
          <li>Develop at least two separate pages on your account</li>
          <li>One to enter information</li>
          <li>One to display the required information in the database</li>
        </ul>
        <p>Please submit the URL and all source code to D2L.</p>
      </div>
    </div>
  );
}

export default AboutPage;
