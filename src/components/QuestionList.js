import React, {useState} from 'react'
import Question from './Question'
	
const QuestionList = props => {
	
    const [selectedQuestionId, setSelectedQuestionId] = useState(null)

    const questionsList = props.questions.map(question => {
        let selectedStatus = false
        if(selectedQuestionId === question.id){
            selectedStatus = true
        }
        const setSelectedQuestionIdClosure = () => {
            if(selectedStatus){
                setSelectedQuestionId(null)
            }else{
                setSelectedQuestionId(question.id)
            }      
        }
        return(
            <Question 
                key={question.id}
                question={question.question}
                answer={question.answer} 
                selectedStatus={selectedStatus}
                setSelectedQuestionIdClosure={setSelectedQuestionIdClosure}
            />
        )
    })

    return(
        <ul>
          {questionsList}
        </ul>
    )
}

export default QuestionList 