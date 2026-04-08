import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { type FormEvent } from 'react';
import { useState } from 'react';
import {toast} from "sonner"
import { FaSquareGithub } from "react-icons/fa6";


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
        <div className='flex items-center justify-between w-full  px-2 py-3 lg:p-4 border-b border-[#30363d] bg-[#161b22]'>

        <h1 className='font-medium text-lg lg:text-xl text-[#e6edf3] flex items-center lg:gap-2 gap-1'>
            <span><FaSquareGithub /></span> <span>Git Explorer</span></h1>

        <form onSubmit={handleSearch} className='flex items-center gap-x-2 w-2/3 lg:w-2/3 mb-4 lg:mb-0 bg-[#0d1117] p-2 rounded-lg border-[#30363d]'>
        <Label htmlFor='search' className='sr-only'>Search</Label>

        <Input type='text' id='search' value={text} onChange={(e) => setText(e.target.value)} placeholder='Search Github User...' className='flex-grow bg-[#0d1117] border-none text-[#8b949e]'/>
        <Button type='submit' className='bg-[#161b22] text-[#8b949e] border-[#30363d] cursor-pointer'>Search</Button>
    </form>
        
    </div>
    
  )
}

export default SearchForm
