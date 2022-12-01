import styles from "styles/contact.module.css";

export default function Contact() {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>自己紹介</h3>
      <p className={styles.profile}>
        現在自宅の警備をしている24歳独身野郎です。建築系大学を卒業後、
        施工管理として就職し、わずか4か月で退職。一級建築士学科を合格し、
        転職を志すも、製図不合格。
        <br />
        趣味は、アイドルオタク。特技は、3分で 風呂にはいれること。
        <br />
        一級建築士の自作問題や、アイドル、プログラミング
        について書いていきます。よかったら見てやってください。
      </p>
    </div>
  );
}
