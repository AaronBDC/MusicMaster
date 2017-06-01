import React, {Component} from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }
  search(){
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search'

    // old way
    //const FETCH_URL = BASE_URL + 'q=' + this.state.query
    //                + '&type=artist&limit=1';

    // es6 way using template strings
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    

    console.log('FETCH_URL', FETCH_URL);
  }
  render(){
    return(
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Who's da Mastah?"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress = {event => {
                if (event.key === 'Enter') {
                  this.search()
                  }
                }}
              />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="glyphicon glyphicon-sunglasses"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
