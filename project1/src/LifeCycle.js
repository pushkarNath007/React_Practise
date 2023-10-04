import {Component} from 'react';
 class LifeCycle extends Component{
    constructor(){
        super();
        this.state={
            name:"pushkar",
            number:0
        }
    }
    componentDidMount(){
        alert("success");
    }
    shouldComponentUpdate(pre,prestate,snapshot){
        alert("before");
        return true;
    }
    componentDidUpdate(){
        alert("updated"+this.state.number);
    }
    render(){
        return <div><h1>This is for testing:{this.state.number}</h1>
        <button onClick={()=>{this.setState({number: this.state.number+1})}}> update </button><br></br>
        
        </div>
    }
}
export default LifeCycle;