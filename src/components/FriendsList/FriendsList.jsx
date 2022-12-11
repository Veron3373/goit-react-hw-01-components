import css from "./FriendsList.module.css";
import PropTypes from "prop-types";
import { FriendListItem } from '../FriendsListInem/FriendsListInem';
import {coinRandom} from './Random'

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ id, avatar, name }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={coinRandom()}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
