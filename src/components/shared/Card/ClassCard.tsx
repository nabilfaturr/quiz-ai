import React from 'react'

type ClassCardProps = {
    create? : boolean
}

const ClassCard = ({create} : ClassCardProps) => {

  return (
    <div>
        Class Card
    </div>
  )

}

export const NoClassFoundCard = () => {
    return(
        <div className='w-full h-32 border rounded-lg bg-slate-200 flex items-center justify-center px-10 py-5'>
            <p>No Class Found</p>
        </div>
    )
}


export default ClassCard
