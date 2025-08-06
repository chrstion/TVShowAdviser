import s from "./style.module.css";
import { SMALL_IMG_BASE_URL } from "../../config";

export default function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={() => onClick(tvShow)} className={s.container}>
      <img
        alt={tvShow.name}
        className={s.img}
        src={SMALL_IMG_BASE_URL + tvShow.backdrop_path}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
