import react,{PureComponent} from 'react'

export default class Purecomp extends PureComponent{
    constructor(){
        super();
        this.state={
            data:"rishab",
            id:0
        }
    }
    render(){
        console.log("render called");
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.setState({data:"rishab"})}> changing name</button>
            <button onClick={this.alpha}>alerting</button>
            </>
        )
    }
}