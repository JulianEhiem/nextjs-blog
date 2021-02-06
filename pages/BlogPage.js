import LeftTop from './LeftTop';
import RightTop from './RightTop';
import MainFeatured from './MainFeatured';
import MainTop from './MainTop';


export default function BlogPage() {
    return (
      <div className="blogContainer">
        <MainFeatured/>
        <MainTop/>
        <LeftTop/>
        <RightTop/>
      </div>
    );
  }