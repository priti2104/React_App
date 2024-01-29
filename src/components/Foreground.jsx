import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref= useRef(null);
    const data=[
        {
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize:".9mb",
            close:false,
            tag:{isOpen:true, tagTitle: "Download Now", tagColor:"green"},

        },
        {
            desc:"This is one of my favourite cards and really love it",
            fileSize:".9mb",
            close:true,
            tag:{isOpen:true, tagTitle: "Upload Now", tagColor:"blue"},

        },
        {
            desc:"Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize:".9mb",
            close:false,
            tag:{isOpen:false, tagTitle: "Download Now", tagColor:"green"},

        },
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item,index)=>(
      <Card data={item} reference={ref}/>
      
      ))}
     </div>
  )
}

export default Foreground
