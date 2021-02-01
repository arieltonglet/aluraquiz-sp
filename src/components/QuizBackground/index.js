import PropTypes from 'prop-types';
import styled from 'styled-components';

const Quiz = styled.div`
  width: 100%;
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.mainBg},
    ${({ theme }) => theme.colors.secondary}
  );
  flex: 1;

  @media screen and (max-width: 500px) {
    background: ${({ theme }) => theme.colors.mainBg};
  }

  *:nth-child(2) {
    position: relative;
    z-index: 10;
  }
`;

const Background = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  filter: blur(2px);
  mix-blend-mode: multiply;
  opacity: 0.8;
  position: fixed;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 500px) {
    background-image: none;
    mix-blend-mode: normal;
    &:after {
      content: '';
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({ theme }) => theme.colors.mainBg}
        ),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
`;

const QuizBackground = ({ backgroundImage, children }) => (
  <Quiz>
    <Background backgroundImage={backgroundImage} />
    {children}
  </Quiz>
);

export default QuizBackground;

QuizBackground.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};
