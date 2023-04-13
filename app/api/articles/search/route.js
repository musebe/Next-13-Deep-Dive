import { NextResponse } from 'next/server';
import articles from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredArticles);
}
