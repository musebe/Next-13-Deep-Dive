import { NextResponse } from 'next/server';
//import { v4 as uuidv4 } from 'uuid';
import articles from './data.json';

export async function GET(request) {
  return NextResponse.json(articles);
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();

  const newArticle = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  articles.push(newArticle);

  return NextResponse.json(articles);
}
