'use client';
import React, { useState } from 'react';
import * as yup from 'yup';
import { Field, Formik } from 'formik';

const page = () => {
  const [selected, setSelected] = useState([]);

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    city: yup.string().required('City is required'),
    country: yup.string().required('Country is required'),
    numberOfVehicles: yup.string().required('Number of vehicles is required'),
    // vehicleTypes: yup
    //   .array()
    //   .of(yup.string())
    //   .required('Vehicle types are required')
    //   .required('Vehicle types are required'),
    email: yup.string().email().required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    stage: yup.string().required(),
    more: yup.string(),
  });

  const handleClick = (vehicle) => {
    let copy = [...selected];
    if (copy.includes(vehicle)) {
      copy = copy.filter((item) => item !== vehicle);
      setSelected(copy);
    } else {
      copy.push(vehicle);
      setSelected(copy);
    }
  };

  return (
    <main className='bg-[url(/demo_background.png)] tracking-widest bg-cover flex justify-center p-24'>
      <div className='bg-bybikeBlack shadow-2xl rounded-xl text-white px-12 py-16'>
        <h2 className='text-4xl mb-10'>
          Let's Get <span className='text-bybikeBlue'>Going.</span>
        </h2>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            city: '',
            country: '',
            numberOfVehicles: '',
            email: '',
            phone: '',
            stage: '',
            // vehicleTypes: [],
            more: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <div className='grid gap-4 grid-cols-2'>
                <div>
                  <h2>
                    First Name<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.firstName}
                    name='firstName'
                    type='text'
                    className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
                  />
                </div>
                <div>
                  <h2>
                    Last Name<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.lastName}
                    name='lastName'
                    type='text'
                    className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
                  />
                </div>
                <div>
                  <h2>
                    City<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.city}
                    name='city'
                    type='text'
                    className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
                  />
                </div>
                <div>
                  <h2>
                    Country<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.country}
                    name='country'
                    type='text'
                    className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
                  />
                </div>
                <div className='col-span-2'>
                  <h2>
                    How many vehicles will you start with?
                    <span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.numberOfVehicles}
                    name='numberOfVehicles'
                    type='text'
                    className='bg-[#EAEAEA]/20 w-full focus:outline-none rounded-md p-1 px-2'
                  />
                </div>
                <div>
                  <h2>
                    Email<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    name='email'
                    type='text'
                    className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
                  />
                </div>
                <div>
                  <h2>
                    Phone Number<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.phone}
                    name='phone'
                    type='text'
                    className='bg-[#EAEAEA]/20 w-56 focus:outline-none rounded-md p-1 px-2'
                  />
                </div>
                <div className='col-span-2'>
                  <h2>
                    Describe the stage you are currently in
                    <span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.stage}
                    name='stage'
                    type='text'
                    className='bg-[#EAEAEA]/20 w-full focus:outline-none rounded-md p-1 px-2'
                  />
                </div>
                <div className='col-span-2'>
                  <h2 className='mb-2'>
                    Which types of vehicle are you interested in?
                    <span className='text-red-500'>*</span>
                  </h2>
                  <button
                    type='button'
                    onClick={() => handleClick('E-Scooter')}
                    className={`${
                      selected.includes('E-Scooter')
                        ? 'bg-bybikeBlue'
                        : 'bg-[#EAEAEA]/20'
                    } w-56 flex justify-start pl-2 py-1 mb-1 rounded-md`}
                  >
                    E-Scooter
                  </button>
                  <button
                    type='button'
                    onClick={() => handleClick('E-Bike')}
                    className={`${
                      selected.includes('E-Bike')
                        ? 'bg-bybikeBlue'
                        : 'bg-[#EAEAEA]/20'
                    } w-56 flex justify-start pl-2 py-1 mb-1 rounded-md`}
                  >
                    E-Bike
                  </button>
                  <button
                    type='button'
                    onClick={() => handleClick('Mix')}
                    className={`${
                      selected.includes('Mix')
                        ? 'bg-bybikeBlue'
                        : 'bg-[#EAEAEA]/20'
                    } w-56 flex justify-start pl-2 py-1 mb-1 rounded-md`}
                  >
                    Mix
                  </button>
                </div>
                <div className='col-span-2'>
                  <h2>Tell us more about your business</h2>
                  <textarea
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.more}
                    name='more'
                    rows={3}
                    className='bg-[#EAEAEA]/20 w-full resize-none focus:outline-none rounded-md p-1 px-2'
                  ></textarea>
                </div>
              </div>
              <button
                type='submit'
                className='bg-bybikeRed rounded-sm py-2 px-6 mt-6'
              >
                SUBMIT
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default page;
