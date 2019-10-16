import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./pages/API";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";
import ProfilePage from "./pages/profile"
// eslint-disable-next-line 
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000/scrape")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <Router>
        <Route exact path="/api" component={API}></Route>
        <Route path="/signup" component={SignUpPage}></Route>
        <Route path="/signin" component={SignInPage}></Route>
        <Route path="/profile" component={ProfilePage}></Route>
      </Router>
    );
  }
}

export default App;

// export default App;

// import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// injectTapEventPlugin();
// import './App.css';
// import Loginscreen from './Loginscreen'
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loginPage:[],
//       uploadScreen:[]
//     }
//   }
//   componentWillMount(){
//     var loginPage =[];
//     loginPage.push(<Loginscreen parentContext={this}/>);
//     this.setState({
//                   loginPage:loginPage
//                     })
//   }
//   render() {
//     return (
//       <div className="App">
//         {this.state.loginPage}
//         {this.state.uploadScreen}
//       </div>
//     );
//   }
// }
// const style = {
//   margin: 15,
// };
// export default App;

// if(response.data.code == 200){
//   console.log("Login successfull");
//   var uploadScreen=[];
//   uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
//   self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//   }
