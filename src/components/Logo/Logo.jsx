import s from "./style.module.css";

export default function Logo({ image, title, subtitles }) {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={image} />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitles}</span>
    </>
  );
}
