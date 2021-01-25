import Link from "next/link";
import styled from "styled-components";

import db from "../db.json";

import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import SEO from "../src/components/SEO";
import Widget from "../src/components/Widget";

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
      <SEO />
      <QuizContainer>
        {/* HEADER */}
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        {/* MAIN CONTENT */}
        <Widget>
          <Widget.Content>
            <p>
              Sint culpa consectetur aliquip consequat. Consequat pariatur dolor
              quis officia incididunt. Exercitation mollit fugiat veniam non
              esse deserunt cupidatat mollit aute in ut voluptate Lorem ad. Qui
              ex cillum minim irure. Irure adipisicing laboris qui cillum magna.
            </p>
            <Link href="/quiz">
              <a style={{ color: "#ffffff" }}>Começar!</a>
            </Link>
          </Widget.Content>
        </Widget>

        {/* FOOTER */}
        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/arieltonglet/aluraquiz-sp" />
    </QuizBackground>
  );
}
