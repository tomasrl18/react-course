import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'raigal_tomas',
        isFollowing: true,
        name: 'Tomás Raigal López'
    },
    {
        userName: 'adrian_marin_96',
        isFollowing: false,
        name: 'Adrián Marín Chorro'

    },
    {
        userName: 'FuenSansano',
        isFollowing: true,
        name: 'Fuensanta Sansano Montoya'
    },
    {
        userName: 'marmol89',
        isFollowing: false,
        name: 'Jose Manuel Mármol Alfocea'
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({userName, isFollowing, name}) => 
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            }
        </section>
    )
}