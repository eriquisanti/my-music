import ButtonLogin from "../ButtonLogin";
import styles from "./style.module.scss";

export function HeaderHome() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src="/images/logo.png" alt="Logo Music" />
        <div className={styles.boxLogin}>
          <nav>
            <a className={styles.active} href="">
              Home
            </a>
            <a href="">Music</a>
          </nav>
          <ButtonLogin />
        </div>
      </div>
    </header>
  );
}
