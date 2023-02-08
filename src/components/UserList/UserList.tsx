import UserDetails from "../User/UserDetails";
import "./UserList.scss"

type Props = {
    userDetails: { thumbnail?: string; fullname?: string; username?: string }[];
  }

const UserList = ({
  userDetails,
}: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Username</th>
          <th>Full name</th>
        </tr>
      </thead>
        <tbody>
          {userDetails.map((user, index: number) => {
            return (
              <UserDetails
                thumbnail={user.thumbnail}
                fullname={user.fullname}
                userName={user.username}
                key={index}
              />
            );
          })}
        </tbody>
    </table>
  );
};

export default UserList;
