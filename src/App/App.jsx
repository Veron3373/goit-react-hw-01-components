import css from "./App.module.css";

// Profile картинка
import { Profile } from '../components/User/BordCArf'
import user from '../components/Utils/User.json';
// Statistics чтатистика
import { Statistics } from '../components/Statistics/Sratistics';
import statistics from '../components/Utils/Statistics.json';
// FriendList Друзі
import { FriendList } from '../components/FriendsList/FriendsList';
import friends from '../components/Utils/Friends.json';
// TransactionHistory Історія
import { TransactionHistory } from '../components/TransactonHistory/TransactionHistory';
import transactions from '../components/Utils/Transactions.json';

// Russianwar Війна
import { Russianwar } from '../components/RussianwarshipList/RussianwarshipList';
import russianwarship from '../components/Utils/Russianwarship.json';


export const App = () => {
  return (
    <div>
      <div className={css.item}>
        <div >
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={statistics} />
        </div>
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
      <div className={css.war}>
        <Russianwar russianwarship={russianwarship} />
      </div>
    </div>
    
  );
};
