import Link from 'next/link';


const Articles = ({ articles }) => {
  return (
    <div className=' courses'>
      {articles.map((article) => (
        <div key={ article.id} className='card'>
          <h2>{ article.title}</h2>
          <small>Level: { article.level}</small>
          <p>{ article.description}</p>
          <Link href={ article.link} target='_blank' className='btn'>
            Go To Article
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Articles;