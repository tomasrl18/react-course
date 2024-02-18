export function TwitterFollowCard({ userName, name, isFollowing }) {
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img
                    alt="El avatar de Tomás"
                    src={`https://unavatar.io/${userName}`}
                    className='tw-follow-card-img'
                ></img>
                <div className='tw-follow-card-info'>
                    <strong>{name}</strong>
                    <span className='tw-follow-card-info-account'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='tw-follow-card-button'>
                    { isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    )
}