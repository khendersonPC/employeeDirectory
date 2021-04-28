import React from 'react';
import Search from '../components/search'
import Table from '../components/table'
import API from '../utils/api'

class Home extends React.Component {
    state = {
        myArr: [{}]
    }
   
    componentDidMount() {
        API.getEmploy()
            .then(res =>
                this.setState({  
                    myArr: res.data,
                })
            )
            .catch(err => console.log(err));
    };

render(){
    //console.log(this.state.myArr);
    return (
        <div>
            <Search />
            <Table table={this.state.myArr}/>
        </div>
    )
}

}

export default Home;