import Head from 'next/head';
import Navbar from './Navbar';
import Image from 'next/image';
// import Gopher from "../square-gopher.png"

const Layout = (props) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    
    <div className="container">
        <Image
            src='/square-gopher.png'
            alt="Golang"
            height={200}
            width={500}
        />
      {props.children}
    </div>
   
  </div>
);

export default Layout;