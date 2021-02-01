import db from '../../db.json';
import QuizScreen from '../../src/screens/Quiz';

const QuizPage = () => <QuizScreen db={db} />;

export default QuizPage;
