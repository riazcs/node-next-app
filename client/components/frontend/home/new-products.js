const Sidebar = () => {
    return (<div id="product-tabs-slider" className="scroll-tabs outer-top-vs wow fadeInUp">
        <div className="more-info-tab clearfix ">
            <h3 className="new-product-title pull-left">
                {/* @if (session()->get('language') == 'bangla')
        নতুন পণ্য
         
        New Products
          */}
            </h3>
            <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
                <li className="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">
                    {/* @if (session()->get('language') == 'bangla') সব   All   */}
                </a></li>

                {/*          @if ($loop->index>3)
            @php
                continue;
            @endphp
          */}
                <li><a data-transition-type="backSlide" href="#category{{ $category->id }}" data-toggle="tab">
                    {/* @if (session()->get('language') == 'bangla') {{ $category->category_name_bn }}   {{ $category->category_name_en }}   */}
                </a></li>
                 

            </ul>
        </div>
        <div className="tab-content outer-top-xs">
            <div className="tab-pane in active" id="all">
                <div className="product-slider">
                    <div className="owl-carousel home-owl-carousel custom-carousel owl-theme" data-item="6">
                                                 <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image">
                                            <a href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}">
                                                <img src="{{ asset($product->product_thumbnail) }}" alt="" />
                                            </a>
                                        </div>
                                        {/* @php
                            $discount_amount = (($product->selling_price-$product->discount_price)/($product->selling_price))*100
                        @endphp
                        @if ($product->discount_price == NULL) */}
                                        <div className="tag new"><span>New</span></div>
                                         
                                        <div className="tag new"><span>
                                            {/* {{ round($discount_amount) }}% */}
                                        </span></div>
                                         
                                    </div>
                                    <div className="product-info text-left">
                                        <h3 className="name">
                                            <a href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}">
                                                {/* @if (session()->get('language') == 'bangla')
                            {{ $product->product_name_bn }}
                             
                            {{ $product->product_name_en }}
                              */}
                                            </a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        {/* @if ($product->discount_price == NULL) */}
                                        <div className="product-price"><span className="price">
                                            {/* ${{ $product->selling_price }} */}
                                        </span>
                                        </div>
                                         
                                        <div className="product-price"> <span className="price">
                                            {/* ${{ $product->discount_price }} */}
                                        </span> <span className="price-before-discount">
                                                {/* ${{ $product->selling_price }}  */}
                                            </span> </div>
                                         

                                    </div>
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart"> <i className="fa fa-shopping-cart"></i> </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                                </li>
                                                <li className="lnk wishlist">
                                                    <a data-toggle="tooltip" className="add-to-cart" href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}" title="Wishlist"> <i className="icon fa fa-heart"></i> </a>
                                                </li>
                                                <li className="lnk"> <a data-toggle="tooltip" className="add-to-cart" href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         y
                        <h5 className="text-danger">No Product Found</h5>
                         
                    </div>
                </div>
            </div>
                         <div className="tab-pane" id="category{{ $category->id }}">
                <div className="product-slider">
                    <div className="owl-carousel home-owl-carousel custom-carousel owl-theme" data-item="6">
                        {/* @forelse ($category->products as $product) */}
                        <div className="item item-carousel">
                            <div className="products">
                                <div className="product">
                                    <div className="product-image">
                                        <div className="image">
                                            <a href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}">
                                                <img src="{{ asset($product->product_thumbnail) }}" alt="" />
                                            </a>
                                        </div>
                                        {/* @php
                                $discount_amount = (($product->selling_price-$product->discount_price)/($product->selling_price))*100
                            @endphp
                            @if ($product->discount_price == NULL) */}
                                        <div className="tag new"><span>New</span></div>
                                         
                                        <div className="tag new"><span>
                                            {/* {{ round($discount_amount) }}% */}
                                        </span></div>
                                         

                                    </div>
                                    <div className="product-info text-left">
                                        <h3 className="name">
                                            <a href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}">
                                                {/* @if (session()->get('language') == 'bangla')
                            {{ $product->product_name_bn }}
                             
                            {{ $product->product_name_en }}
                              */}
                                            </a></h3>
                                        <div className="rating rateit-small"></div>
                                        <div className="description"></div>
                                        {/* @if ($product->discount_price == NULL) */}
                                        <div className="product-price"><span className="price">
                                            {/* ${{ $product->selling_price }} */}
                                        </span>
                                        </div>
                                         
                                        <div className="product-price"> <span className="price">
                                            {/* ${{ $product->discount_price }} */}
                                        </span> <span className="price-before-discount">
                                                {/* ${{ $product->selling_price }}  */}
                                            </span> </div>
                                         

                                    </div>
                                    <div className="cart clearfix animate-effect">
                                        <div className="action">
                                            <ul className="list-unstyled">
                                                <li className="add-cart-button btn-group">
                                                    <button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart"> <i className="fa fa-shopping-cart"></i> </button>
                                                    <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                                </li>
                                                <li className="lnk wishlist"> <a data-toggle="tooltip" className="add-to-cart" href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                                                <li className="lnk"> <a data-toggle="tooltip" className="add-to-cart" href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         y
                        <h5 className="text-danger">No Product Found</h5>
                         
                    </div>
                </div>
            </div>
             
        </div>
    </div>
    );
};
export default Sidebar;
