import styles from './style.module.scss';

export default function Musics() {
    return(
        <div className={styles.music}>
            <img src="/images/teste-aladin.png" alt="Aladin" />
            <div>
                <p>Aladin</p>
                <span>Produtora lampada Magica</span>
            </div>
        </div>
    );
}