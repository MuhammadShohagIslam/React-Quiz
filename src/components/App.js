import "../assets/styles/App.css"
import Layout from "./Layout/Layout";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';

function App() {
    return (
        <Layout>
            <Home/>
            <SignIn/>
        </Layout>
    );
}

export default App;
