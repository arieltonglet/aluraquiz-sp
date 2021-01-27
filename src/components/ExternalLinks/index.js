import styled from 'styled-components';

import db from '../../../db.json';

const Li = styled.li`
  margin-bottom: 0.5em;
`;

const Link = styled.a`
  color: inherit;
`;

const ExternalLinks = () => (
  <>
    <h3>Outros quizzes</h3>
    <p>Links para outros projetos da imersão</p>
    <ul>
      {db.external.map((q) => (
        <Li>
          <Link href={q.url} target="_blank" rel="noopener noreferrer">
            {q.name}
          </Link>
        </Li>
      ))}
    </ul>
  </>
);

export default ExternalLinks;
