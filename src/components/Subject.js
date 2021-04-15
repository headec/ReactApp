import React, {Component} from 'react'; //리액트에서 컴포넌트를 불러옴

class Subject extends Component {
    render(){
      console.log('Subject render');
      return(
        // 하나의 최상위 태그만 this.props.title 인곳에 title 값이 들어오면 입력됨.
        <header> 
          <h1><a href= "/" onClick = {function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;