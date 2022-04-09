/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import { HeaderHome } from "./components/HeaderHome";

import styles from "../styles/home.module.scss";
import ButtonMusic from "./components/ButtonMusic";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyMusic</title>
      </Head>
      <HeaderHome />
      <main className={styles.content}>
        <section className={styles.hero}>
          <div>
            <p>
              Ideal platform for you to enjoy <span>your favorite music</span>.
            </p>
            <ButtonMusic />
          </div>
          <img src="images/people-music.png" />
        </section>
        <section className={styles.info}>
          <div className={styles.box}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="white" fill-opacity="0.1" />
              <path
                d="M54 55H27C26.4696 55 25.9609 54.7893 25.5858 54.4142C25.2107 54.0391 25 53.5304 25 53V26C25 25.7348 25.1054 25.4804 25.2929 25.2929C25.4804 25.1054 25.7348 25 26 25C26.2652 25 26.5196 25.1054 26.7071 25.2929C26.8946 25.4804 27 25.7348 27 26V53H54C54.2652 53 54.5196 53.1054 54.7071 53.2929C54.8946 53.4804 55 53.7348 55 54C55 54.2652 54.8946 54.5196 54.7071 54.7071C54.5196 54.8946 54.2652 55 54 55Z"
                fill="#3671E9"
              />
              <path
                d="M33.75 51H31.25C30.6533 51 30.081 50.7629 29.659 50.341C29.2371 49.919 29 49.3467 29 48.75V39.25C29 38.6533 29.2371 38.081 29.659 37.659C30.081 37.2371 30.6533 37 31.25 37H33.75C34.3467 37 34.919 37.2371 35.341 37.659C35.7629 38.081 36 38.6533 36 39.25V48.75C36 49.3467 35.7629 49.919 35.341 50.341C34.919 50.7629 34.3467 51 33.75 51Z"
                fill="#3671E9"
              />
              <path
                d="M42.75 51H40.25C39.6533 51 39.081 50.7629 38.659 50.341C38.2371 49.919 38 49.3467 38 48.75V36.25C38 35.6533 38.2371 35.081 38.659 34.659C39.081 34.2371 39.6533 34 40.25 34H42.75C43.3467 34 43.919 34.2371 44.341 34.659C44.7629 35.081 45 35.6533 45 36.25V48.75C45 49.3467 44.7629 49.919 44.341 50.341C43.919 50.7629 43.3467 51 42.75 51V51Z"
                fill="#3671E9"
              />
              <path
                d="M51.7274 51H49.2274C48.6307 51 48.0584 50.7629 47.6364 50.341C47.2145 49.919 46.9774 49.3467 46.9774 48.75V32.25C46.9774 31.6533 47.2145 31.081 47.6364 30.659C48.0584 30.2371 48.6307 30 49.2274 30H51.7274C52.3242 30 52.8965 30.2371 53.3184 30.659C53.7404 31.081 53.9774 31.6533 53.9774 32.25V48.75C53.9774 49.3467 53.7404 49.919 53.3184 50.341C52.8965 50.7629 52.3242 51 51.7274 51Z"
                fill="#3671E9"
              />
            </svg>

            <div>
              <p>R$30B</p>
              <span>Digital Currency Exchanged</span>
            </div>
          </div>
          <div className={styles.box}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.1" cx="40" cy="40" r="40" fill="white" />
              <path
                d="M45.9875 25.0453C44.4672 23.4039 42.3438 22.5 40 22.5C37.6438 22.5 35.5133 23.3984 34 25.0297C32.4703 26.6789 31.725 28.9203 31.9 31.3406C32.2469 36.1156 35.8805 40 40 40C44.1195 40 47.7469 36.1164 48.0992 31.3422C48.2766 28.9437 47.5266 26.707 45.9875 25.0453Z"
                fill="#3671E9"
              />
              <path
                d="M53.7499 57.5H26.2499C25.8899 57.5047 25.5335 57.4291 25.2064 57.2786C24.8794 57.1282 24.59 56.9068 24.3593 56.6305C23.8515 56.0234 23.6468 55.1945 23.7983 54.3562C24.4577 50.6984 26.5155 47.6258 29.7499 45.4687C32.6233 43.5539 36.2632 42.5 39.9999 42.5C43.7366 42.5 47.3765 43.5547 50.2499 45.4687C53.4843 47.625 55.5421 50.6977 56.2015 54.3555C56.353 55.1937 56.1483 56.0227 55.6405 56.6297C55.4099 56.9062 55.1205 57.1277 54.7935 57.2783C54.4664 57.4288 54.1099 57.5046 53.7499 57.5Z"
                fill="#3671E9"
              />
            </svg>

            <div>
              <p>R$30B</p>
              <span>Digital Currency Exchanged</span>
            </div>
          </div>
          <div className={styles.box}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.1" cx="40" cy="40" r="40" fill="white" />
              <path
                d="M52.3743 27.6364C50.7522 25.9982 48.8224 24.6967 46.6958 23.8066C44.5692 22.9166 42.2877 22.4554 39.9823 22.4498C37.6769 22.4441 35.3931 22.894 33.2621 23.7736C31.1312 24.6532 29.195 25.9452 27.5648 27.5753C25.9347 29.2055 24.6427 31.1417 23.7631 33.2727C22.8835 35.4036 22.4336 37.6874 22.4393 39.9928C22.4449 42.2982 22.9061 44.5797 23.7962 46.7063C24.6862 48.8329 25.9877 50.7627 27.6259 52.3848C29.248 54.023 31.1778 55.3245 33.3044 56.2146C35.4311 57.1047 37.7126 57.5658 40.018 57.5715C42.3233 57.5772 44.6071 57.1273 46.7381 56.2477C48.8691 55.3681 50.8052 54.0761 52.4354 52.4459C54.0655 50.8158 55.3575 48.8796 56.2371 46.7486C57.1168 44.6176 57.5667 42.3338 57.561 40.0285C57.5553 37.7231 57.0942 35.4416 56.2041 33.3149C55.314 31.1883 54.0125 29.2585 52.3743 27.6364ZM25.0001 40.0106C24.9996 38.6831 25.1756 37.3613 25.5236 36.0802C26.097 37.3145 26.9298 38.3809 27.4962 39.6473C28.2282 41.2755 30.1939 40.8239 31.0618 42.2505C31.8322 43.5169 31.0095 45.1184 31.5861 46.4434C32.0048 47.4052 32.9923 47.6153 33.6736 48.3184C34.3697 49.0278 34.3548 49.9997 34.4611 50.9247C34.581 52.0115 34.7754 53.0888 35.0431 54.1489C35.0431 54.1567 35.0431 54.1653 35.0493 54.1731C29.2032 52.12 25.0001 46.5473 25.0001 40.0106ZM40.0001 55.0106C39.1624 55.0104 38.3262 54.9403 37.5001 54.8013C37.5087 54.5895 37.5126 54.3919 37.5337 54.2544C37.7236 53.0122 38.3454 51.7973 39.1845 50.8677C40.0134 49.9505 41.1493 49.3302 41.8493 48.2895C42.5353 47.2739 42.7407 45.9067 42.4579 44.72C42.0415 42.9669 39.6595 42.3817 38.3751 41.4309C37.6368 40.8841 36.9798 40.0387 36.0103 39.97C35.5634 39.9387 35.1892 40.0348 34.7462 39.9208C34.34 39.8153 34.0212 39.5966 33.5884 39.6536C32.7798 39.7598 32.2697 40.6239 31.4009 40.5067C30.5767 40.3966 29.7275 39.4317 29.54 38.6466C29.2993 37.6372 30.0978 37.3098 30.9532 37.22C31.3103 37.1825 31.7111 37.1419 32.054 37.2731C32.5056 37.4403 32.7189 37.8825 33.1243 38.1059C33.8845 38.5231 34.0384 37.8567 33.922 37.1817C33.7478 36.1708 33.5447 35.7591 34.4462 35.063C35.0712 34.5833 35.6056 34.2364 35.5056 33.3747C35.4462 32.8684 35.1689 32.6395 35.4275 32.1356C35.6236 31.752 36.1618 31.4059 36.5126 31.177C37.4181 30.5864 40.3915 30.6302 39.1767 28.977C38.8197 28.4919 38.1611 27.6247 37.5361 27.5059C36.7548 27.3583 36.4079 28.2302 35.8634 28.6145C35.3009 29.0122 34.2056 29.4637 33.6423 28.8489C32.8845 28.0216 34.1447 27.7505 34.4236 27.1723C34.5525 26.9028 34.4236 26.5286 34.2064 26.1762C34.4881 26.0575 34.7746 25.9473 35.0657 25.8458C35.2482 25.9805 35.4647 26.0617 35.6907 26.0802C36.2134 26.1145 36.7064 25.8317 37.1626 26.188C37.6689 26.5786 38.0337 27.0723 38.7056 27.1942C39.3556 27.3122 40.0439 26.9333 40.2048 26.2677C40.3025 25.863 40.2048 25.4356 40.1111 25.0177C43.0329 25.0345 45.8855 25.9095 48.3142 27.5341C48.1579 27.4747 47.9712 27.4817 47.7407 27.5887C47.2665 27.8091 46.5947 28.37 46.5392 28.9262C46.4759 29.5575 47.4071 29.6466 47.8493 29.6466C48.5134 29.6466 49.1861 29.3497 48.972 28.5825C48.879 28.2497 48.7525 27.9036 48.5486 27.6942C49.0387 28.0343 49.5083 28.4032 49.9548 28.7989C49.9478 28.8059 49.9407 28.8122 49.9337 28.82C49.4837 29.2887 48.9611 29.6598 48.6532 30.2302C48.4361 30.6317 48.1915 30.8223 47.7517 30.9262C47.5095 30.9833 47.2329 31.0044 47.0298 31.1669C46.4642 31.6122 46.7861 32.6825 47.322 33.0036C47.9993 33.4091 49.004 33.2184 49.515 32.6395C49.9142 32.1864 50.1493 31.3997 50.8673 31.4005C51.1834 31.3998 51.487 31.5236 51.7126 31.745C52.0095 32.0528 51.9509 32.3403 52.0142 32.7247C52.1259 33.4075 52.7282 33.0372 53.0946 32.6927C53.3617 33.168 53.6027 33.6575 53.8165 34.1591C53.4134 34.7395 53.0931 35.3723 52.1236 34.6958C51.5431 34.2903 51.1861 33.702 50.4571 33.5192C49.8204 33.363 49.1681 33.5255 48.5392 33.6341C47.8243 33.7583 46.9767 33.813 46.4345 34.3544C45.9103 34.8762 45.6329 35.5747 45.0751 36.0989C43.9962 37.1145 43.5407 38.2231 44.2392 39.6591C44.9111 41.0395 46.3165 41.7887 47.8329 41.6903C49.3228 41.5911 50.8704 40.727 50.8275 42.8919C50.8118 43.6583 50.972 44.1888 51.2071 44.9005C51.4251 45.5567 51.4103 46.1927 51.4603 46.87C51.5078 47.6632 51.6318 48.4499 51.8306 49.2192C50.4303 51.0222 48.6364 52.4812 46.586 53.485C44.5357 54.4887 42.283 55.0105 40.0001 55.0106Z"
                fill="#3671E9"
              />
            </svg>

            <div>
              <p>R$30B</p>
              <span>Digital Currency Exchanged</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}