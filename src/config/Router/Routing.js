import { AuthLayout } from 'components/Layout/AuthLayout';
import { AllLoan } from 'pages/LoanApplication/AllLoan';
import LoanRequestForm from 'pages/LoanApplication/LoanRequest';
import { Outlet, Route, Routes } from 'react-router-dom';

export const Routing = () => {
  return (
    <Routes>
      <Route
        element={
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        }>
        <Route path="/" element={<LoanRequestForm />} />
        <Route path="/all-loans" element={<AllLoan />} />
      </Route>
    </Routes>
  );
};
