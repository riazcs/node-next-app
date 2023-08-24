import React from 'react';
import { useRouter } from 'next/router';
import api from "service/api";
import Link from 'next/link';

const LeftSidebar = () => {
    const router = useRouter();
    const handleLogout = async () => {
        try {
            const response = await api.post('/logout');
            if (response.statusText == "OK" && response.status == 200) {
                localStorage.removeItem("token");
                router.push('/');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link href="/dashboard" className="brand-link">
                <span className="brand-text font-weight-light">Admin Panel</span>
            </Link>

            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link href="/dashboard" className={router.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}>
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/users" className={router.pathname === '/users' ? 'nav-link active' : 'nav-link'}>
                                <i className="nav-icon fas fa-users"></i>
                                <p>
                                    User
                                </p>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="#" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie"></i>
                                <p>
                                    Product
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link href="/products" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Product</p>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/products/add" className="nav-link">
                                        <i className="fa fa-plus nav-icon"></i>
                                        <p>Add Product</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/jobs" className="nav-link">
                                <i className="nav-icon fas fa-tree"></i>
                                <p>
                                    Job
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link href="/jobs" className="nav-link">
                                        <i className="fa fa-briefcase nav-icon"> </i>
                                        <p>jobs</p>
                                    </Link>
                                </li>

                                
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/categories" className="nav-link">
                                <i className="nav-icon fas fa-plus"></i>
                                <p>
                                    Category
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link href="/categories" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Category</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>


                        <li className="nav-item">
                            <Link href="/gallery" className={router.pathname === '/gallery' ? 'nav-link active' : 'nav-link'}>
                                <i className="nav-icon far fa-image"></i>
                                <p>
                                    Gallery
                                </p>
                            </Link>
                        </li>
                        <li className={router.pathname === '/settings' || router.pathname === '/admin-setting' || router.pathname === '/payment-setting' ? 'nav-item menu-open' : 'nav-item'}>
                            <Link href="/settings" className='nav-link'>
                                <i className="nav-icon fas fa-cogs"></i>
                                <p>
                                    Settings
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link href="/settings" className={router.pathname === '/settings' ? 'nav-link active' : 'nav-link'}>
                                        <i className="fa fa-cog nav-icon"></i>
                                        <p>General Settings</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/admin-setting" className={router.pathname === '/admin-setting' ? 'nav-link active' : 'nav-link'}>
                                        <i className="far fa-building nav-icon"></i>
                                        <p>Admin Setting</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/payment-setting" className={router.pathname === '/payment-setting' ? 'nav-link active' : 'nav-link'}>
                                        <i className="far fa-calendar nav-icon"></i>
                                        <p>Payment Setting</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a onClick={handleLogout} className="nav-link" href='#'>
                                <i className="nav-icon fa fa-power-off text-warning"> </i>
                                <p>
                                    Logout
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>

        </aside>
    );
};

export default LeftSidebar;
