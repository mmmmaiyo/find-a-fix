import React from 'react'
import { Input } from '@/components/ui/input'
import { Search, SearchCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Hero() {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-17'>
      <h2 className='font-bold text-[46px] text-center'>
        Find Home <span className='text-primary'>Service and Repairs</span> 
        <br></br> Near You</h2>
      <h2 className='text-xl text-gray-400'>Select from a range of service providers</h2>
      <div className='mt-4 flex gap-4 items-center'>
        <Input placeholder='Search'
        className='rounded-full md:w-[350px]'/>
        <Button className="rounded-full h-[46px]">
            <Search className='h-4 w-4'/>
        </Button>      
      </div>
    </div>
  )
}

export default Hero
