import { useState } from "react";

export function TwitterFollowCard({ userName, children }) {
    const [isFollowing, setIsFollowing] = useState(false);

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
                    alt="El avatar de Tomás"
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
                    {text}
                </button>
            </aside>
        </article>
    )
}