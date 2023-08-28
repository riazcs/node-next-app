const Sidebar = () => {
    return (<section className="section featured-product wow fadeInUp">
    <h3 className="section-title">
        {/* @if (session()->get('language') == 'bangla')
        {{ $skip_category_0->category_name_bn }}
         
        {{ $skip_category_0->category_name_en }}
          */}
    </h3>
    <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
        {/* @foreach ($skip_category_products_0 as $product) */}
        <div className="item item-carousel">
            <div className="products">
                <div className="product">
                    <div className="product-image">
                        <div className="image"> <a href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}"><img
                                    src="{{ asset($product->product_thumbnail) }}" alt="" /></a> </div>

                        <div className="tag hot"><span>hot</span></div>
                    </div>

                    <div className="product-info text-left">
                        <h3 className="name"><a href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}">
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
                                    {/* ${{ $product->selling_price }} */}
                                     </span> </div>
                         

                    </div>
                    <div className="cart clearfix animate-effect">
                        <div className="action">
                            <ul className="list-unstyled">
                                <li className="add-cart-button btn-group">
                                    <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i
                                            className="fa fa-shopping-cart"></i> </button>
                                    <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                </li>
                                <li className="lnk wishlist"> <a className="add-to-cart" href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}" title="Wishlist"> <i
                                            className="icon fa fa-heart"></i> </a> </li>
                                <li className="lnk"> <a className="add-to-cart" href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}" title="Compare"> <i
                                            className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
         
    </div>
</section>
 );
};
export default Sidebar;