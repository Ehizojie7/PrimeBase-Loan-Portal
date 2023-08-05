import { toast } from 'react-toastify';

export const notification = (message, type = 'success') => {
  toast(message, {
    position: 'top-right',
    type: type,
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  });
};
