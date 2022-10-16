import React, { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import App from '../components/App';
import { PostContext } from '../components/PostContext';

// eslint-disable-next-line react/prop-types
export default function Home({ posts }) {
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'nttcyj7x',
        dataset: 'production',
      });

      setMappedPosts(
        // eslint-disable-next-line react/prop-types
        posts.map((p) => ({
          ...p,
          mainImage: imgBuilder.image(p.mainImage).width(800).height(600),
        })),
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <PostContext.Provider value={{ mappedPosts, useEffect }}>
        <App />
      </PostContext.Provider>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://nttcyj7x.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  }
  return {
    props: {
      posts: result.result,
    },
  };
};
