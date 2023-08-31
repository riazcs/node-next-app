import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CategoryModal = ({ show, onClose, category, onSave }) => {
    const [categoryData, setCategoryData] = useState({
        category_name_en: '',
        category_name_bn: '',
        category_slug_en: '',
        category_image: ''
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(categoryData);
        onClose();
    };

    return (
        <Modal size="lg" show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{category ? 'Edit Category' : 'Add Category'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Category Name (English)</Form.Label>
                        <Form.Control
                            type="text"
                            name="category_name_en"
                            value={categoryData.category_name_en}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category Name (Bangla)</Form.Label>
                        <Form.Control
                            type="text"
                            name="category_name_bn"
                            value={categoryData.category_name_bn}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category Slug (English)</Form.Label>
                        <Form.Control
                            type="text"
                            name="category_slug_en"
                            value={categoryData.category_slug_en}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category Image</Form.Label>
                        <Form.Control
                            type="text"
                            name="category_image"
                            value={categoryData.category_image}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <button className='btn btn-sm btn-secondary float-right mt-2'>Submit</button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CategoryModal;
