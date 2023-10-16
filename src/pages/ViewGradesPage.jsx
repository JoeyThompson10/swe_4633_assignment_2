import React, { useState, useEffect } from 'react';
import '../css/ViewGradesPage.css';
import { GetAllGrades } from '../MongoDbClient';

function ViewGradesPage() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    async function fetchGrades() {
      const grades = await GetAllGrades();
      setGrades(grades);
    }

    fetchGrades();
  }, []);

  const calculateAverageGrade = () => {
    const total = grades.reduce((acc, grade) => acc + parseFloat(grade.grade), 0);
    return (total / grades.length).toFixed(2);
  };

  return (
    <div className="about-page">
      <h1>View Grades</h1>
      {grades.length > 0 ? (
        <table className="grades-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.id}>
                <td>{grade.id}</td>
                <td>{grade.grade}</td>
              </tr>
            ))}
            <tr className="average-row">
              <td>Average</td>
              <td>{calculateAverageGrade()}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No grades available</p>
      )}
    </div>
  );
}

export default ViewGradesPage;
