"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

export default class TestimonialSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <div className="nicolas_sm_section">
        <div className="nicolas_sm_testimonials">
          <div className="container">
            <div className="nicolas_sm_main_title">
              <div className="left">
                <span>
                  {this.props.sectionNumber} // {this.props.title}
                </span>
              </div>
              <div className="center">
                <p>
                  Happy customers give us impactfull and positive feedback
                  on my services, customer supports &amp; etc.
                </p>
              </div>
              <div className="right">
                <div className="prev_next">
                  <a
                    className="prev "
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.previous();
                    }}
                  >
                    <img className="sm_svg" src="img/svg/arrow.svg" alt={1} />
                  </a>
                  <a
                    className="next "
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.next();
                    }}
                  >
                    <img className="sm_svg" src="img/svg/arrow.svg" alt={2} />
                  </a>
                </div>
              </div>
            </div>
            <div className="testimonials_in">
              <Slider
                ref={(c) => (this.slider = c)}
                {...sliderProps.testimonial}
                className=""
              >
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                      Saravan is one of the best in his domain. You name it , Saravana will code it with precision and expertise. He not only built my dream website with the available and limited resources but also guided me through each and every step of the process. learned a lot from him and it was wonderful working with such an exceptionally brilliant professional. I highly recommend Saravana for any project – he's always a top choice!
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/1.jpg" alt={1} />
                      </div>
                      <div className="job">
                        <h3>Harsha Anil</h3>
                        <span>Founder KARMIKH</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                      Saravan is my goto guy for all things website development. He has great coding experience. He will get things done with a quick turnaround. Very approachable and a pleasure to work with. Highly recommend his services for website development.
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/2.jpg" alt={2} />
                      </div>
                      <div className="job">
                        <h3>Anuja Nath</h3>
                        <span>Founder, Brandmade Consult</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                      He is a beast in coding. I am working with Saravana for the last couple of months and he is the best guy I have found in my development team. He is very instant in responding, doing the work on time, I think he never sleeps. I have already worked with Saravana on 15+ projects and we have to go a long way. He is very knowledgeable. He pays close attention to details. He is also very patient in client training and taking calls. Thanks a lot, Saravana.
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/3.jpg" alt={3} />
                      </div>
                      <div className="job">
                        <h3>Vishal Goswami</h3>
                        <span>Founder at Friction Studio</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="list_inner">
                    <div className="details">
                      <img className="sm_svg" src="img/svg/quote.svg" alt={1} />
                      <p>
                      A very skilled web developer. He volunteered to help us with several tasks on the website of our foundation, Faunawatch. He is quick and communicates well. It is very nice to work with him. I would definitely recommend him to others. 
                      </p>
                    </div>
                    <div className="info">
                      <div className="image">
                        <img src="img/testimonials/2.jpg" alt={2} />
                      </div>
                      <div className="job">
                        <h3>Tim Huijsmans</h3>
                        <span>President Faunawatch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TestimonialSlider.defaultProps = {
  title: "Satisfied clients",
  sectionNumber: "06",
};
