import { useState } from "react";

export function TwitterFollowCard({ userName, children, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-follow-card-button is-following'
        : 'tw-follow-card-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img
                    alt={`El avatar de ${children}`}
                    src={`https://unavatar.io/${userName}`}
                    className='tw-follow-card-img'
                ></img>
                <div className='tw-follow-card-info'>
                    <strong>{children}</strong>
                    <span className='tw-follow-card-info-account'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-follow-card-text">{text}</span>
                    <span className="tw-follow-card-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}