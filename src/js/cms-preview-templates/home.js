import React from "react";
import format from "date-fns/format";

import Hero from "./components/hero";

export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <Hero title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])} />

      <section id="about">
        <div class="row about-wrap">
          <div class="col-full">
            <div class="about-profile-bg"></div>

            <div class="intro">
              <h3 class="animate-this">{entry.getIn(["data", "blurb", "heading"])}</h3>
              <p class="lead animate-this">{entry.getIn(["data", "blurb", "heading"])}</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
  }
}
