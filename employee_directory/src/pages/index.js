import React from 'react';
import Search from '../components/search'
import Table from '../components/table'
import API from '../utils/api'

class Home extends React.Component {
    state = {
        myArr: [],
        resultArr:[],
        searchName:""
    }
    
    componentDidMount() {
        API.getEmploy()
            .then(res =>
                this.setState({  
                    myArr: res.data.results,
                })
            )
            .catch(err => console.log(err));
    };

    handleSearchChange=event=>{
        this.setState({resultArr:this.state.myArr})
        this.setState({searchName:event.target.value});
        this.setState(
        {resultArr:this.state.myArr.filter(name=>name.name.first.includes(this.state.searchName)||name.name.last.includes(this.state.searchName))});
    }

    sortAZ=event=>{
        console.log("button clicked");
        this.setState({resultArr:this.state.myArr})
        //console.log(this.state.resultArr)
        this.setState(
            {resultArr:this.state.myArr.sort((a, b)=>(a.name.last>b.name.last) ? 1:-1)});
            console.log(this.state.resultArr)
    }
    // handleInputChange = event => {
    //     this.setState({ searchName: event.target.value });
    //     console.log(this.state.searchName)
    //     this.setState(
    //         {resultArr:this.state.myArr.filter(name=>name.name.first.includes(this.state.searchName)||name.name.last.includes(this.state.searchName))}
    //         );
    //     //this.setState({myArr:this.state.resultArr});
    //   };
   
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.search(this.state.search);
    //   };

render(){
   // console.log(this.state.myArr);
    return (
        <div>
            <Search handleSearchChange={this.handleSearchChange}/>
            {/* <Table table={this.state.myArr}/> */}
            <Table table={this.state.resultArr} sortAZ={this.sortAZ}/>
        </div>
    )
}

}

export default Home;