"use client"
import React, { useEffect, useState } from 'react';
import GalleryCard from '@/components/gallerycard';
import { ImageIcon, Car } from 'lucide-react';

// Sample gallery data with car delivery documentation
const generateGalleryData = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537',
      title: 'Happy customer receiving their new car',
      customerName: 'John Anderson',
      carModel: 'Toyota Camry 2024',
      deliveryDate: 'March 15, 2024',
      height: 350
    },
    {
      url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2',
      title: 'Professional handover process',
      customerName: 'Sarah Mitchell',
      carModel: 'Honda CR-V Hybrid',
      deliveryDate: 'March 14, 2024',
      height: 450
    },
    {
      url: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7',
      title: 'Delivery inspection with customer',
      customerName: 'Michael Brown',
      carModel: 'BMW X5',
      deliveryDate: 'March 13, 2024',
      height: 400
    },
    {
      url: 'https://images.unsplash.com/photo-1542362567-b07e54358753',
      title: 'Keys handover moment',
      customerName: 'Emma Wilson',
      carModel: 'Mercedes-Benz GLC',
      deliveryDate: 'March 12, 2024',
      height: 380
    },
    {
      url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027',
      title: 'Final documentation review',
      customerName: 'David Lee',
      carModel: 'Lexus RX',
      deliveryDate: 'March 11, 2024',
      height: 420
    },
    {
      url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d',
      title: 'Customer satisfaction guaranteed',
      customerName: 'Rachel Garcia',
      carModel: 'Audi Q5',
      deliveryDate: 'March 10, 2024',
      height: 360
    },
    {
      url: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d',
      title: 'Vehicle features explanation',
      customerName: 'Thomas Wright',
      carModel: 'Volvo XC60',
      deliveryDate: 'March 9, 2024',
      height: 400
    },
    {
      url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
      title: 'Successful delivery completion',
      customerName: 'Lisa Chen',
      carModel: 'Hyundai Tucson',
      deliveryDate: 'March 8, 2024',
      height: 380
    }
  ].map((img, index) => ({
    ...img,
    id: `img-${index}`,
  }));

  return images;
};

const Gallery: React.FC = () => {
  const [images, setImages] = useState(generateGalleryData());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <Car className="w-12 h-12 mx-auto mb-4 text-gray-400 animate-pulse" />
          <p className="text-gray-500">Loading delivery documentation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Car Delivery Gallery</h1>
          <p className="text-lg text-gray-600">
            Documenting our commitment to excellence in every delivery
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Building trust through transparent and professional service
          </p>
        </div>
        
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;