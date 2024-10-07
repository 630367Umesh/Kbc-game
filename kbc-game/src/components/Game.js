// src/components/Game.js
import React, { useState } from 'react';
import QRCodeComponent from './QRCodeComponent';
import MobileView from './MobileView';

const questions = [
    {
        question: "What is the capital of France?",
        options: { A: "Paris", B: "Berlin", C: "Madrid", D: "Rome" },
        answer: "A",
    },
    {
        question: "What is the largest planet in our solar system?",
        options: { A: "Earth", B: "Mars", C: "Jupiter", D: "Saturn" },
        answer: "C",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: { A: "Gold", B: "Oxygen", C: "Silver", D: "Iron" },
        answer: "B",
    },
    {
        question: "In which year did the Titanic sink?",
        options: { A: "1912", B: "1915", C: "1918", D: "1920" },
        answer: "A",
    },
    {
        question: "What is the smallest prime number?",
        options: { A: "0", B: "1", C: "2", D: "3" },
        answer: "C",
    },
];

const Game = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [congratulationsMessage, setCongratulationsMessage] = useState("");
    const [incorrectMessage, setIncorrectMessage] = useState("");

    const handleAnswerSubmit = (selectedOption, playerName) => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setCongratulationsMessage(`Congratulations ${playerName}!`);
            setIncorrectMessage("");
            // Move to next question after a short delay
            setTimeout(() => {
                setCurrentQuestionIndex((prev) => prev + 1);
                setCongratulationsMessage("");
            }, 2000);
        } else {
            setIncorrectMessage(`Sorry ${playerName}, that's incorrect!`);
            setCongratulationsMessage("");
        }
    };

    return (
        <div className="game-container">
            <h1>Question {currentQuestionIndex + 1}</h1>
            <h2>{questions[currentQuestionIndex].question}</h2>
            <QRCodeComponent />
            <div className="messages">
                {congratulationsMessage && <h3 className="congrats">{congratulationsMessage}</h3>}
                {incorrectMessage && <h3 className="incorrect">{incorrectMessage}</h3>}
            </div>
            <MobileView 
                question={questions[currentQuestionIndex]} 
                onAnswerSubmit={handleAnswerSubmit} 
            />
        </div>
    );
};

export default Game;
