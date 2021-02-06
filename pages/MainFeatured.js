import  Image from 'next/image';
// import "../styles/MainFeatured.module.css";

export default function MainFeatured() {
    return (
      <div className="MainFeaturedContainer">
        <div className="MfImageDiv">
          <Image src="/reader.jpg" alt="Woman reading a book"  layout="fill" />
        </div>
        <div className="MfBlogHeadDiv">
          <h1>Understanding Props</h1>
        </div>
        <div className="MfBlogBodyDiv">
          <p>
            You can import a file right in a JavaScript module. This tells webpack
            to s simply dummy text of the printing and typesetting industry.
            a type specimen book. It has survived not only five centuries...
            <br></br>
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical 
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
            This book is a treatise on the theory of ethics, very popular during the Renaissance. 
            The...
          </p>
        </div>
      </div>
    );
  }