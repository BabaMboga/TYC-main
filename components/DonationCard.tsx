'use client'
import { useState} from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



const DonationCard = () => {
    const [selectedButton, setSelectedButton] = useState("");
    const [selectedAmount, setSelectedAmount] = useState("")
   return(
   <> 
   
 <Card className='w-[400px]'>
    <CardHeader>
        <CardTitle className='flex gap-3 '> Donation amount 
            <Button 
            className=' border border-teal-200 text-xl'
            style={{ backgroundColor: selectedButton === 'onetime' ? 'teal' : 'transparent',
            color: selectedButton === 'onetime' ? 'white' : 'black' }}
            onClick={() => setSelectedButton('onetime')}>
                
                Once
            </Button>
            <Button
            className='border border-teal-200 text-xl'
            style={{ backgroundColor: selectedButton === 'monthly' ? 'teal' : 'transparent',
            color: selectedButton === 'monthly' ? 'white' : 'black' }}
            onClick={() => setSelectedButton('monthly')}>
                Monthly   
            </Button>
        </CardTitle>
        <CardDescription></CardDescription>
    </CardHeader>
    <CardContent className='flex flex-col gap-4'>
        <div className='flex gap-2'>
        <Button 
            className=' border border-teal-200 text-xl'
            style={{ backgroundColor: selectedAmount === '5' ? 'teal' : 'transparent',
            color: selectedAmount === '5' ? 'white' : 'black' }}
            onClick={() => setSelectedAmount('5')}>
                5
            </Button>
            <Button
            className='border border-teal-200 text-xl'
            style={{ backgroundColor: selectedAmount === '15' ? 'teal' : 'transparent',
            color: selectedAmount === '15' ? 'white' : 'black' }}
            onClick={() => setSelectedAmount('15')}>
                15
            </Button>
            <Button 
            className=' border border-teal-200 text-xl'
            style={{ backgroundColor: selectedAmount === '25' ? 'teal' : 'transparent',
            color: selectedAmount === '25' ? 'white' : 'black' }}
            onClick={() => setSelectedAmount('25')}>
                25
            </Button>
            <Button
            className='border border-teal-200 text-xl'
            style={{ backgroundColor: selectedAmount === '50' ? 'teal' : 'transparent',
            color: selectedAmount === '50' ? 'white' : 'black' }}
            onClick={() => setSelectedAmount('50')}>
                50  
            </Button>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="amount" className='text-lg'>Or your choice of</Label>
      <Input  id="amount" placeholder="$40" />
    </div>

    <Button className='bg-teal-700 text-xl'>Donate Now</Button>
    </CardContent>

 </Card>
 </>
   )

}

export default DonationCard