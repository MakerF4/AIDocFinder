import React, { useMemo } from "react";

const NewsCard = ({ article }) => {
  const localImages = [
    "/photos/news/image1.jpeg",
    "/photos/news/image2.jpeg",
    "/photos/news/image3.jpeg",
    "/photos/news/image4.jpeg",
    "/photos/news/image5.jpg",
    "/photos/news/image6.jpg",
    "/photos/news/image7.jpg",
    "/photos/news/image8.jpg",
    "/photos/news/image9.jpg",
    "/photos/news/image10.jpeg",
    "/photos/news/image11.jpeg",
    "/photos/news/image12.jpeg",
    "/photos/news/image13.jpeg",
    "/photos/news/image14.jpeg",
    "/photos/news/image15.png",
    "/photos/news/image16.jpeg",
    "/photos/news/image17.jpeg",
    "/photos/news/image18.jpeg",
    "/photos/news/image19.jpeg",
    "/photos/news/image20.jpeg",
    "/photos/news/image21.jpeg",
    "/photos/news/image22.jpeg",
    "/photos/news/image23.jpeg",
    "/photos/news/image24.jpeg",
    "/photos/news/image25.jpeg",
  ];

  const randomImage = useMemo(() => {
    return (
      article.urlToImage ||
      localImages[Math.floor(Math.random() * localImages.length)]
    );
  // eslint-disable-next-line
  }, [article]);

  return (
    <div className="news-card">
      <img src={randomImage} alt={article.title} className="news-card__image" />
      <div className="news-card__content">
        <p className="news-card__title">{article.title}</p>
        <p className="news-card__description"></p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="news-card__link"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
