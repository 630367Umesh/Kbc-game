// src/components/MobileView.js
import React, { useState } from 'react';

const MobileView = ({ question, onAnswerSubmit }) => {
    const [playerName, setPlayerName] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleJoin = () => {
        if (!playerName) {
            alert("Please enter your name!");
            return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAnswerSubmit(selectedOption, playerName);
        setSelectedOption('');
    };

    return (
        <div className="mobile-view">
            <h3>Join as Player</h3>
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter your name"
                onBlur={handleJoin}
            />
            <h2>{question.question}</h2>
            {Object.entries(question.options).map(([key, value]) => (
                <label key={key}>
                    <input
                        type="radio"
                        value={key}
                        checked={selectedOption === key}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    {key}: {value}
                </label>
            ))}
            <button onClick={handleSubmit}>Submit Answer</button>
        </div>
    );
};

export default MobileView;
