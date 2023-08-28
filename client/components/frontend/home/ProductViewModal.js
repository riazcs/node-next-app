import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ProductViewModal = () => {
  const [product, setProduct] = useState({
    name: '',
    code: '',
    category: '',
    brand: '',
    image: '',
    price: '',
    oldPrice: '',
    inStock: false,
    outOfStock: false,
    colors: [],
    sizes: [],
    selectedColor: '',
    selectedSize: '',
    quantity: 1,
    id: '',
  });

  const handleAddToCart = () => {
    // Add your AJAX logic for adding to cart here
  };

  return (
    <div className="modal fade" id="productViewModal" tabIndex="-1" aria-labelledby="productViewModalLabel" aria-hidden="true">
      {/* ... Rest of your modal structure ... */}
    </div>
  );
};

export default ProductViewModal;
