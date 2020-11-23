import React, { useEffect, useState } from 'react'
import { getQuestions } from './../Service/QuizApi'
import '../App.css'
import Quiz from './Quix'

const Header = () => {
    const [difficultyLevel, setDifficultyLevel] = useState('')
    const [totalQuestions, setTotalQuestions] = useState(0)
    // const [quizQuestions, setQuizQuestions]= useState()
    let [count, setCount] = useState(false)

    let handleQuestions = (e: any) => {
        setTotalQuestions(e.target.value)
    }

    let handleDifficulty = (e: any) => {
        setDifficultyLevel(e.target.value)
    }

    const fetchQuiz = () => {
       setCount(true)
    }

    useEffect(() => {
        getQuestions(totalQuestions, difficultyLevel);
        
    }, [totalQuestions, difficultyLevel,count])

    if(count) {
        return (
            <Quiz />
        )
    }
    return (
        <div className='quiz-container'>
            <h1 className='title'>Quiz Application</h1>
            <div className='box'>
                <h2>Test Yourself</h2>
                <div className='difficulty-select'>
                    <label htmlFor='difficulty-level'>Select a dificult level</label>
                    <select name='difficulty-level' onChange={handleDifficulty}>
                        <option value=''>Select difficulty</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                </div>
                <div className='question-select'>
                    <label htmlFor='questions'>Select number of Questions</label>
                    <select name='questions' onChange={handleQuestions}>
                        <option value=''>Select total</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                </div>
                <div>
                    <button onClick={fetchQuiz} className='play'>Play</button>
                </div>
            </div>
        </div>
    )
}

export default Header
