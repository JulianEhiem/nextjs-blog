import '../styles/globals.css'
// import Blogpage from '../components/BlogPage';

// function MyApp() {
//   return (
//     <div>
//       <Blogpage/>
//     </div>
//   )
// }

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
