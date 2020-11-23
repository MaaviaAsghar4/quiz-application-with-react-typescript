import React, { useState } from 'react'
import '../App.css'

const Quiz = () => {
    let [answer,setAnswer] = useState('')
    let setActive = (e : any) => {
        setAnswer(e.target.value)
        e.target.classList.add('active')
    }

    const answers = [10, 20, 30, 40]
    return (
        <div className='quiz-container'>
            <div>
                <h3> Q: How many world cups have been played since 1975?</h3>
            </div>
            <div>
                <ul>
                    {answers.map((answer, i) => {
                        return (
                            <li key={i} value={answer} onClick={setActive} className='option-list'>{answer}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <button className='next'>Next</button>
            </div>
        </div>
    )
}

export default Quiz
