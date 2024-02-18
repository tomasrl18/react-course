import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formattedUserName = <span>@raigal_tomas</span>

    return (
        <section className='App'>
            <TwitterFollowCard
                formattedUserName={formattedUserName}
                userName="raigal_tomas"
                name="Tomás Raigal López"
                isFollowing={false}
            ></TwitterFollowCard>
            <TwitterFollowCard
                formattedUserName={formattedUserName}
                userName="adrian_marin_96"
                name="Adrián Marín Chorro"
                isFollowing
            ></TwitterFollowCard>
            <TwitterFollowCard
                formattedUserName={formattedUserName}
                userName="FuenSansano"
                name="Fuensanta Sansano Montoya"
                isFollowing={false}
            ></TwitterFollowCard>
        </section>
    )
}