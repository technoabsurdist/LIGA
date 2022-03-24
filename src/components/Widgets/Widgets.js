import React from 'react'
import "./Widgets.css"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
  
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  
    return (
      <div className="widgets">
        <div className="widgets__header">
          <h2>Your Dashboard</h2>
          <InfoOutlinedIcon />
        </div>
        {newsArticle(
          "Chicago DAO launches as millions await their official launch.",
          "read more"
        )}
        {newsArticle(
          "Professor Zhang's post in #trending twitter.",
          "read more"
        )}
        {newsArticle(
          "a16z, 8vc, and Sequoia lead pre-seed round on Chicago DAO",
          "read more"
        )}
        {newsArticle(
          "Where's Lex? A deep dive into the disappearance of the infamous crypto dev",
          "read more"
        )}
        {newsArticle(
          "Kanye, second artist to win Nobel in Literature after the great Bob Dylan",
          "read more"
        )}
        {newsArticle(
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
         "read more"
        )}
        {newsArticle(
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
         "read more"
        )}
        {newsArticle(
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
         "read more"
        )}
        </div>
    );
}
export default Widgets