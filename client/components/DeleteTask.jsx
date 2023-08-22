import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteTask = ({ taskId }) => {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(process.env.API_URL + `/tasks/${taskId}`);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
    );
};

export default DeleteTask;
