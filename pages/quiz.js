/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import db from '../db.json';

import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import SEO from '../src/components/SEO';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';

// BUILD THE LOADING BLOCK
const LoadingWidget = () => (
  <Widget>
    <Widget.Content>[ LOADING ]</Widget.Content>
  </Widget>
);

// BUILD THE MAIN QUESTION BLOCK
const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) => {
  const questionId = `question__questionIndex`;

  return (
    <>
      {/* HEADER */}
      <Widget>
        <Widget.Header>
          <Link href="/">
            <a href="/">
              <h1>{db.title}</h1>
            </a>
          </Link>
          <span style={{ marginLeft: 'auto' }}>
            {`${questionIndex + 1} de ${totalQuestions}`}
          </span>
        </Widget.Header>
      </Widget>

      {/* MAIN CONTENT */}
      <Widget>
        <div style={{ width: '100%', height: '200px', position: 'relative' }}>
          <Image src={question.image} alt="" layout="fill" objectFit="cover" />
        </div>
        <Widget.Content>
          <h2 style={{ lineHeight: 1.2, height: '2.4em', overflow: 'hidden' }}>
            {question.title}
          </h2>
          <p style={{ lineHeight: 1.2, height: '2.4em', overflow: 'hidden' }}>
            {question.description}
          </p>

          {/* Alternatives */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            {question.alternatives.map((a, i) => (
              <Widget.Topic as="label" key={a} htmlFor={`alternative__${i}`}>
                <input
                  style={{ display: 'none' }}
                  type="radio"
                  id={`alternative__${i}`}
                  name={questionId}
                />
                {a}
              </Widget.Topic>
            ))}
            {/* OK */}
            <Button type="submit">Confirmar</Button>
          </form>
        </Widget.Content>
      </Widget>
    </>
  );
};

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  //
  // Get data from URL
  const router = useRouter();
  const { name } = router.query;

  // Set questions
  const { questions } = db;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];
  const totalQuestions = questions.length;

  // Define screen states
  const [screenState, setScreenState] = useState(screenStates.LOADING);

  // Life cycle: Effects
  // didMount -> willUpdate -> willUnmount

  // Hooks: useEffect
  useEffect(() => {
    // Emulate API loading
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  question.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    answer: PropTypes.number.isRequired,
    alternatives: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  const handleSubmit = () => {
    console.log(questionIndex);
    if (questionIndex + 1 < totalQuestions) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <SEO />
      <QuizContainer>
        <QuizLogo />

        {/* LOADING */}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {/* MAIN CONTENT */}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmit}
          />
        )}

        {/* RESULTS */}
        {screenState === screenStates.RESULT && <p>{`Parabéns, ${name}!`}</p>}

        {/* FOOTER */}
        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/arieltonglet/aluraquiz-sp" />
    </QuizBackground>
  );
}
