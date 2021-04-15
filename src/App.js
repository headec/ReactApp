//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{title:'WEB', sub: 'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React'},
      contents:[
        {id:1, title:'HTML', desc:' HTML is for info'},
        {id:2, title:'CSS', desc:' CSS is for info'},
        {id:3, title:'JS', desc:' JS is for info'}
      ]
    }
  }
  // props 나 state 가 바뀌면 렌더가 다시
  render(){
    console.log('App render');
    var _title, _desc = null; 
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render',this);
    return(
      <div className ="App">
        <Subject title = {this.state.subject.title} 
        sub = {this.state.subject.sub}
          onChangePage =  {function(){
            alert('hi');
            this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>
         {/* <header> 
          <h1><a href= "/" onClick={function(e){
            console.log('event in', this);
            e.preventDefault();
            return;
            console.log(e);
            e.preventDefault(); //페이지 리로드 되는걸 막아줌. 디폴트가 도는걸 방지.
            //this.state.mode = 'welcome';
            if(this.state.mode ==='read')
            this.setState({
              mode: 'welcome'
            })
            else this.setState({
              mode: 'read'
            });
            //debugger;
            //alert('hi');
          }.bind(this)}>{this.state.subject.title}</a></h1> {/* .bind(this)를 쓰면 그 function 에 this 값이 붙음}
          {this.state.subject.sub}
        </header> */}
        <TOC data = {this.state.contents}></TOC> {/* 매개변수 */}
        <Content title = {_title} desc = {_desc}></Content>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Edit <code>src/App.js</code> and save to reload.
          </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
          Learn React
         </a>
        </header> */}
      </div>
    );
  }
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
