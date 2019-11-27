import React, { Component } from "react";
import {Carousel} from 'react-bootstrap'
export default class HomeCarousel extends Component {
  render() {
     //map array for carousel pics
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.represent.com/uploads/1291fbe334d656795b50c73407183b7f.jpg?auto=format&q=93"
              alt="First slide"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.represent.com/uploads/5231412882392dd1d7b549d119ef1f98.jpg?auto=format&q=93"
              alt="Third slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.represent.com/uploads/acf6f8f941090797a3ffdbc04ebf8ff0.jpg?auto=format&q=93"
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
