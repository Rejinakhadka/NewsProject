import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  const defaultImageUrl = "https://www.vectorstock.com/royalty-free-vector/megaphone-or-loudspeaker-icon-with-latest-news-vector-27436824.jpg";

  const hasContent = title && description && src && url;

  return hasContent ? (
    <div style={{ display: "inline-block" }}>
      <div
        className="card bg-dark text-light mb-3 mx-3"
        style={{ maxWidth: "345px", width: "100%" }}
      >
        <img
          src={src || defaultImageUrl}
          className="card-img-top"
          style={{ width: "345px", height: "200px", objectFit: "cover" }}
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title && title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </h5>
          <p className="card-text">
            {description
              ? description.length > 90
                ? `${description.slice(0, 90)}...`
                : description
              : "There is no Description"}
          </p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default NewsItem;
