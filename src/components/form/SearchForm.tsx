import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type FormEvent } from 'react';
import { useState } from 'react';
import {toast} from "sonner"


type SearchFormProps = {
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

const SearchForm = ({userName, setUserName}: SearchFormProps) => {
    const [text, setText] = useState(userName);

    const handleSearch = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text === ''){
            toast("Please enter a valid username")
            console.log("Please enter a username")
            return;
        }

        setUserName(text)
    }
    return (
        <div className='flex items-center justify-between w-full lg:w-2/3 p-4'>

        <h1 className='font-bold text-md lg:text-4xl'>Git Explorer</h1>

        <form onSubmit={handleSearch} className='flex items-center gap-x-2 w-full lg:w-2/3 mb-4 lg:mb-0'>
        <Label htmlFor='search' className='sr-only'>Search</Label>
        <Input type='text' id='search' value={text} onChange={(e) => setText(e.target.value)} placeholder='Search Github User...' className='flex-grow bg-background'/>
        <Button type='submit'>Search</Button>
    </form>
        
    </div>
    
  )
}

export default SearchForm
