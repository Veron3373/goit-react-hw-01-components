import css from "./FriendsListInem.module.css";
import PropTypes from "prop-types";
import { BiPhoneCall, BiPhoneOff } from "react-icons/bi";

export const FriendListItem = ({ avatar, name, isOnline }) => {

  return <li className={css.item}>
    <span className={isOnline ? css.isonline : css.isoffline}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>

    {/* //! видалити */}
    <span className={isOnline ? css.phoneCall : css.phoneOff}> {isOnline ? <BiPhoneCall /> : <BiPhoneOff />}</span>

  </li>
}


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}