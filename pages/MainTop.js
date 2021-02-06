import  Image from 'next/image';

export default function MainTop() {
    return (
      <div className="MainTopContainer">
        <div className="MtImageDiv">
          <Image src="/reader.jpg" alt="Woman reading a book"  layout="fill" />
        </div>
        <div className="MtBlogHeadDiv">
          <h1>Main top blog title that may be a few lines long</h1>
        </div>
      </div>
    );
  }