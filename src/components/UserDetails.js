import React, { useState , useEffect} from "react";
import UserProfile from "./UserDetails/UserProfile";
import PersonalInfo from "./UserDetails/PersonalInfo";
import AddressInfo from './UserDetails/AddressInfo'
import CompanyInfo from './UserDetails/CompanyInfo'

const UserDetails = ({ user }) => {
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <UserProfile userData={userData} onInputChange={handleInputChange} />
      <PersonalInfo userData={userData} onInputChange={handleInputChange} />
      <AddressInfo userData={userData} onInputChange={handleInputChange} />
      <CompanyInfo userData={userData} onInputChange={handleInputChange} />
    </div>
  );
};

export default UserDetails;
