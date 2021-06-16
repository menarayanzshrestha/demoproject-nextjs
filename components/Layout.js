import Head from 'next/head';
import Navbar from './Navbar';
import Image from 'next/image';
import { useAuth } from '../auth';

const Layout = (props) => {

  const {user}=useAuth();
  return(

  <div>
    <Head>
      <title>Narayanz</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    
    <div className="container">
        {/* <Image
            src='/square-gopher.png'
            alt="Golang"
            height={200}
            width={500}
        /> */}
      {props.children}
    </div>
   
  </div>
)};

export default Layout;