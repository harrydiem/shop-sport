import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
        <div className="col-xs-12 col-sm-12 col-md-9">
          <div id="hero">
            <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
              <div
                className="item"
                style={{
                  backgroundImage: "url(../../assets/images/sliders/02.jpg)",
                }}
              >
                <div className="container-fluid">
                  <div className="caption bg-color vertical-center text-left">
                    <div className="slider-header fadeInDown-1">
                      Top Brands 2018
                    </div>
                    <div className="big-text fadeInDown-1">
                      Digital <span className="highlight">Watch</span>
                    </div>
                    <div className="excerpt fadeInDown-2 hidden-xs">
                      {" "}
                      <span>Get 50% off on selected items</span>{" "}
                    </div>
                    <div className="button-holder fadeInDown-3">
                      {" "}
                      <a
                        href="index.php?page=single-product"
                        className="btn-lg btn btn-uppercase btn-primary shop-now-button"
                      >
                        Shop Now
                      </a>{" "}
                    </div>
                  </div>
                  {/* /.caption */}
                </div>
                {/* /.container-fluid */}
              </div>
              {/* /.item */}
              <div
                className="item"
                style={{
                  backgroundImage: "url(../../assets/images/sliders/01.jpg)",
                }}
              >
                <div className="container-fluid">
                  <div className="caption bg-color vertical-center text-left">
                    <div className="slider-header fadeInDown-1">
                      Spring 2018
                    </div>
                    <div className="big-text fadeInDown-1">
                      {" "}
                      Modern <span className="highlight">Chair</span>{" "}
                    </div>
                    <div className="excerpt fadeInDown-2 hidden-xs">
                      {" "}
                      <span>
                        Nemo enim ipsam voluptatem quia <br /> voluptas sit
                        aspernatur.
                      </span>{" "}
                    </div>
                    <div className="button-holder fadeInDown-3">
                      {" "}
                      <a
                        href="index.php?page=single-product"
                        className="btn-lg btn btn-uppercase btn-primary shop-now-button"
                      >
                        Shop Now
                      </a>{" "}
                    </div>
                  </div>
                  {/* /.caption */}
                </div>
                {/* /.container-fluid */}
              </div>
              {/* /.item */}
            </div>
            {/* /.owl-carousel */}
          </div>
        </div>
    );
  }
}
