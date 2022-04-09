import styles from "./../styles/music.module.scss";
import { HeaderMusic } from "./components/HeaderMusic";
import Musics from "./components/Musics";

export default function Music() {
  return (
    <body className={styles.body}>
      <main className={styles.content}>
        <section className={styles.musics}>
          <HeaderMusic />
          <div className={styles.boxAlbuns}>
              <h2>Original Soundtrack</h2>
              <div>
                <Musics/>
              </div>
          </div>
        </section>
        <section className={styles.listMusics}>

        </section>
      </main>
    </body>
  );
}
