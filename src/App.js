import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Loading from './components/Loading';
import ShowCorrectStateStore from './stores/ShowCorrectStateStore';
import ShowCorrectStateAction from './actions/ShowCorrectStateAction';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000)
  }

  render() {
    const firstPage = this.state.isLoading ? <Loading/> : <MainPage progress={this.state.progress}/>;
    return (
      <div className="App">
        {firstPage}
      </div>
    );
  }
}

export default App;
