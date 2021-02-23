import { createContext } from 'react';

export const PostContext = createContext();

// const PostContentProvider = ({posts}) => {

//     const [mappedPosts, setMappedPosts] = useState([]);

//     useEffect(() => {
//         if(posts.length) {
//             const imgBuilder = imageUrlBuilder({
//                 projectId: 'nttcyj7x',
//                 dataset: 'production',
//             });

//             setMappedPosts(
//                 Post.map
//             )
//         }else {
//             setMappedPosts([]);
//         }

//     }, [posts])

//     return (
//         <PostContext.Provider value ={{mappedPosts, setMappedPosts}}>
//             {props.children}
//         </PostContext.Provider>
//     )
// }

// export default PostContentProvider;