import Image from 'next/image';
import { BrandDData } from '@/contants'; // Adjust the path as needed

export default function BrandsSection() {
  return (
    <div className=" py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-gray-600 mb-6">
          {BrandDData.sectionTitle}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
          {BrandDData.logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={logo.imageUrl}
                alt={logo.altText}
                width={100}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
