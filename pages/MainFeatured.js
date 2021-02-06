import  Image from 'next/image';
// import "../styles/MainFeatured.module.css";

export default function MainFeatured() {
    return (
      <div className="MainFeaturedContainer">
        <div className="MtImageDiv">
          <Image src="/reader.jpg" alt="Woman reading a book"  layout="fill" />
        </div>
        <div className="MtBlogHeadDiv">
          <h1>Understanding Props</h1>
        </div>
        <div className="MtBlogBodyDiv">
          <p>
            You can import a file right in a JavaScript module. This tells webpack
            to s simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make 
            a type specimen book. It has survived not only five centuries...
          </p>
        </div>
      </div>
    );
  }