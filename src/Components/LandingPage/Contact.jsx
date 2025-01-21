import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const handleContact = () =>{
        toast.success("Thank you for contacting me.I will get back to you soon")
    }
    return (
        <div className=' my-24 p-4'>
            <h1 className='text-5xl text-white flex justify-center items-center '>Let's Design Together</h1>
            <p className='text-white text-center my-4'>
            We value your feedback and inquiries. Please fill out the form below, and our team will respond promptly.
            <br />
          This straightforward message encourages users to reach out and assures them of a timely response.
            </p>
            <div className=' flex justify-center items-center gap-3 mt-10 '>
            <input type="text" placeholder="Enter Your Emai" className="input input-bordered bg-white w-full max-w-lg" />
           <button onClick={handleContact} className='text-white font-semibold btn bg-[#FD6F00] '>Contact Me</button>
            </div>
            <Toaster/>
        </div>
    );
};

export default Contact;