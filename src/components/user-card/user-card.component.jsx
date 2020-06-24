import React from 'react'

import './user-card.styles.css'
import StarRating from '../star-rating/star-rating.component'

const UserCard = ({ userAccount }) => {
    return (
        <div className='user-card'>
            <h2>{userAccount.userName}</h2>
            <h3>Account</h3>
            <p>{userAccount.account}</p>


            <h3>Apps</h3>
            {Object.keys(userAccount.apps).map((app, index) => (
                <div key={userAccount.apps[app].title[0]} className='app-container'>
                    <p>
                        {index + 1}. {userAccount.apps[app].title}
                    </p>
                    <StarRating
                        account={userAccount.account}
                        appName={app}
                     />
                </div>
            ))}
        </div>
    )
}

export default UserCard
