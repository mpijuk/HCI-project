import '../styles/globals.css';
import Layout from '../layout/Layout';
import CartProvider from '../component/CartProvider';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider >
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </CartProvider>
    
  ); 
};

export default MyApp;
