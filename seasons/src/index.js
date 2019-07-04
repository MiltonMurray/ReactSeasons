import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        //THIS IS THE ONLY TIME TO DO DIRECT ASSIGNMENT TO THIS.STATE
        this.state = { lat: null, errorMessage:''};

        window.navigator.geolocation.getCurrentPosition((position)=>{
            //We called setState
            this.setState({lat: position.coords.latitude});
        }, (err) => {
            this.setState({errorMessage: err.message});
        });
    }

    componentDidMount(){
        console.log('my component was rendered to the screen');
    }

    componentDidUpdate(){
        console.log('My component just update, it re rendered.')
    }
    render(){ 
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }  

        if(!this.state.errorMessage && this.state.lat){
            return <div>latitude: {this.state.lat}</div>;
        }  
        
        return <div>Loading!</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));