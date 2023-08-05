import { Heading } from 'components/Header/Heading';
import { Container } from 'components/Container/Container';
import React, { useEffect, useState } from 'react';
import { LoanApplicationTable } from './LoanApplicationTable';
import { EmptyState } from 'components/EmptyState/EmptyState';

import ContentLoader from 'react-content-loader';
import { Pagination } from 'components/Pagination/Pagination';
import { useTableSerialNumber } from 'hooks';
import { getAllLoanRequests } from 'services/endpoints';

const RenderData = ({ data, initial }) => {
  if (data?.length === 0 || !data) {
    return (
      <EmptyState
        title="No Loan Application Found"
        description="You have not applied for  any loan yet or maybe this might be a server error or poor internet connection"
        showAction={false}
      />
    );
  } else {
    return <LoanApplicationTable data={data} initial={initial} />;
  }
};

export const AllLoan = () => {
  const [loans, setLoans] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const useSerial = useTableSerialNumber(currentPage);

  const fetchData = async () => {
    try {
      const data = await getAllLoanRequests();
      setLoans(data?.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching loan requests:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Your data array (example)
  const data = loans;

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="p-5">
      <Container>
        <Heading>All Loan Application</Heading>
        <p className="text-sm font-normal my-3">List of loan application in the system.</p>

        <>
          {isLoading ? (
            <ContentLoader viewBox="0 0 380 70">
              <rect x="0" y="0" rx="5" ry="5" width="380" height="70" />
            </ContentLoader>
          ) : (
            <RenderData data={currentItems} initial={useSerial} />
          )}
        </>

        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          onPageChange={setCurrentPage}
        />
      </Container>
    </div>
  );
};
