import React from "react";
import PropTypes from "prop-types";
import CarouselButton from "./CarouselButton";
import CarouselSlide from "./CarouselSlide";

class Carousel extends React.PureComponent {
  static propTypes = {
    slides: PropTypes.arrayOf(PropTypes.share(CarouselSlide.propTypes))
      .isRequired,
  };
  state = {
    slideIndex: 0,
  };

  handleWrapping = index => {
    const { slides } = this.props;
    return (index + slides.length) % slides.length;
  };

  handleClickPrevious = () => {
    this.setState(({ slideIndex }) => ({
      slideIndex: this.handleWrapping(slideIndex - 1),
    }));
  };
  handleClickNext = () => {
    this.setState(({ slideIndex }) => ({
      slideIndex: this.handleWrapping(slideIndex + 1),
    }));
  };

  render() {
    const { slides, ...rest } = this.props;
    return (
      <div {...rest}>
        <CarouselSlide {...slides[this.state.slideIndex]} />
        <CarouselButton data-action="prev" onClick={this.handleClickPrevious}>
          Previous
        </CarouselButton>
        <CarouselButton data-action="next" onClick={this.handleClickNext}>
          Next
        </CarouselButton>
      </div>
    );
  }
}

export default Carousel;
