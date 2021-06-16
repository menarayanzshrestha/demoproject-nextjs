import {AuthProvider} from "../auth";

function MyApp({Component, pageProps}) {
    console.log("heer is auth page");
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

export default MyApp;