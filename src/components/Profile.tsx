import styles from '../styles/components/Profile.module.css'

export function Profile()
{
    return (
        <div className={ styles.profileContainer }>
            <img src="https://github.com/Erikstellet.png" alt=""/>

            <div>
                <strong>Erik Stellet</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}