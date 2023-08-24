import React from 'react';
import { useRouter } from 'next/router';
import api from "service/api";

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
            <a href="index3.html" className="brand-link">
                <span className="brand-text font-weight-light">Admin Panel</span>
            </a>

            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <a href="pages/widgets.html" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p>
                                    User
                                </p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie"></i>
                                <p>
                                    Product
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/charts/chartjs.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>ChartJS</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/charts/flot.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Flot</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/charts/inline.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Inline</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/charts/uplot.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>uPlot</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-tree"></i>
                                <p>
                                    Job
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/UI/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>General</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/icons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Icons</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/buttons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Buttons</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/sliders.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Sliders</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/modals.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Modals & Alerts</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/navbar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Navbar & Tabs</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/timeline.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Timeline</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/UI/ribbons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Ribbons</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-plus"></i>
                                <p>
                                    Category
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/forms/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Product</p>
                                    </a>
                                </li>

                            </ul>
                        </li>


                        <li className="nav-item">
                            <a href="/gallery" className="nav-link">
                                <i className="nav-icon far fa-image"></i>
                                <p>
                                    Gallery
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-cogs"></i>
                                <p>
                                    Settings
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/tables/simple.html" className="nav-link">
                                        <i className="far fa-cog nav-icon"></i>
                                        <p>General Settings</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/data.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Admin Setting</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/jsgrid.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Payment Setting</p>
                                    </a>
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
