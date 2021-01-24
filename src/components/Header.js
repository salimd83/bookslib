import { Link } from "react-router-dom";
import { useAuth } from "../authContext";
import {Divider, Button} from '../ui';

function Header() {
  const auth = useAuth();
  return (
    <div>
      <h1>
        <Link to="/">Books library</Link>
      </h1>
      {auth.user ? (
        <div>Welcome, ${auth.user.email} / <Button onClick={async () => await auth.signOut()}>Sign Out</Button></div> 
      ) : (
        <Link to="/signin">SignIn</Link>
      )}

      <Divider />
    </div>
  );
}

export default Header;
