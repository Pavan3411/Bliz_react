import React, { useEffect } from 'react';
import { useGetProductListQuery } from './src/features/products/productApi';

const ProductAttributes = () => {
  const { data, error, isLoading } = useGetProductListQuery('g');

  useEffect(() => {
    if (data) {
      console.log('Product List Testing:', data);
    }
    if (error) {
      console.error('Error fetching product attributes:', error);
    }
  }, [data, error]);

  if (isLoading) return <div>Loading...</div>;

  // Render your component UI based on the fetched data
  return (
    <div>
      {/* Render product attributes here */}
    </div>
  );
};

export default ProductAttributes;
