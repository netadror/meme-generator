
import bear from '../images/bear.svg';

function Main() {
    return (
        <div className="Main-container">
            <div className="Hero-text">
                <h1>Hello, I'm TimTim</h1>
            </div>
            <div className="Main-logo">
                <img src={bear} className="App-logo" alt="logo" />
            </div>
        </div>
    );

}

export default Main;