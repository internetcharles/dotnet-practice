import React, {Component} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        console.log(response);
        this.setState({
          values: response.data
        })
      })
    this.setState({
      values: [{id: 1, name:"Value 101"}, {id: 2, name: 'Value 102'}]
    })
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((x: any, idx: number) => (
              <List.Item key={idx}>{x.name}</List.Item>
            ))}
        </List>
          <ul>

          </ul>
      </div>
    );
  }
}

export default App;
