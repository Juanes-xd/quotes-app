import { InputBox, SubmitButton } from ".."
import './add-form.css'

const AddForm = () => {
  return (
    <form className="add-form" method="POST" action="http://localhost:3001/addQuote">
      <InputBox id="author" name="author" type="label" label="Author" placeholder="Type author's name" />
      <InputBox id="quote" name="quote" type="label" label="Quote" placeholder="Type quote" />
      <SubmitButton text="Add" />
    </form>
  )
}

export default AddForm