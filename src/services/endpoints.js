const url = 'https://okigwecreations.online/api/';
export const getAllLoanRequests = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'action=get_all_loan_request&transaction_id='
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};

export const fetchGetRepayment = async (transaction_id) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `action=get_repayment_schedule&transaction_id=${transaction_id}`
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};
