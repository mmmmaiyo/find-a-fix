'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react'
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {

  const [categoryList,setCategoryList]=useState([]);

  useEffect(()=>{
    getCategoryList();
  },[])

  const getCategoryList = ()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }

  return (
    <div>
      <Hero/>
      <CategoryList categoryList = {categoryList} />
    </div>
  );
}
