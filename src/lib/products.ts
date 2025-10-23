export type ChocolateType = 'dark' | 'milk' | 'white';
export type ProductCategory = 'nuts' | 'fruits' | 'mixed';
export type WeightOption = '100g' | '250g' | '500g' | '1kg';

export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  category: ProductCategory;
  chocolateType?: ChocolateType;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  prices: {
    '100g': number;
    '250g': number;
    '500g': number;
    '1kg': number;
  };
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  // Cashew Products
  {
    id: 'cashew-milk',
    nameAr: 'كاجو بالشوكولاتة بالحليب',
    nameEn: 'Milk Chocolate Cashew',
    category: 'nuts',
    chocolateType: 'milk',
    descriptionAr: 'كاجو فاخر مغطى بالشوكولاتة بالحليب الكريمية',
    descriptionEn: 'Premium cashews covered in creamy milk chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/file-1761228236518.jpg',
    prices: {
      '100g': 8000,
      '250g': 18000,
      '500g': 34000,
      '1kg': 65000
    },
    inStock: true,
    featured: true
  },
  {
    id: 'cashew-dark',
    nameAr: 'كاجو بالشوكولاتة الداكنة',
    nameEn: 'Dark Chocolate Cashew',
    category: 'nuts',
    chocolateType: 'dark',
    descriptionAr: 'كاجو فاخر مغطى بالشوكولاتة الداكنة الغنية',
    descriptionEn: 'Premium cashews covered in rich dark chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/file-1761228236355.jpg',
    prices: {
      '100g': 8000,
      '250g': 18000,
      '500g': 34000,
      '1kg': 65000
    },
    inStock: true,
    featured: true
  },
  
  // Hazelnut Products
  {
    id: 'hazelnut-milk',
    nameAr: 'بندق بالشوكولاتة بالحليب',
    nameEn: 'Milk Chocolate Hazelnut',
    category: 'nuts',
    chocolateType: 'milk',
    descriptionAr: 'بندق كامل مغطى بالشوكولاتة بالحليب الفاخرة',
    descriptionEn: 'Whole hazelnuts covered in premium milk chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/file-1761228221321.jpg',
    prices: {
      '100g': 7000,
      '250g': 16000,
      '500g': 30000,
      '1kg': 57000
    },
    inStock: true,
    featured: true
  },
  {
    id: 'hazelnut-dark',
    nameAr: 'بندق بالشوكولاتة الداكنة',
    nameEn: 'Dark Chocolate Hazelnut',
    category: 'nuts',
    chocolateType: 'dark',
    descriptionAr: 'بندق كامل مغطى بالشوكولاتة الداكنة',
    descriptionEn: 'Whole hazelnuts covered in dark chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/file-1761228221433.jpg',
    prices: {
      '100g': 7000,
      '250g': 16000,
      '500g': 30000,
      '1kg': 57000
    },
    inStock: true,
    featured: false
  },
  
  // Almond Products
  {
    id: 'almond-milk',
    nameAr: 'لوز بالشوكولاتة بالحليب',
    nameEn: 'Milk Chocolate Almond',
    category: 'nuts',
    chocolateType: 'milk',
    descriptionAr: 'لوز محمص مغطى بالشوكولاتة بالحليب',
    descriptionEn: 'Roasted almonds covered in milk chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/file-1761228244281.jpg',
    prices: {
      '100g': 6500,
      '250g': 15000,
      '500g': 28000,
      '1kg': 53000
    },
    inStock: true,
    featured: false
  },
  {
    id: 'almond-dark',
    nameAr: 'لوز بالشوكولاتة الداكنة',
    nameEn: 'Dark Chocolate Almond',
    category: 'nuts',
    chocolateType: 'dark',
    descriptionAr: 'لوز محمص مغطى بالشوكولاتة الداكنة',
    descriptionEn: 'Roasted almonds covered in dark chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/file-1761228244247.jpg',
    prices: {
      '100g': 6500,
      '250g': 15000,
      '500g': 28000,
      '1kg': 53000
    },
    inStock: true,
    featured: false
  },
  {
    id: 'almond-white',
    nameAr: 'لوز بالشوكولاتة البيضاء',
    nameEn: 'White Chocolate Almond',
    category: 'nuts',
    chocolateType: 'white',
    descriptionAr: 'لوز محمص مغطى بالشوكولاتة البيضاء الكريمية',
    descriptionEn: 'Roasted almonds covered in creamy white chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/file-1761228244293.jpg',
    prices: {
      '100g': 6500,
      '250g': 15000,
      '500g': 28000,
      '1kg': 53000
    },
    inStock: true,
    featured: false
  },
  
  // Fruit Products
  {
    id: 'strawberry-chocolate',
    nameAr: 'فراولة بالشوكولاتة',
    nameEn: 'Chocolate Covered Strawberry',
    category: 'fruits',
    descriptionAr: 'فراولة مجففة مغطاة بالشوكولاتة الفاخرة',
    descriptionEn: 'Dried strawberries covered in premium chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/file-1761228228694.jpg',
    prices: {
      '100g': 9000,
      '250g': 20000,
      '500g': 38000,
      '1kg': 72000
    },
    inStock: true,
    featured: true
  },
  {
    id: 'kiwi-chocolate',
    nameAr: 'كيوي بالشوكولاتة',
    nameEn: 'Chocolate Covered Kiwi',
    category: 'fruits',
    descriptionAr: 'كيوي مجفف مغطى بالشوكولاتة اللذيذة',
    descriptionEn: 'Dried kiwi covered in delicious chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/file-1761228228482.jpg',
    prices: {
      '100g': 9000,
      '250g': 20000,
      '500g': 38000,
      '1kg': 72000
    },
    inStock: true,
    featured: true
  },
  
  // Mixed Nuts
  {
    id: 'mixed-nuts',
    nameAr: 'مكسرات مشكلة بالشوكولاتة',
    nameEn: 'Mixed Chocolate Nuts',
    category: 'mixed',
    descriptionAr: 'مزيج فاخر من الكاجو والبندق واللوز بالشوكولاتة',
    descriptionEn: 'Premium mix of cashews, hazelnuts, and almonds in chocolate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1761228272200.png',
    prices: {
      '100g': 7500,
      '250g': 17000,
      '500g': 32000,
      '1kg': 60000
    },
    inStock: true,
    featured: true
  }
];

export const weightOptions: WeightOption[] = ['100g', '250g', '500g', '1kg'];

export const categoryNames = {
  nuts: { ar: 'مكسرات', en: 'Nuts' },
  fruits: { ar: 'فواكه', en: 'Fruits' },
  mixed: { ar: 'مشكل', en: 'Mixed' }
};

export const chocolateTypeNames = {
  dark: { ar: 'داكنة', en: 'Dark' },
  milk: { ar: 'بالحليب', en: 'Milk' },
  white: { ar: 'بيضاء', en: 'White' }
};
