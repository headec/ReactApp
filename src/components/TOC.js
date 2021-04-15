import React, {Component} from 'react'; //리액트에서 컴포넌트를 불러옴

class TOC extends Component{
    render(){
        console.log('TOC render');
        var lists =[];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>) //key는 새로 생성할때마다 react 가 구분 짓기위해 필요. href 는 주소값
            i += 1;
        }
      return(
        <nav>
          <ul>
            {lists}
            {/* <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JS</a></li> */}
          </ul>
        </nav>
      );
    }
  }

  export default TOC;