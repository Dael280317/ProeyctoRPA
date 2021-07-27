import React from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
function NewArticle({ data }) {
  return (
    <>
      <div className="news">
        <a href={data.url}>
          <img className="news_img" src={data.urlToImage}></img>
        </a>
        <a className="news_a" href={data.url}>
          <h1 className="new_title">{data.title}</h1>
        </a>
        <p className="news_desc">{data.description}</p>
        <span className="news_author">{data.author}</span>
        <span className="news_published">{data.published}</span>
        <span className="news_source">{data.source.name}</span>
      </div>
    </>
  );
}

export default NewArticle;
