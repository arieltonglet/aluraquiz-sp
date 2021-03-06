import { addScaleCorrection, motion } from 'framer-motion';

import db from '../db.json';
import ExternalLinks from '../src/components/ExternalLinks';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import StartForm from '../src/components/StartForm';
import Widget from '../src/components/Widget';

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {/* HEADER */}
        <QuizLogo />
        <Widget
          as={motion.section}
          variants={{
            show: {
              opacity: 1,
              y: '0px',
            },
            hidden: {
              opacity: 0,
              y: '10px',
            },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Teste seus conhecimentos sobre São Paulo com algumas curiosidades
              retiradas do{' '}
              <a
                href="https://www.uol.com.br/nossa/reportagens-especiais/aniversario-de-sao-paulo-os-bairros-que-trouxeram-o-mundo-para-a-cidade"
                target="_blank"
                rel="noopener noreferrer"
              >
                UOL
              </a>
              {', '}
              <a
                href="https://www.uol.com.br/nossa/reportagens-especiais/aniversario-de-sao-paulo-os-bairros-que-trouxeram-o-mundo-para-a-cidade"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guichê Virtual
              </a>
              {' e '}
              <a
                href="https://flytour-blog.azurewebsites.net/curiosidades-de-sao-paulo-o-quanto-voce-conhece-a-cidade/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flytour
              </a>
            </p>
            <StartForm />
            <p>
              <small>
                Imagem de fundo:{' '}
                <a
                  href="https://unsplash.com/photos/Eye_or7LxxQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DAVIDSONLUNA
                </a>
              </small>
            </p>
          </Widget.Content>
        </Widget>

        {/* MAIN CONTENT */}
        <Widget
          as={motion.section}
          variants={{
            show: {
              opacity: 1,
              y: '0px',
            },
            hidden: {
              opacity: 0,
              y: '10px',
            },
          }}
          transition={{ delay: 0.2 }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <ExternalLinks />
          </Widget.Content>
        </Widget>

        {/* FOOTER */}
        <Footer
          as={motion.footer}
          variants={{
            show: {
              opacity: 1,
              y: '0px',
            },
            hidden: {
              opacity: 0,
              y: '10px',
            },
          }}
          transition={{ delay: 0.4 }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/arieltonglet/aluraquiz-sp" />
    </QuizBackground>
  );
}
