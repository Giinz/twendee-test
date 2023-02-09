import Pagination from "../Pagination/Pagination";
import UserDetails from "../User/UserDetails";
import "./UserList.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type UserCraw = {
  name: { title: string; first: string; last: string };
  picture: { thumbnail: string };
  login: { username: string };
};
type User = {
  thumbnail: string;
  fullname: string;
  username: string;
};
const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = users.slice(firstPostIndex, lastPostIndex);
  const navigate = useNavigate();

  type Param = { page: string | undefined };
  const { page } = useParams<Param>();

  useEffect(() => {
    const isParamContainLetter = page && (+page > 10 || /[a-zA-Z]/g.test(page));
    if (isParamContainLetter) {
      navigate("/", { replace: true });
    }
  }, [page, navigate]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=100");
        const dataCraw = res.data.results;
        let users: User[] = [];
        dataCraw.forEach((item: UserCraw) => {
          const data = {} as User;
          data.fullname = `${item.name.title} ${item.name.first} ${item.name.last}`;
          data.thumbnail = item.picture.thumbnail;
          data.username = item.login.username;
          users = [data, ...users];
        });
        setUsers(users);
      } catch (err) {
        return err;
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Full name</th>
          </tr>
        </thead>
        <tbody>
          {currentPost.map((user, index: number) => {
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
      <Pagination
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPosts={users.length}
      />
    </div>
  );
};

export default UserList;
