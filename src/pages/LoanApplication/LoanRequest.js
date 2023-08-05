import { Button } from 'components/Button/Button';
import { Heading } from 'components/Header/Heading';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { notification } from 'utils';
const url = 'https://okigwecreations.online/api/';
const LoanRequestForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `action=request_for_loan&full_name=${data.full_name}&loan_amount=${data.loan_amount}&repayment_duration=${data.repayment_duration}`
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Loan Request Response:', responseData);
      notification(responseData.message);
      navigate('/all-loans');
    } catch (error) {
      console.error('Error requesting loan:', error);
      notification(error.responseData.message);
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 lg:w-[500px] w-[100%] mt-[100px] lg:mx-8 ">
      <div className="mb-5">
        <Heading>Create Loan Request</Heading>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div>
          <label className="block text-md font-normal " htmlFor="full_name">
            Full Name:
          </label>
          <Controller
            name="full_name"
            defaultValue=""
            control={control}
            rules={{ required: 'Full name is required' }}
            render={({ field }) => (
              <input
                className="block w-full appearance-none rounded-md  border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50"
                {...field}
              />
            )}
          />
          {errors.full_name && (
            <p className="text-sm text-red-500 font-normal">{errors.full_name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-md font-normal " htmlFor="loan_amount">
            Loan Amount:
          </label>
          <Controller
            name="loan_amount"
            defaultValue=""
            control={control}
            rules={{ required: 'Loan amount is required' }}
            render={({ field }) => (
              <input
                className="block w-full text-md font-normal text-md appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50"
                {...field}
                type="number"
              />
            )}
          />
          {errors.loan_amount && (
            <p className="text-sm text-red-500 font-normal">{errors.loan_amount.message}</p>
          )}
        </div>
        <div>
          <label className="block text-md font-normal " htmlFor="repayment_duration">
            Repayment Duration (months):
          </label>
          <Controller
            name="repayment_duration"
            defaultValue=""
            control={control}
            rules={{ required: 'Repayment duration is required' }}
            render={({ field }) => (
              <input
                className="block w-full text-md font-normal appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50"
                {...field}
                type="number"
              />
            )}
          />
          {errors.repayment_duration && (
            <p className="text-sm text-red-500 font-normal">{errors.repayment_duration.message}</p>
          )}
        </div>
        <div className="w-[100px]">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default LoanRequestForm;
