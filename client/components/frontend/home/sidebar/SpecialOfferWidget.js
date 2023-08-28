
const Sidebar = () => {
    return (<div className="sidebar-widget outer-bottom-small wow fadeInUp">
        <h3 className="section-title">
            {/* @if (session()->get('language') == 'bangla')
        বিশেষ প্রস্তাব
         
        Special Offer
          */}
        </h3>
        <div className="sidebar-widget-body outer-top-xs">
            <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
                <div className="item">
                    <div className="products special-product">
                        {/* @php
                    $special_offer_products = App\Models\Product::where('special_offer', 1)->latest()->limit(3)->get();
                    @endphp
                    @foreach ($special_offer_products as $product) */}
                        <div className="product">
                            <div className="product-micro">
                                <div className="row product-micro-row">
                                    <div className="col col-xs-5">
                                        <div className="product-image">
                                            <div className="image"> <a href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}"> <img src="{{ asset($product->product_thumbnail) }}" alt="" /> </a> </div>

                                        </div>
                                    </div>
                                    <div className="col col-xs-7">
                                        <div className="product-info">
                                            <h3 className="name"><a href="{{ route('frontend-product-details',['id' => $product->id, 'slug' => $product->product_slug_en]) }}">
                                                {/* @if (session()->get('language') == 'bangla')
                                            {{ $product->product_name_bn }}
                                             
                                            {{ $product->product_name_en }}
                                              */}
                                            </a></h3>
                                            <div className="rating rateit-small"></div>
                                            <div className="product-price">
                                                {/* @if ($product->discount_price == NULL)
                                            <span className="price"> ${{ $product->selling_price }} </span>
                                             
                                            <span className="price"> ${{ $product->discount_price }} </span>
                                            <span className="price"> ${{ $product->selling_price }} </span>
                                              */}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Sidebar;