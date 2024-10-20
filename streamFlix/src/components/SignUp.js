import React, { useState, useRef } from "react";
import { BG_URL } from "../utils/constants";
import { validation } from "../utils/validation";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword } from "firebase/auth";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate =useNavigate()
  const [issignup, setissignup] = useState(true);
  const [formError, setFormError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name =useRef(null);
  const dispatch =useDispatch();

  const handleForm = () => {
    // validation(email,password)
    const errorMessage = validation(
      email.current.value,
      password.current.value
    );
    setFormError(errorMessage);
    if (errorMessage) return;

    if (!issignup) {
      // signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const User = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName:name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const { uid,email , displayName} = auth.currentUser;
            dispatch(addUser({uid,email,displayName}))
            navigate("/browse")
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError("user already exist!")
          // ..
        });
    } else {

      // sign in logic
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError("Invalid credentials!")
        });
    }
  };

  const issignin = () => {
    setissignup(!issignup);
  };
  return (
    <div className="w-990px my-0 mx-auto">
    <div className=" text-white md:h-screen h-[932px]">
      <Header/>
      <div >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-opacity-85 md:my-36 my-[15rem] mx-auto right-0 left-0 absolute z-30 md:w-[30rem] w-[25rem] md:h-[40rem] h-[30rem] flex flex-col m-0 bg-black justify-center items-center   "
        >
          <h1 className="font-bold text-3xl m-5 ">{issignup ? "Sign In" : "Sign Up"}</h1>
          {!issignup && (
            <>
              <input  ref={name} className=" text-black w-4/6 px-2  py-3 rounded-sm m-1"
                type="text"
                placeholder="Full Name"
              />
              
            </>
          )}
          <input
            ref={email}
            className=" text-black w-4/6 px-2  py-3 rounded-sm m-1"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className=" text-black w-4/6 px-2  py-3 rounded-sm m-1"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-600 text-left ">{formError}</p>
          <button
            onClick={handleForm}
            className=" w-4/6 px-2  py-3 rounded-sm m-2 bg-red-700"
          >
            {issignup ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-blue-700 cursor-pointer" onClick={issignin}>
            {issignup ? "create account" : "login account"}
          </p>
        </form>
      </div>
      <div className="absolute z-0">
        <img alt="background" className=" md:w-screen md:h-auto  h-screen object-cover" src={BG_URL} />
      </div>
    </div>
    </div>
  );
};

export default SignUp;
