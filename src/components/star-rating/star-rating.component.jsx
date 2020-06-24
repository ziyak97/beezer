import React, {useState, useEffect} from 'react'
import StarRatingComponent from 'react-star-rating-component'

import {setAppRating, getAppRating} from '../../firebase/firebase.utils'
 
const StarRating = ({account, appName}) => {
  const [rating, setRating] = useState(0)

  useEffect(() => {
    if(rating) {
      setAppRating(account, appName, rating)
    }
  }, [account, appName, rating])

  useEffect(() => {
    const asyncRating = async () => {
      const getRating = await getAppRating(account, appName)
      setRating(getRating)
    }

    asyncRating()
   
  }, [account, appName])
 
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