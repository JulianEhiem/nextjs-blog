// import '../styles/globals.css'
// // import App from "../components/App";


// function MyApp(){
//   return <>Nothing Here</>
// }

// export default MyApp

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp