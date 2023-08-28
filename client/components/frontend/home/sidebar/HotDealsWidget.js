const Footer = () => {
    return (<div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs">
    <h3 className="section-title">
        {/* @if (session()->get('language') == 'bangla')
        উষ্ণ চুক্তি
         
        Hot deals
          */}
    </h3>
    <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
        {/* @php
            $hot_deals_products = App\Models\Product::where('hot_deals', 1)
                ->where('discount_price','!=',NULL)->latest()->limit(6)->get();
        @endphp
        @foreach ($hot_deals_products as $product) */}
        <div className="item">
            <div className="products">
                <div className="hot-deal-wrapper">
                    <div className="image"> <img src="{{ asset($product->product_thumbnail) }}" alt="" />
                    </div>
                    {/* @php
                        $discount_amount = (($product->selling_price-$product->discount_price)/($product->selling_price))*100
                    @endphp */}
                    <div className="sale-offer-tag"><span>
                        {/* {{ round($discount_amount) }}% */}
                    <br />
                            off</span></div>
                    <div className="timing-wrapper">
                        <div className="box-wrapper">
                            <div className="date box"> <span className="key">120</span> <span className="value">DAYS</span> </div>
                        </div>
                        <div className="box-wrapper">
                            <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                        </div>
                        <div className="box-wrapper">
                            <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                        </div>
                        <div className="box-wrapper hidden-md">
                            <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                        </div>
                    </div>
                </div>

                <div className="product-info text-left m-t-20">
                    <h3 className="name"><a href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}"> 
                     {/* @if (session()->get('language') == 'bangla') */}
                        {/* {{ $product->product_name_bn }}
                         
                        {{ $product->product_name_en }}
                          */}
                        </a></h3>
                    <div className="rating rateit-small"></div>
                    {/* @if ($product->discount_price == NULL) */}
                            <div className="product-price"><span className="price">
                                {/* ${{ $product->selling_price }} */}
                                </span>
                            </div>
                        {/*   */}
                            <div className="product-price"> <span className="price"> 
                            {/* ${{ $product->discount_price }} */}
                            </span> <span className="price-before-discount">
                                {/* ${{ $product->selling_price }} */}
                                 </span> </div>
                        {/*   */}

                </div>

                <div className="cart clearfix animate-effect">
                    <div className="action">
                        <div className="add-cart-button btn-group">
                            <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i
                                    className="fa fa-shopping-cart"></i> </button>
                            <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*   */}
    </div>
</div>);
};

export default Footer;
