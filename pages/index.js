// import MyApp from './_app'
import { useState, useEffect } from 'react';
import App from "../components/App";
import {PostContext} from "../components/PostContext"
import imageUrlBuilder from '@sanity/image-url';

// import PostContentProvider from "../components/PostContext";





export default function Home({posts}) {
// console.log(posts)
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'nttcyj7x',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(800).height(600),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);
  return (
    <div>
      <PostContext.Provider value={{mappedPosts, useEffect}}>
        <App/>
      </PostContext.Provider>
    </div>
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://nttcyj7x.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
  // console.log(posts)
};


