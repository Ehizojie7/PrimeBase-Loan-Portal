import { ClockIcon } from '@heroicons/react/20/solid';

import { Spinner } from 'components/Spinner/Spinner';
import { useModal } from 'hooks';
import { useState } from 'react';
import { fetchGetRepayment } from 'services/endpoints';

import { naira } from 'utils/currencyFormatter';

export const LoanApplicationTable = ({ data, initial }) => {
  const { Modal, showModal } = useModal();
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState('');
  const [repay, setRepay] = useState([]);

  const fetchData = async (transaction_id) => {
    try {
      const data = await fetchGetRepayment(transaction_id);
      setRepay(data);
      setLoading(false);
      console.log(data, 'KKK');
    } catch (error) {
      console.error('Error fetching loan requests:', error);
      setLoading(false);
    }
  };
  return (
    <div className="lg:overflow-hidden overflow-x-scroll">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <thead className="text-xs bg-gray-100  uppercase border text-black">
          <tr>
            <th scope="col" className="p-3">
              S/N
            </th>
            <th scope="col" className="p-3">
              Full Name
            </th>
            <th scope="col" className="px-3">
              Loan Amount
            </th>
            <th scope="col" className="px-3">
              Transaction ID
            </th>

            <th scope="col" className="px-3">
              Time Created
            </th>
            <th scope="col" className="px-3">
              Repayment Duration
            </th>
            <th scope="col" className="px-3">
              <p className="sr-only">action</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ticket, i) => (
            <tr className="border  hover:bg-gray-50" key={ticket?.ID}>
              <td className="p-3 border-l">{initial + i}</td>
              <td className="p-3 border-l">
                {ticket?.FULL_NAME === '' ? 'Wale Adenuga' : ticket?.FULL_NAME}
              </td>
              <td className="p-3 border-l">{naira.format(ticket?.LOAN_AMOUNT)}</td>
              <td className="p-3 border-l">{ticket?.TRANSACTION_ID}</td>
              <td className="p-3 border-l flex items-center gap-2">
                <ClockIcon className="w-6 h-6" /> {ticket?.CREATED_TIME}
              </td>
              <td className="p-3 border-l">{ticket?.REPAYMENT_DURATION} Months</td>

              <td className="px-6 py-4 border-l text-[#116d46]">
                <span
                  className="text-[blue] cursor-pointer"
                  onClick={() => {
                    showModal();
                    setUser(ticket);
                    fetchData(ticket?.TRANSACTION_ID);
                  }}>
                  View
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {Modal({
        children: (
          <>
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="h-[300px] overflow-y-auto">
                <div className="flex items-center">
                  <h1>Loan Repayment Breakdown for </h1>
                  <span className="text-[15px] ml-2 block  uppercase">
                    {user?.FULL_NAME === '' ? 'Wale Adenuga' : user?.FULL_NAME}
                  </span>{' '}
                </div>
                <div className="grid grid-cols-12 gap-6 mt-4 border-b-[1px] pb-4">
                  <p className="col-span-6 text-gray-700 font-medium text-md">
                    Cummulative Repayment
                  </p>
                  <p className="col-span-6 text-gray-700 font-medium text-md">
                    {naira.format(repay?.CUMULATIVE_REPAYMENT_AMOUNT)}
                  </p>
                  <p className="col-span-6 text-gray-700 font-medium text-md">Date</p>
                  <p className="col-span-6 text-gray-700 font-medium text-md">{repay?.DATE}</p>
                </div>
                {repay?.data.map((datum, i) => {
                  return (
                    <div key={datum?.ID} className="border-b-[1px] pb-4">
                      <div className="my-6">Loan {i + 1}</div>
                      <div className="grid grid-cols-12 gap-6">
                        <p className="col-span-6 text-gray-700 font-medium text-md">Interest</p>
                        <p className="col-span-6 text-gray-700 font-medium text-md">
                          {naira.format(datum?.INTEREST)}
                        </p>
                        <p className="col-span-6 text-gray-700 font-medium text-md">Loan Balance</p>
                        <p className="col-span-6 text-gray-700 font-medium text-md">
                          {naira.format(datum?.LOAN_BALANCE)}
                        </p>
                        <p className="col-span-6 text-gray-700 font-medium text-md">
                          Total Repayment
                        </p>
                        <p className="col-span-6 text-gray-700 font-medium text-md">
                          {naira.format(datum?.TOTAL_REPAYMENT_AMOUNT)}
                        </p>
                        <p className="col-span-6 text-gray-700 font-medium text-md">Month Count</p>
                        <p className="col-span-6 text-gray-700 font-medium text-md">
                          {datum?.MONTH_COUNT} Month
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        ),
        size: 'lg'
      })}
    </div>
  );
};
