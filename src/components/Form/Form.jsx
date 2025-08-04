import { Input } from '../Input/Input'
import { CustomFileInput } from '../Input/InputFile/InputFile'
import { DecorBottom } from '../DecorBottom/DecorBottom';
export function Form(){
    return(
        <section className='relative'>
            <form action="#" className='flex flex-col gap-4 p-2 text-Neutral-0 relative z-20'>
                <CustomFileInput nota='Upload your photo (JPG or PNG, max size: 500KB).' id='file-upload' label='Upload Avatar'/>
                <Input label='Full Name' type='text' id='nombre' className='input-info'/>
                <Input label='Email Address' type='email' id='correo' placeholder='example@email.com' className='input-info'/>
                <Input label=' GitHub Username' type='text' id='GitHubUser' placeholder='@yourusername' className='input-info'/>
                <Input type='submit' value='Generate My Ticket' className='bg-Orange-500 rounded-md p-2 text-Neutral-900 font-extrabold'/>
            </form>
            <DecorBottom />
        </section>
    );
}