import axios from "axios";
import  { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./components/Pagination/Pagination";
import UserList from "./components/UserList/UserList";


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
const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = users.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const getUsers = async () => {
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
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      <UserList userDetails={currentPost} />
      <Pagination
        currentPage={currentPage}
        totalPosts={users.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;
