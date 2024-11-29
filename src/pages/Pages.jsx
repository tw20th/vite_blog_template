import React, { useEffect, useState } from "react";
import CardGrid from "../components/CardGrid"; // Homeと同じコンポーネントを利用

const Pages = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/articles.json");
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();
        setArticles(data);

        // カテゴリー一覧を生成
        const uniqueCategories = [
          ...new Set(data.map((article) => article.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>カテゴリー別の記事一覧</h2>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "2rem" }}>
          <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>{category}</h3>
          <CardGrid
            articles={articles.filter((article) => article.category === category)}
          />
        </div>
      ))}
    </div>
  );
};

export default Pages;
