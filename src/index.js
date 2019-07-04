import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component{
    state = {lat: null, errorMessage:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}), 
            (err) => this.setState({errorMessage: err.message})
            );
    }
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }  

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }  
        return <Spinner message="Please accept location request"/>;
    }

    render(){ 
        return <div className='border red'>{this.renderContent()}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
=======
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 234555524b6d8d184a460d358d9f63b7a5e35b5b
