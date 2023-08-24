import { useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import api from "service/api";
import { useRouter } from 'next/router';

const AddProduct = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            router.push('/login');
        }
    }, []);

    return (
        <AdminLayout>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Add Product</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active">Add</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-secondary">
                        <div className="card-header">
                            <h3 className="card-title">Product</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label for="inputEstimatedBudget">Estimated budget</label>
                                <input type="number" id="inputEstimatedBudget" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="inputSpentBudget">Total amount spent</label>
                                <input type="number" id="inputSpentBudget" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="inputEstimatedDuration">Estimated project duration</label>
                                <input type="number" id="inputEstimatedDuration" className="form-control" />
                            </div>
                        </div>
                        <div className='card-footer'>
                            <a href="#" className="btn btn-secondary">Submit</a>
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    );
};

export default AddProduct;
