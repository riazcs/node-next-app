
import HotDealsWidget from "@/components/frontend/home/sidebar/HotDealsWidget"
import SpecialOfferWidget from "@/components/frontend/home/sidebar/SpecialOfferWidget"
import ProductTagsWidget from "@/components/frontend/home/sidebar/ProductTagsWidget"
import SpecialDealsWidget from "@/components/frontend/home/sidebar/SpecialDealsWidget"
import NewsletterWidget from "@/components/frontend/home/sidebar/NewsletterWidget"
import TestimonialWidget from "@/components/frontend/home/sidebar/TestimonialWidget"
import ShopByWidget from "@/components/frontend/home/sidebar/ShopByWidget"
import SideMenu from "@/components/frontend/home/sidebar/side-menu"

const Sidebar = () => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
            <SideMenu />


            {/* @if (request()->routeIs('home')) */}
            <HotDealsWidget />
            <SpecialOfferWidget />
            <ProductTagsWidget />
            <SpecialDealsWidget />
            <NewsletterWidget />
            <TestimonialWidget />

            <div className="home-banner"> <img src=" /assets/images/banners/LHS-banner.jpg" alt="Image" />
            </div>
            {/*  if (request()->routeIs('category')) */}
            <ShopByWidget />
            {/*   */}
        </div>

    );
};

export default Sidebar;