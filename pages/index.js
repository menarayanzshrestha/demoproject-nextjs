import Layout from '../components/Layout';

import Price from '../components/Price';
import React from "react";
import Link from "next/link";
import { useAuth } from '../auth';
import Container from "../components/Container";
import {Button} from "antd";
import firebase from "firebase/app";
// import Head from 'next/head';

const Index = (props) => {
  const {user}=useAuth();
  return (
    <Container>
      
      <Layout>
        <div>
          <h1>Welcome to BitzPrice</h1>
          <p>Check current Bitcoin rate</p>
          <Price bpi={props.bpi}/>
        </div>
      </Layout>
    </Container>
  )
}
  

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}

export default Index;