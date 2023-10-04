import react,{Component} from 'react';
export default class LifeCycle extends Component{
    constructor(){
        super();
        this.state={
            name:"rishabh",
            id:0
        }
    }
    componentDidMount(){
        console.log("mounted");
    }
    shouldComponentUpdate(){
        console.log("will update");
        return true;
    }
    componentDidUpdate(){
        console.log("updated")
    }
    render(){
        return(
            <>
            <h1>{this.state.id}</h1>
            <h2>{this.state.name}</h2>
            <button onClick={()=>{this.setState({id:this.state.id+1})}}>Change number</button>
            </>
        )
    }
}