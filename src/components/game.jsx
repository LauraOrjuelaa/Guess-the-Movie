import { useState } from 'react';
import Movie from './movie/movie.jsx';
import Answer from './answer/answer.jsx';
import Lives from './lives/lives.jsx';
import Score from './score/score.jsx';
import './game.css'

const movies = [
  { name: "Buscando a Nemo", emoji: "🔎🐠" },
  { name: "La Princesa y el Sapo", emoji: "👸🏽🐸" },
  { name: "Intensamente", emoji: "😭🤢😡😃😣" },
  { name: "Ratatouille", emoji: "👨🏻‍🍳🧑🏻‍🍳🐁" },
  { name: "Coco", emoji: "🎸💀🟩⬜🟥👦🏻" },
  { name: "Batman", emoji: "🦇👦🏻" },
  { name: "La Sirenita", emoji: "🧜🏻‍♀️🐠🌊🗣️" },
  { name: "Zootopia", emoji: "🦊🐰🚔" },
  { name: "Titanic", emoji: "🚢❄️💔" },
  { name: "Frozen", emoji: "👸❄️☃️" },
  { name: "Hombre Araña", emoji: "👦🏻🕸️🕷️" },
  { name: "It", emoji: "🤡🎈" },
  { name: "Scream", emoji: "😱🔪🏃🏻‍♀️🩸" },
  { name: "Jurassic Park", emoji: "🦖🌴🚙" },
  { name: "La Princesa y el Sapo", emoji: "👸😴" },
  { name: "El rey león", emoji: "🦁👑🌅" },
  { name: "Star Wars", emoji: "⚔️🚀🌌" },
  { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
  { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
];

const Game = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  const currentMovie = movies[currentMovieIndex];

  const checkAnswer = (answer) => {
    if (answer === currentMovie.name.toLowerCase()) {
      setScore(score + 1);
      if (currentMovieIndex + 1 < movies.length) {
        setCurrentMovieIndex(currentMovieIndex + 1);
      } else {
        setGameOver(true);
      }
    } else {
      setLives(lives - 1);
      if (lives - 1 === 0) {
        alert("Game Over! Try Again ToT");
        window.location.reload();
      }
    }
  };

  if (gameOver) {
    return <div className="game-over">Game Over!</div>;
  }

  return (

        <div className="game">
            <h1>Guess the Movie</h1>
            <Movie className="movie" emoji={currentMovie.emoji} />
            <Answer checkAnswer={checkAnswer} />
            <Lives className="lives" lives={lives} />
            <Score className="score" score={score} />
        </div>
    
  );
};

export default Game;
