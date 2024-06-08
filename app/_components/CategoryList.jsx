import React from "react"
import Image from "next/image"

function CategoryList() {
    return (
        <h2> Hi </h2>
    )
}

/*function CategoryList({categoryList}) {
  return (
    <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categoryList.map((category,index)=>(
            <div>
                <Image src={category.icon.url}
                alt='icon'
                width={35}
                height={35}
                />
            </div>
        ))}
    </div>
  )
}*/
export default CategoryList;
