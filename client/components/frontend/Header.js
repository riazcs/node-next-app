import React, { useState } from 'react';

const Header = () => {
    const [someValue, setSomeValue] = useState('');

    return (
        <header className="header-style-1">
            <div className="top-bar animate-dropdown">
                <div className="container">
                    <div className="header-top-inner">
                        <div className="cnt-account">
                            <ul className="list-unstyled">
                                {/* @if (session()->get('language') == 'bangla') */}
                                <li><a href="{{ route('dashboard') }}"><i className="icon fa fa-user"></i>আমার অ্যাকাউন্ট</a>
                                </li>
                                {/*   */}
                                <li><a href="{{ route('dashboard') }}"><i className="icon fa fa-user"></i>My Account</a></li>
                                {/*   */}
                                <li><a href="{{ route('listWishlist') }}"><i className="icon fa fa-heart"></i>Wishlist</a></li>
                                <li><a href="{{ route('myCartView') }}"><i className="icon fa fa-shopping-cart"></i>My Cart</a></li>
                                {/* @auth */}
                                <li><a href="{{ route('checkout-page') }}"><i className="icon fa fa-check"></i>Checkout</a></li>
                                {/* @endauth */}

                                <li>
                                    {/* @auth */}
                                    <a href="{{ route('user.logout') }}"><i className="icon fa fa-user"></i>User Logout</a>
                                    {/*   */}
                                    <a href="{{ route('login') }}"><i className="icon fa fa-lock"></i>Login/Register</a>
                                    {/* @endauth */}
                                </li>
                            </ul>
                        </div>

                        <div className="cnt-block">
                            <ul className="list-unstyled list-inline">
                                <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown"
                                    data-toggle="dropdown"><span className="value">USD </span><b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">USD</a></li>
                                        <li><a href="#">INR</a></li>
                                        <li><a href="#">GBP</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown"
                                    data-toggle="dropdown"><span className="value">
                                        {/* @if (session()->get('language') == 'bangla')
                                        ভাষা:বাংলা
                                         
                                        Lang: English
                                          */}
                                    </span><b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        {/* @if (session()->get('language') == 'bangla') */}
                                        <li><a href="{{ route('english.language') }}">English</a></li>
                                        {/*   */}
                                        <li><a href="{{ route('bangla.language') }}">বাংলা</a></li>
                                        {/*   */}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                            <div className="logo"> <a href="{{ route('home') }}"> <img
                                src="/assets/images/logo.png" alt="logo" /> </a> </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
                            <div className="search-area">
                                <form>
                                    <div className="control-group">
                                        <ul className="categories-filter animate-dropdown">
                                            <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown"
                                                href="category.html">Categories <b className="caret"></b></a>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li className="menu-header">Computer</li>
                                                    <li role="presentation"><a role="menuitem" 
                                                        href="category.html">- Clothing</a></li>
                                                    <li role="presentation"><a role="menuitem" 
                                                        href="category.html">- Electronics</a></li>
                                                    <li role="presentation"><a role="menuitem"
                                                        href="category.html">- Shoes</a></li>
                                                    <li role="presentation"><a role="menuitem" 
                                                        href="category.html">- Watches</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" value={someValue} onChange={(e) => setSomeValue(e.target.value)} />
                                        <input className="search-field" placeholder="Search here..." />
                                        <a className="search-button" href="#"></a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">

                            <div className="dropdown dropdown-cart"> <a href="#" className="dropdown-toggle lnk-cart"
                                data-toggle="dropdown">
                                <div className="items-cart-inner">
                                    <div className="basket"> <i className="glyphicon glyphicon-shopping-cart"></i> </div>
                                    <div className="basket-item-count"><span className="count" id="cartQty"></span></div>
                                    <div className="total-price-basket"> <span className="lbl">cart -</span>
                                        <span className="total-price">
                                            <span className="sign">$</span>
                                            <span className="value" id="cartSubTotal"></span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                                <ul className="dropdown-menu">
                                    <li>

                                        <div id="miniCart">

                                        </div>

                                        <div className="clearfix cart-total">
                                            <div className="pull-right"> <span className="text">Sub Total :</span>$<span
                                                className='price' id="cartSubTotal"></span> </div>
                                            <div className="clearfix"></div>

                                            <a href="{{ route('checkout-page') }}" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a>

                                        </div>

                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>

                </div>

            </div>

            <div className="header-nav animate-dropdown">
                <div className="container">
                    <div className="yamm navbar navbar-default" role="navigation">
                        <div className="navbar-header">
                            <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse"
                                className="navbar-toggle collapsed" type="button">
                                <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span
                                    className="icon-bar"></span> <span className="icon-bar"></span> </button>
                        </div>
                        <div className="nav-bg-class">
                            <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                                <div className="nav-outer">
                                    <ul className="nav navbar-nav">
                                        <li className="active dropdown yamm-fw"> <a href="{{ route('home') }}"
                                            data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">
                                            {/* @if (session()->get('language') == 'bangla')
                                            হোম
                                             
                                            Home
                                              */}
                                        </a>
                                        </li>
                                        {/* @php
                                    $categories = \App\Models\Category::with(['subcategory', 'subsubcategory', 'products'])->orderBy('category_name_en', 'ASC')->get();
                                        @endphp
                                                                             @if ($loop->index > 4)
                                        @php
                                        continue;
                                        @endphp
                                          */}
                                        <li className="dropdown yamm mega-menu"> <a href="" data-hover="dropdown"
                                            className="dropdown-toggle" data-toggle="dropdown">
                                            {/* @if (session()->get('language') == 'bangla')
                                            {{ $category-> category_name_bn}}
                                             
                                            {{ $category-> category_name_en}}
                                              */}
                                        </a>
                                            <ul className="dropdown-menu container">
                                                <li>
                                                    <div className="yamm-content ">
                                                        <div className="row d-flex justify-content-between align-items-center">
                                                            {/* @foreach ($category->subcategory as $subcategory) */}
                                                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                                <h2 className="title">
                                                                    <a
                                                                        href="{{ route('subcategory.products', ['id' => $subcategory->id, 'slug' => $subcategory->subcategory_slug_en]) }}">
                                                                        {/* @if (session()->get('language') == 'bangla')
                                                                        {{ $subcategory-> subcategory_name_bn}}
                                                                         
                                                                        {{ $subcategory-> subcategory_name_en}}
                                                                          */}
                                                                    </a>
                                                                </h2>
                                                                <ul className="links">
                                                                    {/* @foreach ($subcategory->subsubcategory as $subsubcategory) */}
                                                                    <li><a
                                                                        href="{{ route('subsubcategory.products', ['id' => $subsubcategory->id, 'slug' => $subsubcategory->subsubcategory_slug_en]) }}">
                                                                        {/* @if (session()->get('language') == 'bangla')
                                                                        {{ $subsubcategory-> subsubcategory_name_bn}}
                                                                         
                                                                        {{ $subsubcategory-> subsubcategory_name_en}}
                                                                          */}
                                                                    </a></li>
                                                                    {/*   */}
                                                                </ul>
                                                            </div>
                                                            {/*   */}
                                                            <div className="col-xs-12 col-sm-6 col-md-4 col-menu banner-image">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        {/*   */}
                                        <li className="dropdown  navbar-right special-menu"> <a href="#">Todays offer</a> </li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </header>
    );
};

export default Header;
