import React from "react";

export default class Hero extends React.Component {
  render() {
    const { siteTitle, title, aboutUsTitle, buttonText, sponsor } = this.props;
    return <section id="home">

      <div class="overlay"></div>

      <div class="home-content-table">
        <div class="home-content-tablecell">
          <div class="row">
            <div class="col-twelve">

              <h3 class="animate-intro">{aboutUsTitle}.</h3>
              <h1 class="animate-intro">{title}</h1>

              <div class="more animate-intro">
                <a class="smoothscroll button stroke" href="#about">{buttonText}</a>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div class="scrolldown">
        <a href="#about" class="scroll-icon smoothscroll">
          Scroll Down
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </section>;
  }
}
