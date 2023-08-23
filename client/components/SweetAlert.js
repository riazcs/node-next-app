import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetAlert = () => {
  useEffect(() => {
    const showAlert = async () => {
      const { value } = await Swal.fire({
        title: 'Custom SweetAlert',
        text: 'This is a custom SweetAlert example!',
        icon: 'success',
        customClass: {
          container: 'custom-swal-container',
          popup: 'custom-swal-popup',
          confirmButton: 'custom-swal-confirm-button',
        },
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      });

      if (value) {
        Swal.fire('You clicked Yes!', '', 'success');
      } else {
        Swal.fire('You clicked No!', '', 'error');
      }
    };

    showAlert();
  }, []);

  return <></>;
};

export default SweetAlert;
