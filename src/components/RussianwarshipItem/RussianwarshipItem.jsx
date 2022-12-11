import css from "./RussianwarshipItem.module.css";
import PropTypes from "prop-types";

export const RussianwarshipList = ({ icon, title, numerals }) => {

  return <li className={css.item}>
    <img className={css.avatar} src={icon} alt="User avatar" width="48" />
    <span className={css.name}>{numerals}</span>
    <p className={css.nameText}>{title}</p>
    <p className={css.flag}></p>
  </li>
}


RussianwarshipList.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  numerals: PropTypes.number.isRequired,
}