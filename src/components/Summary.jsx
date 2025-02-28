import quizCompleteLogo from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ answers }) {

    let skipped = answers.filter((answer) => answer === null);
    let skippedShare = Math.round((skipped.length / answers.length) * 100);

    let correct = answers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
    let correctShare = Math.round((correct.length / answers.length) * 100);

    let incorrect = answers.filter((answer, index) => answer !== QUESTIONS[index].answers[0]);
    let incorrectShare = Math.round((incorrect.length / answers.length) * 100);

    return (
        <div id="summary">
            <img src={quizCompleteLogo} alt="quiz complete logo" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedShare}%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{correctShare}%</span>
                    <span className="text">Correct</span>
                </p>
                <p>
                    <span className="number">{incorrectShare}%</span>
                    <span className="text">Incorrect</span>
                </p>
            </div>
            <ol>
                {answers.map((answer, index) => {
                    let cssClass = 'user-answer';
                    if(answer === null) {
                        cssClass += ' skipped'
                    } else if(answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }
                    
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    )
                })}

            </ol>
        </div>
    );
}