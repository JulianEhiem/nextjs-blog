import styles from '../../styles/post.module.css';
import Nav from '../../components/Nav/Nav'
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { useState, useEffect } from 'react';

const Post = ({ title, body, image }) => {
const [imageUrl, setImageUrl] =  useState('');

useEffect(() => {
  const imgBuilder = imageUrlBuilder({
    projectId: 'nttcyj7x',
    dataset: 'production',
  });

  setImageUrl(imgBuilder.image(image))
}, [image]);
 
console.log(body)
  return (
    <div>
      <Nav/>
      <div className = {styles.main}>
        <h1 className = {styles.main}>{title}</h1>
        {imageUrl && <img className = {styles.mainImage} src={imageUrl}/> }

        <div className ={styles.body}> 
          <BlockContent blocks={body}/>
        </div>

      </div>
    </div>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  

  if(!pageSlug){
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://nttcyj7x.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());

  const post = result.result[0];

  if(!post){
    return {
      notFound : true
    }
  } else {
    return {
      props: {
        title : post.title,
        body : post.body,
        image: post.mainImage,
      }
    }
  }


};

export default Post;
