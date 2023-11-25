"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import image from '../assets/image/aws_logo_dark.png';
import Link from 'next/link';

const page = () => {
  const [formData, setFormData] = useState({
    type_of_issue: '',
    description: '',
    email: '',
    captcha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='bg-white h-screen text-[14px]'>
      <header className='bg-gray-900 h-[70px] flex items-center'>
        <div className='p-4 ml-4 cursor-pointer'>
        <Image src={image} alt={"logo AWS"} width={"58"} height={"35"} />
        </div>
      </header>

      <div className='flex overflow-hidden'>
      <div className='w-3/4 p-6 font-normal'>
        <div className='text-sm'>
          <p className='text-3xl mb-6'>AWS Command Line Interface Documentation Feedback</p>
          <p className='font-semibold mb-1 text-[16px]'>Topic</p>
          <p>http://docs.aws.amazon.com/en_us/cli/latest/userguide/getting-started-install.html</p>
        </div>


        <div className='mt-5'>
          <p className='font-semibold mb-2 text-[16px]'>Feedback</p>
        <form onSubmit={handleSubmit}>
        <div className='mb-2'>
        <label>
          <div className="">
          Type of Issue:
          </div>
          <select className='border border-gray-500 rounded-sm' name="type_of_issue" value={formData.type_of_issue} onChange={handleChange} >
            <option value="" disabled>-- select an option --</option>
            <option value="Bug">Broken Link</option>
            <option value="Feature Request">Design and Display</option>
            <option value="General Feedback">Grammar or Spelling</option>
            <option value="General Feedback">Inaccurate information</option>
            <option value="General Feedback">Incomplete information</option>
            <option value="General Feedback">Kudos</option>
            <option value="General Feedback">Translation</option>
          </select>
        </label>
        </div>

        <div className='mb-6'>
        <label className='mb-2'>
        How can we make the documentation better?
        </label>
        <div>
          <textarea className='h-[100px] w-full border border-gray-400 rounded' name="description" value={formData.description} onChange={handleChange} />
        </div>
        </div>

        <div className='mb-6'>
        <label>
        What are you trying to do?
        <div>
          <textarea className='h-[100px] w-full border border-gray-400 rounded' name="description" value={formData.description} onChange={handleChange} />
        </div>
        </label>
        </div>

        <div className='mb-6 text-sm'>
          <p className=' font-semibold text-[16px]'> Contact Information (optional) </p>
          <p className='text-[13px] '>Enter your email address and we can let you know when we have fixed your issue, or ask you for more details to help solve it. We don't share your information with anyone else</p>
        <label>
          <input className='border border-gray-500 rounded-sm w-[40%]' type="email" name="email" value={formData.email} onChange={handleChange} placeholder=' email address' />
        </label>
        </div>

        <div>
        <label>
          <p className="font-semibold text-[16px]">Security Check</p>
          <p className='text-[13px] '>Type the characters in the image or the characters spoken in the audio. This enables us to prevent automated or scripted feedback submissions.</p>
          <input className='border border-gray-500 rounded-sm mb-4' type="text" name="captcha" value={formData.captcha} onChange={handleChange} />
          {/* Add your captcha component here */}
        </label>
        </div>

        <div>
        <button type="submit" className='border border-gray-500 bg-slate-100 rounded-sm px-1 hover:bg-slate-200'>Submit Feedback</button>
        </div>
        </form>
        </div>
      </div>

      <div className='w-1/4 p-4'>
        <div>
          <p className='font-semibold text-[18px]'>Additional Information: </p>
          <ul>
            <li className='text-blue-500'>
            <Link href={"https://forums.aws.amazon.com/forum.jspa?forumID=150"}>AWS re:Post</Link>
            </li>
          </ul>
        </div>
      </div>
      </div>

      {/* <footer className='relative border border-gray-300 border h-[20px]'></footer> */}
    </div>
  );
};

export default page;
