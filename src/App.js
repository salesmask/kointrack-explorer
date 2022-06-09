import CoinDetailsRoute from './routes/coindetails/CoinDetailsRoute';
import HomeRoute from './routes/home/HomeRoute';
import './styles/global.css';

function App() {
    return (
        <>
            <HomeRoute />
            <CoinDetailsRoute />
        </>
    );
}

export default App;
