import React from "react";
import EditableCard from "../EditableCard";

function UserProfile({ userData, onInputChange }) {
  return (
    <EditableCard
      onSave={() => {
        console.log("UserProfile Saved:", userData);
      }}
    >
      {(isEditing) => (
        <div className="w-11/12">
          <div className="flex flex-col">
            {/* First Name */}
            <div>
              
              {isEditing ? (
                <div className="flex">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={userData.firstName}
                  onChange={onInputChange}
                  className="mt-1 mr-2 p-2 block w-full rounded-md border-2 border-[#8bc5ec] "
                />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={userData.lastName}
                  onChange={onInputChange}
                  className="mt-1 p-2 block w-full rounded-md border-2 border-[#8bc5ec] "
                />
                </div>
              ) : (
                <p className="text-black mb-4 text-xl font-bold  mt-1">{`${userData.firstName} ${userData.lastName}`}</p>
              )}
            </div>

            {/* Company Title */}
            <div>
              
              {isEditing ? (
                <input
                  type="text"
                  name="companytitle"
                  id="companytitle"
                  value={userData.company.title}
                  onChange={onInputChange}
                  className="mt-1 p-2 block w-full rounded-md border-2 border-[#8bc5ec] "
                />
              ) : (
                <p className="text-black font-semibold mt-1">{userData.company.title || "N/A"}</p>
              )}
            </div>

            {/* Company Address */}
            <div>
              {isEditing ? (
                <input
                  type="text"
                  name="companyaddress"
                  id="companyaddress"
                  value={`${userData.company.address.city}, ${userData.company.address.state}`}
                  onChange={onInputChange}
                  className="mt-1 p-2 block w-full rounded-md border-2 border-[#8bc5ec] "
                />
              ) : (
                <p className="text-black font-semibold mt-1">
                  {`${userData.company.address.city}, ${userData.company.address.state}` ||
                    "N/A"}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </EditableCard>
  );
}

export default UserProfile;
