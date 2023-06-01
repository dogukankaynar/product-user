import { createContext, useState, useContext, useEffect } from "react";


const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData"))||[]);


  //
  const editUser = (data) => {
    const filteredData=userData.filter((user)=>user.id!==data.id)
    filteredData.push(data);
    setUserData(filteredData)
  };

  const deleteUser=(id)=>{
    const filteredData=userData.filter((user)=>user.id!==id)
    setUserData(filteredData);
  }

  const addUser = (data) => {
    setUserData((prevUserList) => [...prevUserList, data]);
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const values = {
    userData,
    addUser,
    editUser,
    deleteUser
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
// eslint-disable-next-line react-hooks/rules-of-hooks
export const userContext = () => useContext(UserContext);

