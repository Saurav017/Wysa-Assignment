import React from "react";
import EditableCard from "../EditableCard";
import UserInputField from "../UserInputField";

const PersonalInfo = ({ userData, onInputChange }) => {
  return (
    <EditableCard
      onSave={() => {
        console.log("PersonalInfo Saved:", userData);
      }}
    >
      {(isEditing) => (
        <div className="w-11/12">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <div className='flex flex-col'>
            <div className=" mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <UserInputField
                label="Email"
                name="email"
                value={userData.email}
                isEditing={isEditing}
                onChange={onInputChange}
                type="email"
              />
              <UserInputField
                label="Phone"
                name="phone"
                value={userData.phone}
                isEditing={isEditing}
                onChange={onInputChange}
                type="tel"
              />
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
              <UserInputField
                label="Birth Date"
                name="birthDate"
                value={userData.birthDate}
                isEditing={isEditing}
                onChange={onInputChange}
                type="text"
              />
             
            </div>
          </div>
        </div>
      )}
    </EditableCard>
  );
};

export default PersonalInfo;
