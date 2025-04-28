import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {


    const users = [{
        userName: 'Daniel Ivan',
        name: 'Daniel Ivan',
        initialFollowing: true,
    },
    {
        userName: 'FollaPerras',
        name: 'FollaPerras',
        initialFollowing: false,
    },
    {
        userName: 'ElonMusk',
        name: 'Elon Musk',
        initialFollowing: false,
    },
    {
        userName: 'Berserkiano',
        name: 'Berserkiano',
        initialFollowing: true,
    },
    {
        userName: 'Guts',
        name: 'Guts',
        initialFollowing: false,
    },
    {
        userName: 'Griffith',
        name: 'Griffith',
        initialFollowing: false,
    },
    ]

    return (
        <div className='App'>
            {
                users.map(({ userName, name, initialFollowing }) => {
                    return (
                        <TwitterFollowCard
                        key={userName}
                            userName={userName}
                            initialFollowing={initialFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </div>
    )
}