import React, { useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { watchvideo } from "../utils/watchSlice";

const Header = () => {
  const dispatch =useDispatch()
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const navigate = useNavigate();

  const unsubscribe = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        navigate("/")
        // ...
      }
    });

    return () => unsubscribe;
  }, []);
  return (
    <div className="fixed top-0 z-10 flex justify-between w-screen bg-gradient-to-b from-black">
      <div className=" max-w-40 my-2 ">
        <img className="cursor-pointer" onClick={()=>{
          dispatch(watchvideo(false))
          navigate("/browse")
        }} alt="logo" src={LOGO_URL} />
      </div>
      {auth.currentUser && (
        <div className="flex justify-center items-center">
          <button
            onClick={handleSignout}
            className=" bg-red-700 rounded-lg w-20 p-2 my-6 mx-9 float-right"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
