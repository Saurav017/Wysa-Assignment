import React, {useState} from 'react'
import { MdEdit } from "react-icons/md";

const EditableCard = ({children}) => {

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    
  };
  return (
    <div className="p-4 mt-4 border-2 border-[#8bc5ec] bg-white rounded shadow flex justify-between items-start">
  <div className='w-full'>{typeof children === "function" ? children(isEditing) : children}</div>
  <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="px-2 py-2 border-2 text-sm min-w-[80px] flex items-center justify-center font-medium border-[#8bc5ec] text-[#8bc5ec] text[#8bc5ec] rounded "
        >
          <span className='pr-2'><MdEdit /></span>{isEditing ? "Save" : "Edit"}
        </button>
</div>
  )
}

export default EditableCard
