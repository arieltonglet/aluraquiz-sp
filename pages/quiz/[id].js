import QuizScreen from '../../src/screens/Quiz';

const ExternalQuiz = ({ externalDb }) => {
  return <QuizScreen db={externalDb} />;
};

export default ExternalQuiz;

export async function getServerSideProps(context) {
  const [projectName, userName] = context.query.id.split('___');

  const externalDb = await fetch(
    `http://${projectName}.${userName}.vercel.app/api/db`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Fail to get external data');
    })
    .then((responseJson) => responseJson)
    .catch((error) => {
      throw new Error(error);
    });

  return {
    props: { externalDb },
  };
}
