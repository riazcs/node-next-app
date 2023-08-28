const Sidebar = () => {
    return (<div id="hero">
        <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
            {/* @foreach ($sliders as $slider) */}
            {/* <div className="item" style="background-image: url({{ asset($slider->slider_image) }});"> */}
            <div className="item">
                <div className="container-fluid">
                    <div className="caption bg-color vertical-center text-left">
                        <div className="big-text fadeInDown-1">
                            {/* {{ $slider->slider_title }} */}
                        </div>
                        <div className="excerpt fadeInDown-2 hidden-xs"> <span>
                            {/* {!! $slider->slider_description !!} */}
                        </span> </div>
                        <div className="button-holder fadeInDown-3"> <a href="index.php?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                    </div>
                </div>
            </div>
            {/*   */}
        </div>
    </div>
    );
};
export default Sidebar;