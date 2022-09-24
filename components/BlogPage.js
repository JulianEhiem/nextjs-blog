import LeftTop from './LeftTop';
import RightTop from './RightTop';
import MainFeatured from './BlogPageOne';
import MainTop from './MainTop';
import RightBottom from './RightBottom';
import MainBottom from './MainBottom';
import LeftBottom from './LeftBottom';


export default function BlogPage() {
    return (
      <div className="blogContainer">
        <MainFeatured/>
        <MainTop/>
        <LeftTop/>
        <RightTop/>
        <RightBottom/>
        <MainBottom/>
        <LeftBottom/>
      </div>
    );
  }