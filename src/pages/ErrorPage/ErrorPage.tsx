import { Link , useRouteError} from "react-router-dom";
import "./ErrorPage.scss"

const NotFound = () => {
    let error = useRouteError();
  return (
    <div className="ErrorPage">
      <h1 >404</h1>
      <h2>Page Not Found</h2>
        <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
