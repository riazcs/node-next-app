// components/Toastr.js
import { useEffect } from 'react';
import toastr from 'toastr'; // You need to import toastr library if not already done

const Toastr = ({ message, type }) => {
  useEffect(() => {
    switch (type) {
      case 'info':
        toastr.info(message);
        break;
      case 'success':
        toastr.success(message);
        break;
      case 'warning':
        toastr.warning(message);
        break;
      case 'error':
        toastr.error(message);
        break;
      default:
        break;
    }
  }, [message, type]);

  return null;
};

export default Toastr;
