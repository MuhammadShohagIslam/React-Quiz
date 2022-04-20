import "../assets/styles/App.css"
import Layout from "./Layout/Layout";
import Home from './Pages/Home';
import Quiz from "./Pages/Quiz";
import SignIn from './Pages/SignIn';
import Result from './Pages/Result';

function App() {
    return (
        <Layout>
            <Home/>
            <SignIn/>
            <Quiz/>
            <Result/>
        </Layout>
    );
}

export default App;
