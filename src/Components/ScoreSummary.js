// ScoreSummary.js

import React from 'react';

const ScoreSummary = ({ wpm, accuracy, correctCharacters, incorrectCharacters, missedCharacters, extraCharacters }) => {
  return (
    <div>
      <h1>Score Summary</h1>
      <p>Words Per Minute (WPM): {wpm}</p>
      <p>Accuracy: {accuracy}%</p>
      <p>Correct Characters: {correctCharacters}</p>
      <p>Incorrect Characters: {incorrectCharacters}</p>
      <p>Missed Characters: {missedCharacters}</p>
      <p>Extra Characters: {extraCharacters}</p>
    </div>
  );
};

export default ScoreSummary;
