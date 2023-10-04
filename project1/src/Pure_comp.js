import React,{PureComponent,Component} from 'react';
export default class Pure_comp extends PureComponent{
    constructor(){
        super();
        this.state={
            data:1
        }
    }
    
      render(){
        function run(){
            console.log("calling");
        }
        return(
            <>
            {run()}
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.setState({data:this.state.data})}>changedata</button>
            </>
        )
    }
}