import styled from "styled-components";

const FooterWrapper = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.mainBg}aa`};
  border-radius: 4px;
  display: flex;
  padding: 20px;
  line-height: 1.2;

  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.15s;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a
        href="https://www.alura.com.br/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a
          href="https://www.alura.com.br/imersao-react-next-js"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
