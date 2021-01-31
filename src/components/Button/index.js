import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1;
  outline: 0;
  transition: 0.3s;

  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  color: ${({ theme }) => theme.colors.mainBg};
  cursor: pointer;
  padding: 16px;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
