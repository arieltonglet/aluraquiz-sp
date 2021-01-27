import styled from 'styled-components';

import db from '../db.json';

import ExternalLinks from '../src/components/ExternalLinks';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import StartForm from '../src/components/StartForm';
import Widget from '../src/components/Widget';

const QuizContainer = styled.main`
  margin: auto;
  max-width: 350px;
  padding: 15px;
  width: 100%;

  @media screen and (min-width: 501px) {
    margin: auto 10%;
    padding-top: 45px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {/* HEADER */}
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <StartForm />
          </Widget.Content>
        </Widget>

        {/* MAIN CONTENT */}
        <Widget>
          <Widget.Content>
            <ExternalLinks />
          </Widget.Content>
        </Widget>

        {/* FOOTER */}
        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/arieltonglet/aluraquiz-sp" />
    </QuizBackground>
  );
}
