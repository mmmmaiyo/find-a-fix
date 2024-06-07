'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react'
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";

export default function Home() {

  const [categoryList,setCategoryList] = useState([]);

  useEffect(()=>{
    getCategoryList();
  },[])

  const getCategoryList = ()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories)
    })
  }

  return (
    <div>
      <h2>Good Luck Pookie Bear :p</h2>

      <CategoryList categoryList = {CategoryList} />
    </div>
  );
}
