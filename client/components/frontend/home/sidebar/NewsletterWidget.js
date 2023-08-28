import React, { useState } from 'react';
const Footer = () => {
    const [someValue, setSomeValue] = useState('');


    return (<div className="sidebar-widget newsletter wow fadeInUp outer-bottom-small">
        <h3 className="section-title">Newsletters</h3>
        <div className="sidebar-widget-body outer-top-xs">
            <p>Sign Up for Our Newsletter!</p>
            <form>
                <div className="form-group">
                    <label className="sr-only" >Email address</label>
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" value={someValue} onChange={(e) => setSomeValue(e.target.value)} />
                </div>
                <button className="btn btn-primary">Subscribe</button>
            </form>
        </div>
    </div>);
};

export default Footer;