import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CategoryModal = ({ show, onClose, category, onSave }) => {
    const [categoryData, setCategoryData] = useState({
        category_name_en: '',
        category_name_bn: '',
        category_slug_en: '',
    });
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        if (category) {
            setCategoryData({
                ...categoryData,
                ...category
            });
        }
    }, [category]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({
            ...categoryData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category_name_en', categoryData.category_name_en);
        formData.append('category_name_bn', categoryData.category_name_bn);
        formData.append('category_slug_en', categoryData.category_slug_en);
        if (selectedFile) {
            formData.append('image', selectedFile);
        }
        onSave(formData);
        onClose();
    };

    return (
        <Modal size="lg" show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{category ? 'Edit Category' : 'Add Category'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Form.Group>
                        <Form.Label>Category Name (English)</Form.Label>
                        <Form.Control
                            type="text"
                            name="category_name_en"
                            value={categoryData.category_name_en}
                            onChange={handleChange}
                            className='form-control'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category Name (Bangla)</Form.Label>
                        <Form.Control
                            type="text"
                            name="category_name_bn"
                            value={categoryData.category_name_bn}
                            onChange={handleChange}
                            className='form-control'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category Slug (English)</Form.Label>
                        <Form.Control
                            type="text"
                            name="category_slug_en"
                            value={categoryData.category_slug_en}
                            onChange={handleChange}
                            className='form-control'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category Image</Form.Label>
                        <Form.Control
                            type="file"
                            value={categoryData.category_image}
                            onChange={handleFileChange}
                            className='form-control'
                            name="image"
                            accept="image/*"
                        />
                    </Form.Group>
                    <button className='btn btn-sm btn-secondary float-right mt-2'>Submit</button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CategoryModal;
