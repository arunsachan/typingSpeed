import React, { useState, useEffect } from 'react';
import {Switch} from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TypingSpeedTest = () => {
  const [words, setWords] = useState(['example', 'words', 'for', 'typing', 'test']);
  const [userInput, setUserInput] = useState('');
  const [countdown, setCountdown] = useState(15);
  const [testStart, setTestStart] = useState(false);
  const [testEnd, setTestEnd] = useState(false);
  const [correctCharacters, setCorrectCharacters] = useState(0);
  const [incorrectCharacters, setIncorrectCharacters] = useState(0);
  const [missedCharacters, setMissedCharacters] = useState(0);
  const [extraCharacters, setExtraCharacters] = useState(0);

  useEffect(() => {
    let timer;
    if (testStart && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setTestEnd(true);
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown, testStart]);

  const handleUserInput = (e) => {
    if (!testStart) {
      setTestStart(true);
    }

    const inputText = e.target.value;
    setUserInput(inputText);

    // Calculate correctness, missed characters, and extra characters
    let correct = 0;
    let missed = 0;
    let extra = 0;

    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === words[i]) {
        correct++;
      } else {
        if (inputText[i] === ' ' && words[i] !== ' ') {
          missed += words[i].length - 1;
        } else {
          extra++;
        }
      }
    }

    setCorrectCharacters(correct);
    setIncorrectCharacters(inputText.length - correct);
    setMissedCharacters(missed);
    setExtraCharacters(extra);
  };

  // Calculate WPM and Accuracy
  const totalWords = words.join(' ').length / 5;
  const wpm = Math.round((correctCharacters / 5) / ((15 - countdown) / 60));
  const accuracy = ((correctCharacters / (correctCharacters + incorrectCharacters)) * 100).toFixed(2);

  return (
    <div>
      <h1>Typing Speed Test</h1>
      <div className="timer">Time left: {countdown} seconds</div>
      <input type="text" value={userInput} onChange={handleUserInput} />
      <div className="statistics">
        <p>WPM: {wpm}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>Correct Characters: {correctCharacters}</p>
        <p>Incorrect Characters: {incorrectCharacters}</p>
        <p>Missed Characters: {missedCharacters}</p>
        <p>Extra Characters: {extraCharacters}</p>
      </div>
      {testEnd ? (
        <div>
          <h2>Test Finished!</h2>
          <Link to="/score-summary">View Score Summary</Link>
        </div>
      ) : null}
    </div>
  );
};

export default TypingSpeedTest;

