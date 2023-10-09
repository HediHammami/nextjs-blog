import Image from "next/image";
import styles from "./featured.module.css";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" fill />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            <b>Lorem, ipsum dolor sit</b> amet consectetur adipisicing elit.
          </h2>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            assumenda voluptates provident nam delectus, minima sit recusandae
            nobis soluta ipsum. Ex fugiat repudiandae eius, aliquid doloribus
            nostrum nesciunt veritatis fuga?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
