import styled from 'styled-components';

import db from '../../../db.json';
import Link from '../Link';
import Widget from '../Widget';

const Li = styled.li`
  margin-bottom: 0.5em;
`;

const ExternalLinks = () => (
  <>
    <h3>Outros quizzes</h3>
    <p>Links para outros projetos da imersão</p>
    <ul>
      {db.external.map((q) => {
        const [projectName, userName] = q
          .replace(/.+\/\/(.+)\.vercel.+/g, '$1')
          .split('.');

        return (
          <Li key={q}>
            <Widget.Topic as={Link} href={`/quiz/${projectName}___${userName}`}>
              {`${userName} / ${projectName}`}
            </Widget.Topic>
          </Li>
        );
      })}
    </ul>
  </>
);

export default ExternalLinks;
