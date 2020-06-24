import React from 'react'
import UserCard from '../user-card/user-card.component'

import './user-list.styles.css'

const UserList = ({ usersAndAccounts }) => {
    return (
        <div className='user-list'>
            {usersAndAccounts.map(userAccount => (
                <UserCard
                    key={userAccount.account}
                    userAccount={userAccount}
                />
            ))}
        </div>
    )
}

export default UserList
