'use client';
import { useState, useEffect } from 'react';
import LoadingPage from './loading';
import Link from 'next/link';
import Articles from './components/Articles';
import ArticleSearch from './components/ArticleSearch';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch('/api/articles');
      const data = await res.json();
      setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1>Welcome To Musebecodes </h1>
      <ArticleSearch getSearchResults={(results) => setArticles(results)} />
      <Articles articles={articles} />
    </div>
  );
};

export default HomePage;
