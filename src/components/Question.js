import React from 'react'

const Question = props => {
    let questionText = props.question
    let answerText = ""

    if(props.selectedStatus === true){
        answerText = props.answer
    }
	
    return(
        <li onClick={props.setSelectedQuestionIdClosure}>
            {questionText} 
            {answerText}
        </li>
    )
}
export default Question
