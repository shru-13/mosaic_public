import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { keyframes } from '@mui/system';

// Import your background image
import backgroundImage from '../assets/survey.jpg'; // Adjust the path as needed
import Header from './Header';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Updated Background component
const Background = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: `url(${backgroundImage}) no-repeat center center fixed`,
  backgroundSize: 'cover',
  padding: '20px',
  animation: `${fadeIn} 1s ease-in-out`,
});

// The rest of your styled components and component code remains the same

const QuizContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(0, 60, 120, 0.7))',
  borderRadius: '15px',
  padding: '20px',
  maxWidth: '900px',
  width: '100%',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
  animation: `${fadeIn} 1s ease-in-out`,
});

const QuestionContainer = styled('div')({
  flex: '1',
  paddingRight: '20px',
  color: '#E2E2B6',
  fontFamily: 'Montserrat, sans-serif',
});

const AnswersContainer = styled('div')({
  flex: '2',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'space-between',
  fontFamily: 'Montserrat, sans-serif'
});

const AnswerBox = styled('div')(({ hovered }) => ({
  flex: '1 1 calc(20% - 10px)',
  minWidth: '120px',
  minHeight: '120px',
  padding: '20px',
  background: `linear-gradient(135deg, ${hovered ? '#004C8C' : '#0074D9'}, ${hovered ? '#003C6C' : '#0056A0'})`,
  color: '#E2E2B6',
  borderRadius: '10px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, background 0.3s ease',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transform: hovered ? 'scale(1.05)' : 'scale(1)',
  '&:hover': {
    background: 'linear-gradient(135deg, #003C6C, #004C8C)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
  },
}));

const ResultContainer = styled('div')({
  textAlign: 'center',
  background: 'linear-gradient(135deg, rgba(0, 60, 120, 0.8), rgba(0, 90, 180, 0.8))',
  borderRadius: '15px',
  padding: '60px',
  maxWidth: '900px',
  width: '100%',
  backdropFilter: 'blur(8px)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
  animation: `${fadeIn} 1s ease-in-out`,
  position: 'relative',
});

const ResultHeading = styled('h2')({
  color: '#E2E2B6',
  fontFamily: 'Montserrat, sans-serif',
});

const ResultParagraph = styled('p')({
  color: '#E2E2B6',
  fontFamily: 'Montserrat, sans-serif',
});

const ActionButton = styled('button')({
  padding: '10px 20px',
  background: 'linear-gradient(135deg, #0074D9, #004C8C)',
  color: '#E2E2B6',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  transition: 'background 0.3s ease, transform 0.3s ease',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
  '&:hover': {
    background: 'linear-gradient(135deg, #004C8C, #0074D9)',
    transform: 'scale(1.05)',
  },
});

const ClubQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ arts: 0, literature: 0, music: 0, coding: 0, sports: 0 });
  const [result, setResult] = useState(null);
  const [hovered, setHovered] = useState(null);

  const questions = [
    {
      question: "What do you enjoy doing in your free time?",
      answers: {
        arts: "Drawing or painting",
        literature: "Reading books",
        music: "Listening to or playing music",
        coding: "Programming or solving puzzles",
        sports: "Playing or watching sports"
      }
    },
    {
      question: "Which of these subjects did you enjoy the most in school?",
      answers: {
        arts: "Art",
        literature: "English",
        music: "Music",
        coding: "Math or Computer Science",
        sports: "Physical Education"
      }
    },
    {
      question: "What kind of events do you prefer attending?",
      answers: {
        arts: "Art exhibitions",
        literature: "Book readings",
        music: "Concerts",
        coding: "Hackathons or tech meetups",
        sports: "Sports games or tournaments"
      }
    },
    // Add more questions as needed
  ];

  const handleAnswer = (club) => {
    setScores((prevScores) => ({
      ...prevScores,
      [club]: prevScores[club] + 1
    }));
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const maxScore = Math.max(...Object.values(scores));
    const recommendedClub = Object.keys(scores).find(club => scores[club] === maxScore);
    setResult(recommendedClub);
  };

  return (
    <Background>
      <Header/>
      {result ? (
        <ResultContainer>
          <ResultHeading>Recommended Club: {result.charAt(0).toUpperCase() + result.slice(1)}</ResultHeading>
          <ResultParagraph>
            Based on your answers, we recommend you join the {result} club!
          </ResultParagraph>
          <Link to="/admin">
            <ActionButton>
              Explore More Clubs
            </ActionButton>
          </Link>
        </ResultContainer>
      ) : (
        <QuizContainer>
          <QuestionContainer>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Club Quiz</h2>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>{questions[currentQuestion].question}</p>
          </QuestionContainer>
          <AnswersContainer>
            {Object.entries(questions[currentQuestion].answers).map(([club, answer]) => (
              <AnswerBox
                key={club}
                hovered={hovered === club}
                onClick={() => handleAnswer(club)}
                onMouseEnter={() => setHovered(club)}
                onMouseLeave={() => setHovered(null)}
              >
                {answer}
              </AnswerBox>
            ))}
          </AnswersContainer>
        </QuizContainer>
      )}
    </Background>
  );
};

export default ClubQuiz;
