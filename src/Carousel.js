import React from "react";
import CarouselButton from "./CarouselButton";

class Carousel extends React.PureComponent {
  state = {
    slideIndex: 0,
  };

  handleClickPrevious = () => {
    this.setState(({ slideIndex }) => ({ slideIndex: slideIndex - 1 }));
  };
  handleClickNext = () => {
    this.setState(({ slideIndex }) => ({ slideIndex: slideIndex + 1 }));
  };

  render() {
    return (
      <div>
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
