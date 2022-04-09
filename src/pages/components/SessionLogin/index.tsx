import styles from './style.module.scss';

export default function SessionLogin() {
    return(
        <div className={styles.sessionLogin}>
            <img className={styles.imgLogin} src="/images/teste-aladin.png" alt="Nome"/>
            <p>Aladin</p>
        </div>
    );
}