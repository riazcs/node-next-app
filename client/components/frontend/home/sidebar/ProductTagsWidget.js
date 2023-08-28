// @php
//     $tags_en = App\Models\Product::groupBy('product_tags_en')->select('product_tags_en')->get();
//     $tags_bn = App\Models\Product::groupBy('product_tags_bn')->select('product_tags_bn')->get();
// @endphp
const Footer = () => {
    return (<div className="sidebar-widget product-tag wow fadeInUp">
        <h3 className="section-title">Product tags</h3>
        <div className="sidebar-widget-body outer-top-xs">
            <div className="tag-list">
                {/* @if (session()->get('langiage') == 'bangla')
            @foreach ($tags_en as $item) */}
                <a className="item active" title="Phone" href="{{ route('product.tag',['tag' => $item->product_tags_en]) }}">
                    {/* {{ str_replace(',', ' ', $item-> product_tags_en) }} */}
                </a>
                {/*  
             
            @foreach ($tags_bn as $item) */}
                <a className="item active" title="Phone" href="{{ route('product.tag',['tag' => $item->product_tags_bn]) }}">
                    {/* {{ str_replace(',', ' ', $item-> product_tags_bn) }} */}
                    </a>
                {/*  
              */}

            </div>
        </div>

    </div>

    );
};

export default Footer;