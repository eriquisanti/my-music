/* eslint-disable react/no-unknown-property */
import SessionLogin from "../SessionLogin";
import styles from "./style.module.scss";

export function HeaderMusic() {
  return (
    <header className={styles.header}>
      <img src="/images/logo.png" alt="Logo Music" />
     <div className={styles.boxLogin}>
     <form>
        <input type="text" placeholder="Search" />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.6" clip-path="url(#clip0_3571_172)">
            <path
              d="M11.8403 4.83445C12.9943 7.54971 11.7286 10.6863 9.01331 11.8403C6.29805 12.9943 3.16142 11.7286 2.00746 9.01331C0.853497 6.29804 2.11919 3.16141 4.83445 2.00745C7.54972 0.85349 10.6863 2.11918 11.8403 4.83445Z"
              stroke="black"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 11L15 15"
              stroke="black"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3571_172">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </form>
      <SessionLogin />
     </div>
    </header>
  );
}
