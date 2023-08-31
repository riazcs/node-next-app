import { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import api from "service/api";
import { useRouter } from 'next/router';
import CategoryModal from '@/components/admin/CategoryModal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Category = () => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            router.push('/login');
        }
    }, []);

    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchCategories = async () => {
        const response = await api.get('/categories');
        setCategories(response.data.CategoryData);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleEdit = category => {
        setSelectedCategory(category);
        setShowModal(true);
    };

    const handleAdd = () => {
        setSelectedCategory(null);
        setShowModal(true);
    };

    const handleSaveCategory = async (newCategory) => {
        try {
            if (newCategory.id) {
                // Editing an existing category
                await api.put(`/categories/${newCategory.id}`, newCategory);
            } else {
                // Adding a new category
                await api.post('/categories', newCategory);
            }
            setShowModal(false);
            fetchCategories();
        } catch (error) {
            console.error('Error saving category:', error);
        }
    };

    const handleDelete = async id => {
        try {
            await axios.delete(`/api/categories/${id}`);
            setCategories(prevCategories => prevCategories.filter(category => category.id !== id));
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };


    return (
        <AdminLayout>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Category</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Category</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Category list</h3>
                                    <button className="btn btn-secondary btn-sm float-right" onClick={setShowModal}>
                                        Add Category
                                    </button>
                                    <CategoryModal
                                        show={showModal}
                                        onClose={() => setShowModal(false)}
                                        category={selectedCategory}
                                        onSave={handleSaveCategory}
                                    />
                                </div>

                                <div className="card-body">
                                    <div id="example2_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row"><div className="col-sm-12 col-md-6"></div><div className="col-sm-12 col-md-6"></div></div><div className="row"><div className="col-sm-12">
                                        <table id="example2" className="table table-bordered table-hover dataTable dtr-inline" aria-describedby="example2_info">
                                            <thead>
                                                <tr><th className="sorting sorting_asc" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Title</th>
                                                    <th className="sorting" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending">Slug</th>
                                                    <th className="sorting" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending">Image</th>
                                                    <th className="sorting" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending">Created At</th>
                                                    <th className="sorting" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">Action</th></tr>
                                            </thead>
                                            <tbody>
                                                {categories.map((category) => (
                                                    <tr className="odd" key={category._id}>
                                                        <td className="dtr-control sorting_1">{category.category_name_en}{category.category_name_bn}</td>
                                                        <td>{category.category_slug_en}</td>
                                                        <td>{category.category_image}</td>
                                                        <td>{category.createdAt}</td>
                                                        <td>
                                                            <button className='btn btn-sm btn-outline-secondary' onClick={() => handleEdit(category)}>Edit</button>
                                                            <button className='btn btn-sm btn-danger' onClick={() => handleDelete(category.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>


                                        </table>
                                    </div></div><div className="row">
                                            <div className="col-sm-12 col-md-5">
                                                <div className="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                            </div><div className="col-sm-12 col-md-7">
                                                <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                                                    <ul className="pagination"><li className="paginate_button page-item previous disabled" id="example2_previous">
                                                        <a href="#" aria-controls="example2" data-dt-idx="0" className="page-link">Previous</a></li><li className="paginate_button page-item active">
                                                            <a href="#" aria-controls="example2" data-dt-idx="1" className="page-link">1</a>
                                                        </li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="2" className="page-link">2</a>
                                                        </li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="3" className="page-link">3</a></li><li className="paginate_button page-item ">
                                                            <a href="#" aria-controls="example2" data-dt-idx="4" className="page-link">4</a>
                                                        </li><li className="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="5" className="page-link">5</a></li><li className="paginate_button page-item ">
                                                            <a href="#" aria-controls="example2" data-dt-idx="6" className="page-link">6</a></li><li className="paginate_button page-item next" id="example2_next">
                                                            <a href="#" aria-controls="example2" data-dt-idx="7" className="page-link">Next</a>
                                                        </li></ul></div></div></div></div>
                                </div>

                            </div>



                        </div>

                    </div>

                </div>
                {/* <CategoryModal show={showModal} onClose={() => setShowModal(false)} category={selectedCategory} onSave={handleSaveCategory} /> */}
                {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> */}
            </section>
        </AdminLayout>
    );
};

export default Category;
