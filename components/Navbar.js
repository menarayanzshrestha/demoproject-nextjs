import Link from 'next/link';
import { useAuth } from '../auth';
import {Button} from "antd"
import firebase from "firebase/app"

const Navbar = () => {

  const {user}=useAuth();
  return(
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Narayanz</a>
      <div className="collapse navbar-collapse">

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/user"><a className="nav-link">User</a></Link>
          </li>
        </ul>
      </div>
    </div>
    {
      user && user.uid ? 
        <Button 
          onClick={async () => {
            await firebase.auth().signOut();
            window.location.href = "/";
          }}
        >
          <a className="nav-link">{`<LOG OUT>`}</a>
        </Button> 
        :
        <Button  onClick={() =>
          window.location.href = "/login"
        }><a className="nav-link">{`<LOG IN>`}</a>
        </Button>
    }
  </nav>
)};

export default Navbar;