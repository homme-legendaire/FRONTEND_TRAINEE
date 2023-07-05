import React, { useState, useRef } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { useRecoilState } from "recoil";
import { colorState, userState } from "./atom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [code, setCode] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const [colors, setColors] = useRecoilState(colorState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = getAuth();
  const db = getFirestore();
  const modalRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential.user);
        checkMaster(userCredential.user.uid);
        setUser(userCredential.user);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          console.log("error", error);
          alert("존재하지 않는 이메일입니다.");
        }
      });
  };

  const checkMaster = async (uid) => {
    const userRef = await getDoc(doc(db, "user", uid));
    console.log(userRef.data().slave);
    if (userRef.data().slave) {
      fetchData(uid, true);
    } else {
      fetchData(uid, false);
    }
  };

  const fetchData = async (uid, isMaster) => {
    if (isMaster) {
      const userRef = await getDoc(doc(db, "presets", uid));
      if (userRef.data()) {
        setColors(userRef.data());
      } else {
        await setDoc(doc(db, "presets", uid), {
          colors,
        });
      }
    } else {
      const userRef = await getDoc(doc(db, "user", uid));
      if (userRef.data().master) {
        const masterRef = await getDoc(
          doc(db, "presets", userRef.data().master)
        );
        if (masterRef.data()) {
          setColors(masterRef.data());
        }
      }
    }
  };

  const registerHandler = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        alert("회원가입이 완료되었습니다.");
        setIsModalOpen(false);
        setRegisterEmail("");
        setRegisterPassword("");
        console.log(userCredential.user.uid);
        if (code.length > 0) {
          addSlave(userCredential.user.uid);
        } else {
          setDoc(doc(db, "user", userCredential.user.uid), { slave: [] });
        }
        setCode("");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("error", error);
          alert("이미 존재하는 이메일입니다.");
        }
      });
  };

  const addSlave = async (uid) => {
    const userRef = await getDoc(doc(db, "user", code));
    if (userRef.data().slave) {
      await updateDoc(doc(db, "user", code), { slave: arrayUnion(uid) });
      setDoc(doc(db, "user", uid), { master: code });
    } else {
      const slaveRef = await getDoc(doc(db, "user", code));
      if (slaveRef.data().master) {
        await updateDoc(doc(db, "user", slaveRef.data().master), {
          slave: arrayUnion(uid),
        });
        setDoc(doc(db, "user", uid), {
          master: slaveRef.data().master,
        });
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <div>
      <h2 class="text-2xl">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className="border-2 border-gray-300"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border-2 border-gray-300"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="border-2 border-gray-600 m-1 w-1/6"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Create Account
        </button>
        <button className="border-2 border-gray-600 m-1 w-1/6" type="submit">
          Log In
        </button>
      </form>
      {isModalOpen && (
        <div className="modal" ref={modalRef} onClick={handleModalClick}>
          <div className="modal-content">
            <h2 className="text-2xl">Registration</h2>
            <label>Email</label>
            <br />
            <input
              className="border-2 border-gray-300"
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className="border-2 border-gray-300"
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <br />
            <label>Recommender Code</label>
            <br />
            <input
              className="border-2 border-gray-300"
              type="text"
              placeholder="Recommender Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <br />
            <button
              className="border-2 border-gray-600 m-1 w-1/2"
              onClick={registerHandler}
            >
              Register
            </button>
            <button
              className="border-2 border-gray-600 m-1 w-1/3"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
