import React from "react";

export default class TestPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;

    return <div className="test">
      <div className="test__grid">
        {(entry.getIn(["data", "intro", "items"]) || []).map((item, index) => <div className="item" key={index}>
          <a href={item.get("link")} className="masonry-card">
            <img className="masonry-card__thumb"
              src={item.get("image") && getAsset(item.get("image"))} alt="" />
            <div className="masonry-card__title">{item.get("title")}</div>
            <div className="button">{item.get("btnText")}</div>
          </a>
        </div>)}
      </div>
    </div>;
  }
}
