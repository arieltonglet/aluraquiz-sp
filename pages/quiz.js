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
import AlternativesForm from '../src/components/AlternativesForm';

// BUILD THE LOADING BLOCK
const LoadingWidget = () => (
  <Widget>
    <Widget.Content>[ LOADING ]</Widget.Content>
  </Widget>
);

const ResultWidget = ({ name, results, score }) => (
  <Widget>
    <Widget.Header>Fim de jogo!</Widget.Header>
    <Widget.Content>
      <p>{`Parabéns, ${name}!`}</p>
      <p>{`Você acertou ${score} resposta(s):`}</p>
      <ul>
        {results.map((r, i) => (
          <li>{`#${i} — ${r ? 'Acertou' : 'Errou'}`}</li>
        ))}
      </ul>
    </Widget.Content>
  </Widget>
);

// BUILD THE MAIN QUESTION BLOCK
const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) => {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const [hasAlternativeSelected, setHasAlternativeSelected] = useState(false);

  // This const will be replaced on state change, so we dont need useState
  const isCorrect = selectedAlternative === question.answer;

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
          <AlternativesForm
            data-show-result={isQuestionSubmitted}
            onSubmit={(e) => {
              e.preventDefault();
              setIsQuestionSubmitted(true);

              setTimeout(() => {
                setIsQuestionSubmitted(false);
                setHasAlternativeSelected(false);
                setSelectedAlternative(undefined);
                onSubmit();

                // Check answer
                addResult(isCorrect);
              }, 2000);
            }}
          >
            {question.alternatives.map((a, i) => {
              const alternativeId = `alternative__${a}`;
              const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
              const isSelected = selectedAlternative === i;
              return (
                <Widget.Topic
                  as="label"
                  key={alternativeId}
                  htmlFor={`alternative__${i}`}
                  data-selected={isSelected}
                  data-status={isQuestionSubmitted && alternativeStatus}
                  data-answer={
                    isQuestionSubmitted && i === question.answer ? 'SHOW' : ''
                  }
                >
                  <input
                    style={{ display: 'none' }}
                    type="radio"
                    id={`alternative__${i}`}
                    name={questionId}
                    onChange={() => {
                      setSelectedAlternative(i);
                      setHasAlternativeSelected(true);
                    }}
                    disabled={isQuestionSubmitted}
                  />
                  {a}
                </Widget.Topic>
              );
            })}
            {/* OK */}
            <Button type="submit" disabled={!hasAlternativeSelected}>
              Confirmar
            </Button>
          </AlternativesForm>

          {/* FEEDBACK */}
          <p style={{ minHeight: '1.3em', textAlign: 'center' }}>
            {isQuestionSubmitted && isCorrect && <span>Acertou!</span>}
            {isQuestionSubmitted && !isCorrect && <span>Errou!</span>}
          </p>
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

  const [results, setResults] = useState([]);
  const score = results.filter((r) => !!r).length;
  const addResult = (r) => setResults([...results, r]);

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
            addResult={addResult}
          />
        )}

        {/* RESULTS */}
        {screenState === screenStates.RESULT && (
          <ResultWidget name={name} results={results} score={score} />
        )}

        {/* FOOTER */}
        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/arieltonglet/aluraquiz-sp" />
    </QuizBackground>
  );
}
