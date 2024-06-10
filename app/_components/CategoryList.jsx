import React from "react"
import Image from "next/image"

function CategoryList({categoryList}) {
  return (
    <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categoryList.map((category,index)=>(
            <div className={`flex flex-col items-center justify-center gap-2
            bg-orange-100 p-5 rounded-lg
            cursor-pointer hover:scale-110 transition-all ease-out
            `}>
                <Image src={category.icon.url}
                alt='icon'
                width={50}
                height={50}
                />
                <h2 className="text-primary">{category.name}</h2>
            </div>
        ))}
    </div>
  )
}
export default CategoryList;
