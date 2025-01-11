import React from 'react'
import EditableCard from "../EditableCard";
import UserInputField from "../UserInputField";

const CompanyInfo = ({ userData, onInputChange }) => {
  return (
    <EditableCard
    onSave={() => {
      console.log("PersonalInfo Saved:", userData);
    }}
  >
    {(isEditing) => (
      <div className='w-11/12'>
        <h2 className="text-xl font-bold mb-4">Company</h2>
        <div className='flex flex-col'>
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <UserInputField
                label="Department"
                name="dept"
                value={userData.company.department}
                isEditing={isEditing}
                onChange={onInputChange}
                type="text"
              />
              <UserInputField
                label="Name"
                name="companyName"
                value={userData.company.name}
                isEditing={isEditing}
                onChange={onInputChange}
                type="text"
              />
            </div>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <UserInputField
                label="Title"
                name="companyTitle"
                value={userData.company.title}
                isEditing={isEditing}
                onChange={onInputChange}
                type="text"
              />
                <UserInputField
                label="Address"
                name="CompanyAddress"
                value={`${userData.company.address.city}, ${userData.company.address.state}`}
                isEditing={isEditing}
                onChange={onInputChange}
                type="text"
              />
            </div>
            </div>
         
            </div>
    )}
  </EditableCard>
  )
}

export default CompanyInfo
