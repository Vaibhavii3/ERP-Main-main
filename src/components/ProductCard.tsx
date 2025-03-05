import React from 'react';
import { Link } from 'react-router-dom';
// import { Package, Calendar, MapPin, Tag } from 'lucide-react';
import { Package, Tag } from 'lucide-react';
import { Product } from '../types';
// import { getProducts } from '../api/product';

interface ProductCardProps {
  product: Product;
  onDelete?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  

  const getStatusColor = (status: string) => {
    const colors = {
      instock: 'bg-green-100 text-green-800',
      sold: 'bg-blue-100 text-blue-800',
      in_transit: 'bg-yellow-100 text-yellow-800',
      delivered: 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };


  return (

    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
            {product.status}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          <span>
            Description: {product.description}
            </span>
            </p>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Tag className="h-4 w-4 mr-2" />
            <span>SKU: {product.sku}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Package className="h-4 w-4 mr-2" />
            <span>Stock: {product.stocks}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-indigo-600 font-semibold">${product.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500">{product.category}</span>
        </div>

        <div className="mt-4 flex justify-between items-center space-x-2">
          <Link 
            to={`/products/${product._id}`}
            className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            View Details
          </Link>
          {onDelete && (
            <button
              onClick={() => onDelete(product._id)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>

    // <div>

    
    // <div className="bg-white rounded shadow p-4">
    //   <h2 className="text-lg font-bold">{product.name}</h2>
    //   <p className="text-gray-600">{product.category}</p>
    //   <p className="text-indigo-600">${product.price.toFixed(2)}</p>
    //   <Link to={`/products/${product._id}`} className="text-blue-600 hover:underline">
    //     View Details
    //   </Link>
    // </div>
    // <Link to={`/product/${product._id}`} className="block">
    //   <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    //     <div className="p-5">
    //       <div className="flex justify-between items-start">
    //         <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
    //         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
    //           {product.status}
    //         </span>
    //       </div>
          
    //       <div className="space-y-2 mt-3">
    //         <div className="flex items-center text-sm text-gray-600">
    //           <Tag className="h-4 w-4 mr-2" />
    //           <span>SKU: {product.sku}</span>
    //         </div>
    //         <div className="flex items-center text-sm text-gray-600">
    //           <Package className="h-4 w-4 mr-2" />
    //           <span>Batch: {product.batchNumber}</span>
    //         </div>
    //         {/* <div className="flex items-center text-sm text-gray-600">
    //           <Calendar className="h-4 w-4 mr-2" />
    //           <span>Expires: {new Date(product.expiryDate).toLocaleDateString()}</span>
    //         </div> */}
    //         {/* <div className="flex items-center text-sm text-gray-600">
    //           <MapPin className="h-4 w-4 mr-2" />
    //           <span>{product.currentLocation}</span>
    //         </div> */}
    //       </div>
          
    //       <div className="mt-4 flex justify-between items-center">
    //         <span className="text-indigo-600 font-semibold">${product.price.toFixed(2)}</span>
    //         <span className="text-xs text-gray-500">{product.category}</span>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
    // </div>
  );
};

export default ProductCard;