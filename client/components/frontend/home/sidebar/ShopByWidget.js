import ProductTagsWidget from "@/components/frontend/home/sidebar/ProductTagsWidget"
import TestimonialWidget from "@/components/frontend/home/sidebar/TestimonialWidget"
import React, { useState } from 'react';

const Footer = () => {
    const [someValue, setSomeValue] = useState('');

    return (<div className="sidebar-module-container">
        <div className="sidebar-filter">
            {/* <div  className="sidebar-widget wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;"> */}
            <div className="sidebar-widget wow fadeInUp animated">
                <h3 className="section-title">shop by</h3>
                <div className="widget-header">
                    <h4 className="widget-title">Category</h4>
                </div>
                <div className="sidebar-widget-body">
                    <div className="accordion">
                        {/* @php
                        $categories = \App\Models\Category::with(['subcategory'])->orderBy('category_name_en', 'ASC')->get();
                    @endphp
                    @foreach ($categories as $category) */}
                        <div className="accordion-group">
                            <div className="accordion-heading"> <a href="#collapse{{ $category->id }}" data-toggle="collapse"
                                className="accordion-toggle collapsed">
                                {/* @if (session()->get('langiage') == 'bangla')
                                    {{ $category->category_name_bn }}
                                 
                                    {{ $category->category_name_en }}
                                  */}
                            </a> </div>
                            {/* <div  className="accordion-body collapse" id="collapse{{ $category->id }}" style="height: 0px;"> */}
                            <div className="accordion-body collapse" id="collapse{{ $category->id }}">
                                <div className="accordion-inner">
                                    {/* @foreach ($category->subcategory as $subcategory) */}
                                    <ul>
                                        <li><a href="{{ route('subcategory.products',['id' => $subcategory->id, 'slug' => $subcategory->subcategory_slug_en]) }}">
                                            {/* @if (session()->get('language') == 'bangla')
                                        {{ $subcategory->subcategory_name_bn }}
                                         
                                        {{ $subcategory->subcategory_name_en }}
                                          */}
                                        </a></li>
                                    </ul>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>

            {/* <div  className="sidebar-widget wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;"> */}
            <div className="sidebar-widget wow fadeInUp animated">
                <div className="widget-header">
                    <h4 className="widget-title">Price Slider</h4>
                </div>
                <div className="sidebar-widget-body m-t-10">
                    <div className="price-range-holder"> <span className="min-max"> <span className="pull-left">$200.00</span> <span
                        className="pull-right">$800.00</span> </span>
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" value={someValue} onChange={(e) => setSomeValue(e.target.value)} />
                        <input type="text" id="amount" value={someValue} onChange={(e) => setSomeValue(e.target.value)} />
                        <div className="slider slider-horizontal" id="">
                            <div className="slider-track">
                                <div className="slider-selection" ></div>
                                <div className="slider-handle min-slider-handle"   ></div>
                                <div className="slider-handle max-slider-handle"  ></div>
                            </div>
                            <div className="tooltip tooltip-main top" >
                                <div className="tooltip-arrow"></div>
                                <div className="tooltip-inner">200 : 360</div>
                            </div>
                            <div className="tooltip tooltip-min top" >
                                <div className="tooltip-arrow"></div>
                                <div className="tooltip-inner">200</div>
                            </div>
                            <div className="tooltip tooltip-max bottom" >
                                <div className="tooltip-arrow"></div>
                                <div className="tooltip-inner">360</div>
                            </div>
                        </div><input type="text" className="price-slider" value={someValue} onChange={(e) => setSomeValue(e.target.value)} data="value: '200,360'"
                        />
                    </div>
                    <a href="#" className="lnk btn btn-primary">Show Now</a>
                </div>
            </div>
            <div className="sidebar-widget wow fadeInUp animated" >
                <div className="widget-header">
                    <h4 className="widget-title">Manufactures</h4>
                </div>
                <div className="sidebar-widget-body">
                    <ul className="list">
                        <li><a href="#">Forever 18</a></li>
                        <li><a href="#">Nike</a></li>
                        <li><a href="#">Dolce &amp; Gabbana</a></li>
                        <li><a href="#">Alluare</a></li>
                        <li><a href="#">Chanel</a></li>
                        <li><a href="#">Other Brand</a></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-widget wow fadeInUp animated" >
                <div className="widget-header">
                    <h4 className="widget-title">Colors</h4>
                </div>
                <div className="sidebar-widget-body">
                    <ul className="list">
                        <li><a href="#">Red</a></li>
                        <li><a href="#">Blue</a></li>
                        <li><a href="#">Yellow</a></li>
                        <li><a href="#">Pink</a></li>
                        <li><a href="#">Brown</a></li>
                        <li><a href="#">Teal</a></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-widget wow fadeInUp outer-top-vs animated"
            >
                <h3 className="section-title">Compare products</h3>
                <div className="sidebar-widget-body">
                    <div className="compare-report">
                        <p>You have no <span>item(s)</span> to compare</p>
                    </div>
                </div>
            </div>
            <ProductTagsWidget />
            <TestimonialWidget />
        </div>
    </div>
    );
};

export default Footer;