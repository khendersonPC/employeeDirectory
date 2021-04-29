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
                    resultArr:res.data.results,
                })
            )
            .catch(err => console.log(err));
    };

    handleSearchChange=event=>{
       // this.setState({resultArr:this.state.myArr})
        this.setState({searchName:event.target.value});
        this.setState(
        {resultArr:this.state.myArr.filter(person=>person.name.first.toLowerCase().includes(event.target.value.toLowerCase())||person.name.last.toLowerCase().includes(event.target.value))});
    }

    sortAZ=order=>{
        if(order=="first"){
           
            this.setState(
                {resultArr:this.state.myArr.sort((a, b)=>(a.name.first>b.name.first) ? 1:-1)});
                console.log(this.state.resultArr)
        }
        else{
           
            this.setState(
                {resultArr:this.state.myArr.sort((a, b)=>(a.name.last>b.name.last) ? 1:-1)});
                console.log(this.state.resultArr)
        }
    }

    sortZA=order=>{
        if(order=="first"){
           
            this.setState(
                {resultArr:this.state.myArr.sort((a, b)=>(a.name.first>b.name.first) ? -1:1)});
                console.log(this.state.resultArr)
        }
        else{
           
            this.setState(
                {resultArr:this.state.myArr.sort((a, b)=>(a.name.last>b.name.last) ? -1:1)});
                console.log(this.state.resultArr)
        }
             
    }
   
   
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
            <Table table={this.state.resultArr} sortAZ={this.sortAZ} sortZA={this.sortZA}/>
        </div>
    )
}

}

export default Home;