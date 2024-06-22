import './Title.css'
const Title = ({ titleOverview, titleDescription, isSpan=false}) => {
  return (
    <div className="title">
        <span className='title__overview'>{titleOverview}</span>
        <h2 className='title__description'>{titleDescription}</h2>
        {isSpan && <span className='title__bar'></span>}
        
    </div>
  )
}

export default Title