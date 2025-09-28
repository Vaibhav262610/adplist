import React from 'react'
import { CiSearch } from 'react-icons/ci'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from './ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { VscSettings } from 'react-icons/vsc'
import { IoArrowBack } from 'react-icons/io5'
import { Button } from './ui/button'

const Mentors = ({ active, setActive }: { active: "mentor" | "group"; setActive: (val: "mentor" | "group") => void }) => {


    const selectValues = [
     "All",
     "Motivation",
     "Tools",
     "Skills",
     "Leadership",
     "Mentorship",
     "Job search",
     "Career advice",
     "Expertise",
    ]

    
  return (
    <div>
        {active === "group" ? 
        <div className='flex ml-32 gap-5'>
            <div className="flex text-3xl items-center  rounded-md text-black px-3 py-2 border border-black/40 shadow-sm ">
                <CiSearch  className='text-lg'/> 
                <input
                    placeholder='Search by name or host '
                    data-slot="input"
                    className=
                    " placeholder:text-muted-foreground font-semibold h-9 w-[25rem] min-w-0 rounded-md -transparent px-4 py-3  text-2xl  outline-none file:inline-flex file:h-7  file:text-xl file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base" />
            </div>
            <Select>
                <SelectTrigger className="text-md py-6 w-[150px]">
                    <SelectValue className='' placeholder="Motivation" />
                </SelectTrigger>
                <SelectContent>
                    <div className='flex flex-col p-4'>
                        {selectValues.map((item) => (
                            <SelectItem value={item} key={item}>{item}</SelectItem>
                        ))
                    }
                </div>
                </SelectContent>
            </Select>
        </div>
        :
           <div className='flex ml-32 gap-5'>
            <div className="flex text-3xl items-center  rounded-md text-black px-3 py-2 border border-black/40 shadow-sm ">
                <CiSearch  className='text-lg'/> 
                <input
                    placeholder='Search by name, company, role'
                    data-slot="input"
                    className=
                    " placeholder:text-muted-foreground font-semibold h-9 w-[55rem] min-w-0 rounded-md -transparent px-4 py-3  text-2xl  outline-none file:inline-flex file:h-7  file:text-xl file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base" />
            </div>
           <Sheet>
                <SheetTrigger className='flex items-center gap-2 text-lg font-semibold border border-black/40 rounded-md shadow-sm py-4 px-8 cursor-pointer hover:bg-black hover:text-white transition-all'>
                    <VscSettings /> 
                    Filters
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className='flex felx-col justify-between py-8 h-screen'>
                    <SheetTitle className='text-3xl font-black flex items-center  gap-3'><IoArrowBack/> Filters</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                    <div className='flex justify-between items-center'>
                        <button className='font-semibold py-5 rounded-sm cursor-pointer  px-8 '>Clear All</button>
                        <button  className='bg-[#5facad] text-white font-bold py-5 cursor-pointer rounded-sm px-4'>Clear all filters</button>
                    </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
        }
    </div>
)
}

export default Mentors