import { PlusCircleIcon } from 'lucide-react'
import React from 'react'

const CreateClassButton = () => {
  return (
    <form>
        <div className='bg-green-600 hover:bg-opacity-85 h-60 text-white rounded-lg flex-shrink-0'>
            <button type="submit" className=' w-full h-full flex flex-col items-center justify-center'>
                <PlusCircleIcon/>
                Create Class
            </button>
        </div>
    </form>
  )
}

export default CreateClassButton
