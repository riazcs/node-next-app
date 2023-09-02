import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetAlert = ({ title = 'Alert!', type = 'success' }) => {
    useEffect(() => {
        const showAlert = async () => {
            await Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: type,
                title: title,
            });
        };

        showAlert();
    }, [title, type]);

    return null;
};

export default SweetAlert;
