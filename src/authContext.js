import { createContext, useState, useEffect, useContext } from "react";
import firebase from "firebase/app";

const authContext = createContext();

const useAuth = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(false);
    });
    return () => unsubscribe();
  }, []);

  const signIn = (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        setUser(user);
        resolve(user);
      } catch (e) {
        reject(e);
      }
    });
  };
  const signOut = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await firebase.auth().signOut();
        setUser(null);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
  return (
    <authContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
