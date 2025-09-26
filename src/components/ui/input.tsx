import * as React from "react"
import { CiSearch } from "react-icons/ci";

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="flex text-3xl items-center  rounded-md text-green-600 px-3 py-2 shadow-xl ">
      <CiSearch /> 
      <input
      type={type}
      data-slot="input"
      className={cn(
        " placeholder:text-muted-foreground    h-9 w-[25rem] min-w-0 rounded-md -transparent px-4 py-7 text-2xl  outline-none file:inline-flex file:h-7  file:text-xl file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
        
        className
      )}
      
      {...props}
      >
      </input>      
    </div>
  )
}

export { Input }
