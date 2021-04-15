import React, {Component} from 'react'; //리액트에서 컴포넌트를 불러옴

class Content extends Component{
    render(){
    console.log('Content render');
      return(
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
  }

export default Content;