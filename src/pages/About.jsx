import React from "react";

const About = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>About</h1>
      <p>
        こんにちは！このブログは、Web開発やプログラミングに興味のある方に向けて役立つ情報を提供することを目的としています。
        私たちは、最新の技術やツールを紹介し、学びやすいコンテンツをお届けすることを目指しています。
      </p>
      <h2>ブログのテーマ</h2>
      <p>
        このブログでは以下のテーマを中心に情報を発信しています：
      </p>
      <ul>
        <li>Web開発（HTML, CSS, JavaScript, React, Vite など）</li>
        <li>デザインやUI/UXの考え方</li>
        <li>技術を活用した効率的な仕事術</li>
      </ul>
      <h2>作成者について</h2>
      <p>
        初めまして、Tomokiと申します！趣味はプログラミング、読書、そして新しい技術を試すことです。
        現在はフロントエンド開発を中心に学習しており、このブログを通して自分の学びをシェアしています。
        また、AI（特にChatGPT）を活用して、Webサイト制作やアイデアの実現に取り組んでいます。
      </p>
      <h2>このブログの特長</h2>
      <p>
        ChatGPTと協力しながら、効率的かつクリエイティブに情報発信を行っています。
        技術やデザインだけでなく、初心者にも分かりやすい解説を心がけています。
      </p>
      <h2>SNSリンク</h2>
      <p>
        私に関する最新情報や活動については、以下のSNSからチェックしてください：
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#1DA1F2" }}
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#0077B5" }}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
