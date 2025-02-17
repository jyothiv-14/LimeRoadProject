import React from 'react'
import './productpage.css'
import { Link } from 'react-router-dom'

import ProductSection from '../ProductSection'

function ProductPage(props) {
  return (
    <div>


            <div class="overlay" style={{"display":"none"}}></div>
            <div class="search-section">
            <div class="container-fluid container-xl">
                <div class="row main-content ml-md-0">
                <div class="sidebar col-md-3 px-0">
                    <h1 class="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
                    <span class="mr-2 filter-close-btn">
                        X
                    </span>
                    Filters
                    <span class="ml-auto text-uppercase">Reset Filters</span>
                    </h1>
                    <div class="sidebar__inner ">
                    <div class="filter-body">
                        <div>
                        <h2 class="border-bottom filter-title">Clothing</h2>
                        <p>18903467 Products</p>
                    
                        <h2 class="font-xbold body-font border-bottom filter-title">FILTER & SORT</h2>
                        <div class="mb-3 filter-options" id="cusine-options">
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Chinese" />
                            <label class="custom-control-label" for="Chinese">trending</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Italian"/>
                            <label class="custom-control-label" for="Italian">New</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Mexican"/>
                            <label class="custom-control-label" for="Mexican">Discounts</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Thai"/>
                            <label class="custom-control-label" for="Thai">High Price</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Gujarati"/>
                            <label class="custom-control-label" for="Gujarati">Low Price</label>
                            </div>
                        
                        </div>

                        
                        <h2 class="font-xbold body-font border-bottom filter-title">Price Range</h2>
                        <div class="mb-3 theme-clr xs2-font d-flex justify-content-between">
                            <span id="slider-range-value1">$100</span>
                            <span id="slider-range-value2">$10,000</span>
                        </div>
                        <div class="mb-30 filter-options">
                            <div>
                            <div id="slider-range">
                                <form>
                                <div class="form-group">
                                    <input type="range" class="form-control-range" id=""/>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        <h2 class="border-bottom filter-title">Discounts</h2>
                        <div class="mb-3 filter-options" id="services-options">
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Breakfast" />
                            <label class="custom-control-label" for="Breakfast">size</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Lunch"/>
                            <label class="custom-control-label" for="Lunch">Color</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Donner"/>
                            <label class="custom-control-label" for="Donner">Brand</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Cafe"/>
                            <label class="custom-control-label" for="Cafe">category</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="Brunch"/>
                            <label class="custom-control-label" for="Brunch">Material</label>
                            </div>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="other"/>
                            <label class="custom-control-label" for="other">Other</label>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="content col-md-9">
                    <div class="d-flex justify-content-between border-bottom align-items-center">
                    <h2 class="title">Products</h2>
                    
                    
                    <div class="filters-actions">
                        <div>
                        <button class="btn filter-btn d-md-none"><svg xmlns="http://www.w3.org/2000/svg" class="mr-2" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></svg>
                Filter</button>
                        </div>
                        <div class="d-flex align-items-center">

                        <div class="dropdown position-relative sort-drop">
                            <button type="button" class="btn btn-transparent dropdown-toggle body-clr p-0 py-1 sm-font fw-400 sort-toggle" data-toggle="dropdown">
                <span class="mr-2 d-md-none">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24 M24,24H0" fill="none"/><path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/><path d="M0,0h24v24H0V0z" fill="none"/></g></svg>
            </span>   
                            <span class="d-md-inline-block ml-md-2 font-semibold">Newest First</span>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right p-0 no-caret">
                            <Link class="dropdown-item selected" href="/">Newest First</Link>
                            <Link class="dropdown-item" href="/">Lowest First</Link>
                            <Link class="dropdown-item" href="/">Highest First</Link>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>
                    <div class="row row-grid">

                    <ProductSection category={props.name}/>
            
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default ProductPage
