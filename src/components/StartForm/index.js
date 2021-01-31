import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  * {
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
`;

const StartInput = styled.input`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 8px;
`;

const StartForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/quiz?name=${name}`);
      }}
    >
      <StartInput
        placeholder="Como devo te chamar?"
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" disabled={name.length === 0}>
        Jogar
      </Button>
      {name ? <p>{`Boas-vindas, ${name}!`}</p> : <p>Boas-vindas!</p>}
    </FormWrapper>
  );
};

export default StartForm;
