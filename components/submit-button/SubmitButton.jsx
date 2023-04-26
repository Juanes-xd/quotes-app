import handleSubmit from '@/pages/api/quotes'
import './submit-button.css'

const SubmitButton = (props) => {
  return (
    <button type='submit' className='submit-button'>{props.text}</button>
  )
}

export default SubmitButton