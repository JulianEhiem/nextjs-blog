import  Image from 'next/image';
import "../styles/MainFeatured.module.css";

export default function MainFeatured() {
    return (
      <div className="MainFeaturedContainer">
        <div className="imageDiv">
          <Image src="/reader.jpg" alt="Woman reading a book" className="imageSizer" width ={250} height={350} />
        </div>
        <div className="blogHeadDiv">
          <h1>Understanding Props</h1>
        </div>
        <div className="blogBodyDiv">
          <p>
            You can import a file right in a JavaScript module. This tells webpack
            to...
          </p>
        </div>
      </div>
    );
  }