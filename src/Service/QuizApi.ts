export const getQuestions = async (totalQuestions: number, level: string) => {
    const fetchQuestions = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)

    const { results } = await fetchQuestions.json()
    const quizQuestions = results.map((questionObj: any) => {
        const answerArray = [...questionObj.incorrect_answers, questionObj.correct_answer]
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            options: answerArray
        }
    })
    console.log(quizQuestions)
}