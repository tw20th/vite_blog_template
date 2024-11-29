import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CardGrid = ({ searchQuery = "" }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    // JSONファイルからデータを取得
    const fetchArticles = async () => {
      try {
        const response = await fetch("/articles.json"); // JSONのパス
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // 検索フィルタ
  const filteredArticles = articles.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="card-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {filteredArticles.map((item) => (
        <Link
          to={`/articles/${item.id}`} // 各記事の詳細ページへのリンク
          key={item.id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            className="card"
            data-aos="fade-up"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
              background: "#fff",
            }}
          >
            <img
              src={item.image} // サムネイル画像を表示
              alt={item.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <small>{item.date}</small>
            <div style={{ marginTop: "0.5rem" }}>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-block",
                    background: "#e0f7fa",
                    color: "#00796b",
                    padding: "0.2rem 0.5rem",
                    margin: "0 0.2rem",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardGrid;
