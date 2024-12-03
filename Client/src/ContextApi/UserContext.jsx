import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userdata, setuserdata] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      let res = await fetch("http://localhost:4000/api/blog/welcome", {
        method: "GET",
        credentials: "include",
      });

      if (res.status === 401) {
        navigate("/login");
      } else if (res.ok) {
        let data = await res.json();
        setuserdata(data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userdata, setuserdata }}>
      {children}
    </UserContext.Provider>
  );
};
