import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles.css";
import NewsCard from "./NewsCard";
import SubscribeButton from "./SubscribeButton";
import Newsletter from "../Newsletter/Newsletter";

const NewsCarousel = () => {
  const [news, setNews] = useState([]);
  const [showNewsletter, setShowNewsletter] = useState(false); 
  
  const closeNewsletter = () => {
      setShowNewsletter(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/news")
      .then((response) => {
        const filteredNews = response.data.filter(
          (article) => !article.title.includes("[Removed]")
        );
        setNews(filteredNews);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const groupedNews = [];
  for (let i = 0; i < news.length; i += 4) {
    groupedNews.push(news.slice(i, i + 4));
  }

  const handleSubscribeClick = () => {
    setShowNewsletter(true);
  };

  return (
    <div className="news-carousel">
      <div className="title-subscribe-container">
        <h1 className="news-h1">Top Health News</h1>
        <SubscribeButton onSubscribeClick={handleSubscribeClick} />
      </div>
      <Newsletter onClose={closeNewsletter} isActive={showNewsletter} />
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={7000}
        selectedItem={0}
      >
        {groupedNews.map((group, index) => (
          <div key={index} className="news-card-group">
            {group.map((article, articleIndex) => (
              <NewsCard key={articleIndex} article={article} />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
