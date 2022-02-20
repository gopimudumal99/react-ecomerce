import React, { useContext} from "react";
import { Link } from 'react-router-dom'
import { AuthContext } from "../contexts/LoginProvider";
import {useSelector} from "react-redux"
function Navbar() {
  const { isAuth, Tokenfun, token, toggleAuth } = useContext(AuthContext);
  const state = useSelector((state) => state.Reducer);

  const btnClick = () => { 
    toggleAuth()
  }
  return (
    <div>
      <nav>
        <ul className="d-flex">
          <Link to='/products'>
          <li className="li">products</li>
          </Link>
          {isAuth ? (
            <li className="li" onClick={() => btnClick()}>
              Logout
            </li>
          ) : (
            <Link to="/login">
              <li className="li">Login</li>
              </Link>
          )}
          {isAuth ? (<li className="li">{ token.username }</li>) : (
            <Link to='/register'>
              <li className="li">Register</li>
            </Link>
          )}
          <Link to='/cart'>
          <li className="li">Cart ({state.length})</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar