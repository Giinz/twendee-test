import "./User.scss";
type Props = { thumbnail?: string; userName?: string; fullname?: string };

const UserDetails = ({ thumbnail, userName, fullname }: Props) => {
  return (
    <tr>
      <td>
        <div className="avatar">
          <img src={thumbnail} alt="avatar" />
        </div>
      </td>
      <td>
        <p>{userName}</p>
      </td>
      <td>
        <p>{fullname}</p>
      </td>
    </tr>
  );
};

export default UserDetails;
