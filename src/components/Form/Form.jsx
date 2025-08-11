import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input/Input';
import { CustomFileInput } from '../Input/InputFile/InputFile';
import { DecorMiddle } from '../DecorMiddle/DecorMiddle';

export function Form() {
    const navigate = useNavigate();

    const [error, setErrors] = useState({})
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        GitHubUser: '',
        file_upload: ''
    });
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev, [id]: value
        }));
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newError = {};

        if (!formData.file_upload) newError.file_upload = "Please enter a valid Avatar";
        if (!formData.nombre.trim()) newError.nombre = "Please enter a valid name for the ticket";
        if (!formData.correo.trim()) {
            newError.correo = "Please enter your email address";
        } else if (!emailRegex.test(formData.correo.trim())) {
            newError.correo = "Please enter a valid email address";
        }
        if (!formData.GitHubUser.trim()) newError.GitHubUser = "GitHub Username is required";

        if (Object.keys(newError).length > 0) {
            setErrors(newError);
            return;
        }

        navigate("/home", { state: formData });
    }
    return (
        <section className='relative sm:w-sm'>
            <form action="#" className='flex flex-col gap-6 p-2 text-Neutral-0 relative z-20 mb-17 w-full' onSubmit={handleSubmit}>
                <CustomFileInput
                    id='file_upload'
                    label='Upload Avatar'
                    onFileSelected={(imgUrl) => {
                        setFormData((prev) => ({ ...prev, file_upload: imgUrl }));
                        setErrors(prev => ({ ...prev, file_upload: undefined }))
                    }}
                    error={error.file_upload} />
                <Input
                    label='Full Name'
                    type='text' id='nombre'
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`input-info ${error.nombre ? 'border-Orange-500' : 'border-Neutral-300'}`}
                    error={error.nombre} />
                <Input
                    label='Email Address'
                    type='text'
                    id='correo'
                    value={formData.correo} onChange={handleChange} placeholder='example@email.com'
                    className={`input-info ${error.correo ? 'border-Orange-500' : 'border-Neutral-300'}`}
                    error={error.correo} />
                <Input
                    label=' GitHub Username'
                    type='text'
                    id='GitHubUser'
                    value={formData.GitHubUser}
                    onChange={handleChange}
                    placeholder='@yourusername'
                    className={`input-info ${error.GitHubUser ? 'border-Orange-500' : 'border-Neutral-300'}`}
                    error={error.GitHubUser} />
                <Input type='submit'
                    value='Generate My Ticket'
                    className='bg-Orange-500 rounded-lg p-2 text-Neutral-900 font-extrabold hover:bg-Orange-700 cursor-pointer w-full' />
                <DecorMiddle className={`sm:left-[364px] sm:top-[162px] sm:w-40`}/>
            </form>
        </section>
    );
}