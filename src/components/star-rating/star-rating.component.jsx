import React, {useState} from 'react'
import StarRatingComponent from 'react-star-rating-component'
 
const StarRating = () => {
  const [rating, setRating] = useState(0)
 
  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue)
  }
    
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </div>
    )
  }
 
export default StarRating