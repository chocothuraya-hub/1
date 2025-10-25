import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { products } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

// GET all products
export async function GET() {
  try {
    const allProducts = await db.select().from(products);
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

// POST create new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, description, price, image, categoryId, inStock, featured } = body;

    const newProduct = await db.insert(products).values({
      name,
      slug,
      description,
      price,
      image,
      categoryId,
      inStock: inStock ?? true,
      featured: featured ?? false,
    });

    return NextResponse.json({ success: true, id: newProduct[0].insertId });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
