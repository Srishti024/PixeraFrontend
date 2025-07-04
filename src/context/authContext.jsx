import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(
  //   JSON.parse(localStorage.getItem("user")) || null
  // );
  const [currentUser, setCurrentUser] = useState(
  JSON.parse(localStorage.getItem("user")) || {
    id: 1,
    name: "User",
    profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg",
  }
);


// const login = () => {
  // const user = {
  //   id: 1,
  //   name: "John Doe",
  //   profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg",
  // };
//   console.log("Logging in user:", user);
//   setCurrentUser(user);
// };
//  const logout = () => {
//   setCurrentUser(null);
//   localStorage.removeItem("user");
// };


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};