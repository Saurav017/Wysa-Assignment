import React from 'react'
import EditableCard from "../EditableCard";
import UserInputField from "../UserInputField";

const AddressInfo = ({ userData, onInputChange }) => {
  return (
    <EditableCard
      onSave={() => {
        console.log("PersonalInfo Saved:", userData);
      }}
    >
      {(isEditing) => (
        <div className='w-11/12'>
          <h2 className="text-xl font-bold mb-4">Address</h2>
          <div className='flex flex-col'>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <UserInputField
              label="Address"
              name="address"
              value={userData.address.address}
              isEditing={isEditing}
              onChange={onInputChange}
              type="text"
            />
            <UserInputField
              label="City"
              name="city"
              value={userData.address.city}
              isEditing={isEditing}
              onChange={onInputChange}
              type="text"
            />

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <UserInputField
              label="State"
              name="state"
              value={userData.address.state}
              isEditing={isEditing}
              onChange={onInputChange}
              type="text"
            />
            <UserInputField
              label="Postal Code"
              name="postalCode"
              value={userData.address.postalCode}
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

export default AddressInfo
