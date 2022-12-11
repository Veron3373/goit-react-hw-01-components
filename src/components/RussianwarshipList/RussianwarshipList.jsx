import css from "./RussianwarshipList.module.css";
import PropTypes from "prop-types";
import { RussianwarshipList } from '../RussianwarshipItem/RussianwarshipItem';

export const Russianwar = ({ russianwarship }) => {
  return (
    <ul className={css.friendlist}>
      {russianwarship.map(({ id, icon, title, numerals }) => (
        <RussianwarshipList
          key={id}
          icon={icon}
          title={title}
          numerals={numerals}
        />
      ))}
    </ul>
  );
};

Russianwar.propTypes = {
  russianwarship: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
