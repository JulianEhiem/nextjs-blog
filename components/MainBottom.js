import  Image from 'next/image';

export default function MainBottom() {
    return (
      <div className="MainBottomContainer">
        <div className="MbImageDiv">
          <Image src="/reader.jpg" alt="Woman reading a book"  layout="fill" />
        </div>
        <div className="MbBlogHeadDiv">
          <h1>Main top blog title that may be a few lines long</h1>
        </div>
      </div>
    );
  }