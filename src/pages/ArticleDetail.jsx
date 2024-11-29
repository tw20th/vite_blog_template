import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams(); // URLから記事IDを取得
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/articles.json');
        const data = await response.json();
        const foundArticle = data.find((item) => item.id === parseInt(id));
        setArticle(foundArticle);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{article.title}</h1>
      <img
        src={article.image}
        alt={article.title}
        style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
      />
      <p>{article.content}</p>
      <small>{article.date}</small>
      <div style={{ marginTop: '1rem' }}>
        {article.tags.map((tag) => (
          <span
            key={tag}
            style={{
              display: 'inline-block',
              background: '#e0f7fa',
              color: '#00796b',
              padding: '0.2rem 0.5rem',
              margin: '0 0.2rem',
              borderRadius: '4px',
              fontSize: '0.875rem',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetail;
