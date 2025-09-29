import { NextResponse } from 'next/server';
import { mockProducts } from '../../../data/products';

export async function GET() {
  return NextResponse.json(mockProducts);
}