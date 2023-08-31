import { useEffect, useState } from 'react';
import api from "service/api";

const Sidebar = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/categories');
            setProducts(response.data.CategoryData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    return (
        <div className="side-menu animate-dropdown outer-bottom-xs">
            <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
            <nav className="yamm megamenu-horizontal">
                <ul className="nav">

                    <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="icon {{ $category->category_icon }}" aria-hidden="true"></i>
                        {/* @if (session()->get('language') == 'bangla')
                            {{ $category->category_name_bn }}
                         
                            {{ $category->category_name_en }}
                          */}
                        {products.map(product => (
                            <li key={product._id}>
                               { product.category_image}
                            </li>
                        ))}
                    </a>
                        <ul className="dropdown-menu mega-menu">
                            <li className="yamm-content">
                                <div className="row">
                                    {/* @foreach ($category->subcategory as $subcategory) */}
                                    <div className="col-sm-12 col-md-3">
                                        <h2 className="title">
                                            <a
                                                href="{{ route('subcategory.products', ['id' => $subcategory->id, 'slug' => $subcategory->subcategory_slug_en]) }}">
                                                {/* @if (session()->get('language') == 'bangla')
                                                    {{ $subcategory->subcategory_name_bn }}
                                                 
                                                    {{ $subcategory->subcategory_name_en }}
                                                  */}
                                            </a>
                                        </h2>
                                        <ul className="links list-unstyled">
                                            {/* @foreach ($subcategory->subsubcategory as $subsubcategory) */}
                                            <li>
                                                <a
                                                    href="{{ route('subsubcategory.products', ['id' => $subsubcategory->id, 'slug' => $subsubcategory->subsubcategory_slug_en]) }}">
                                                    {/* @if (session()->get('language') == 'bangla')
                                                            {{ $subsubcategory->subsubcategory_name_bn }}
                                                         
                                                            {{ $subsubcategory->subsubcategory_name_en }}
                                                          */}
                                                </a>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;