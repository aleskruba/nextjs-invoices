"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"
import {Loader2} from 'lucide-react'

interface iAddProps {
  text:string;
}

export function SubmitButton({text}:iAddProps){
    const {pending} = useFormStatus()

    return (
        <>
        {pending ? (
         <Button disabled className="w-full"><Loader2 className="size-4 mr-2 animate-spin"/> Please wait ...</Button>
        ) : (
          <Button type="submit" className="w-full">{text}</Button>
        )}
      </>
      
    )
}