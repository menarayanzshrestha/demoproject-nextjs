import Layout from '../components/Layout';
import ListShow from '../components/ListShow';
import nookies from "nookies";

const User = ({session}) => {
  if(session){
    return(
      <Layout>
        <div>
          <h1>WELCOME TO USER PAGE</h1>
          <ListShow/>
        </div>
      </Layout>
    )

    }else{
        return (
          <Layout>
            <div>
              <h1>LOADING...</h1>
            </div>
        </Layout>
        )
      }
    
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    console.log("cookies is",cookies);

    if(!cookies.token){
      window.location.href = "/login";
      context.res.writeHead(302, { Location: "/login" });
      context.res.end();
      return { props: [] };
    }
    // const token = await verifyIdToken(cookies.token);
    // console.log("token is",token);
    // const { uid, email } = token;
    return {
      // props: { session: `Your email is ${email} and your UID is ${uid}.` },
      props: { session: `Your email is` },
    };
  } catch (err) {
      console.log("inside catch");
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return { props: [] };
  }
}


export default User;