import React from 'react';

const LeftSidebar = () => {
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
                                <i className="nav-icon fas fa-th"></i>
                                <p>
                                    Widgets
                                </p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie"></i>
                                <p>
                                    Charts
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
                                    UI Elements
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
                                <i className="nav-icon fas fa-edit"></i>
                                <p>
                                    Forms
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/forms/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>General Elements</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/advanced.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Advanced Elements</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/editors.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Editors</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/validation.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Validation</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-table"></i>
                                <p>
                                    Tables
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/tables/simple.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Simple Tables</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/data.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>DataTables</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/tables/jsgrid.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>jsGrid</p>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="pages/gallery.html" className="nav-link">
                                <i className="nav-icon far fa-image"></i>
                                <p>
                                    Gallery
                                </p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon far fa-envelope"></i>
                                <p>
                                    Mailbox
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/mailbox/mailbox.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Inbox</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/mailbox/compose.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Compose</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Read</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-book"></i>
                                <p>
                                    Pages
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/examples/invoice.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Invoice</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/profile.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Profile</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/e-commerce.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>E-commerce</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/projects.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Projects</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/project-add.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Project Add</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/project-edit.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Project Edit</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/project-detail.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Project Detail</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/contacts.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Contacts</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/faq.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>FAQ</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/examples/contact-us.html" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Contact us</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="fas fa-circle nav-icon"></i>
                                <p>Level 1</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-circle"></i>
                                <p>
                                    Level 2
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Level 2</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>
                                            Level 2
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-dot-circle nav-icon"></i>
                                                <p>Level 3</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-dot-circle nav-icon"></i>
                                                <p>Level 3</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="far fa-dot-circle nav-icon"></i>
                                                <p>Level 3</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Level 2</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

            </div>

        </aside>
    );
};

export default LeftSidebar;
