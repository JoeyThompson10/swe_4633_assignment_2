import React, { useState } from 'react';
import { AddGrade } from '../MongoDbClient';
import '../css/global.css';

function EnterGradePage() {
    const [id, setId] = useState('');
    const [grade, setGrade] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await AddGrade(id, grade);
            if (result.message) {
                setMessage(result.message);
            } else {
                setMessage('Grade entered successfully!');
            }
        } catch (error) {
            console.error("An error occurred while adding the grade:", error);
            if (error.message.includes("E11000")) {
                setMessage("Grade already exists for that ID");
            }
            else {
                setMessage(error.message);
            }
        }
    };

    return (
        <div className="about-page">
            <h1>Enter Grade</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    ID:
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Grade:
                    <input
                        type="text"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Enter Grade</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default EnterGradePage;
