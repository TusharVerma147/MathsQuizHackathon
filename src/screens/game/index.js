import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { addition, subtraction, multiplication, division } from '../../utils/mockdata/data';

const Game = ({ route, navigation }) => {
  const { name, operator, level } = route.params;

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); 

  useEffect(() => {
    let loadedQuestions = [];
    switch (operator) {
      case 'plus':
        loadedQuestions = addition.filter(q => q.level === level);
        break;
      case 'subtract':
        loadedQuestions = subtraction.filter(q => q.level === level);
        break;
      case 'multiply':
        loadedQuestions = multiplication.filter(q => q.level === level);
        break;
      case 'division':
        loadedQuestions = division.filter(q => q.level === level);
        break;
    }
    setQuestions(loadedQuestions);
  }, [operator, level]);

  useEffect(() => {
    if (timer > 0 && questions.length > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer, questions]);

  const handleAnswer = (answer) => {
    setSelectedOption(answer); 
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setTimer(10);
      setSelectedOption(null); 
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimer(10);
    setQuizFinished(false);
    setSelectedOption(null);
  };

  if (questions.length === 0) {
    return <Text>Loading questions...</Text>;
  }

  if (quizFinished) {
    return (
      <View style={styles.container}>
           <Text style={styles.complete}>Quiz Completed!</Text>
        <Text style={styles.score}>Your final score is: {score}</Text>
        <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
          <Text style={styles.restartButtonText}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
 

  const questionText = currentQuestion.question

  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>
        Question {currentQuestionIndex + 1} of {questions.length}
      </Text>
      <Text style={styles.timer}>Time Left: {timer}s</Text>
      <Text style={styles.question}>{questionText}</Text>
      {currentQuestion.options.map((option, index) => {
        const isSelected = selectedOption === option;
        const isCorrect = option === currentQuestion.correctAnswer;
        const isWrong = isSelected && !isCorrect;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              isWrong ? styles.wrongOption : isSelected && isCorrect ? styles.correctOption : null,
            ]}
            onPress={() => handleAnswer(option)}
            disabled={selectedOption !== null} 
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#079FE0',
    padding: 20,
  },
  questionNumber: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    marginTop:100
  },
  timer: {
    fontSize: 25,
    color: '#DC143C',
    textAlign: 'center',
    marginBottom : 20,
    marginTop: 100,
    fontWeight:'bold'
  },
  question: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  wrongOption: {
    backgroundColor: '#FCA5A5', 
  },
  correctOption: {
    backgroundColor: '#86EFAC', 
  },
  score: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
  },
  complete:{
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 100,
  },
  restartButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 30,
    alignItems: 'center',
  },
  restartButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});