import './quote-card.css'

const QuoteCard = (props) => {
  return (
    <div className='quote-card'>
        <h1 className='quote-card-author'>{props.author}</h1>
        <p className='quote-card-quote'>{props.quote}</p>
    </div>
  )
}

export default QuoteCard