import react,{Component} from 'react'
export default class BasicClass extends Component {
    constructor(){
      super();
      this.state={
        data:"rishabh",
        id:0
      }
    }
    componentDidMount(){
      alert("mounted")
    }
    componentDidUpdate(){
      alert("updated")
    }
    render(){
      return(
        <>
        <h1>{this.state.id}
        </h1>
        <button onClick={()=>this.setState({id:this.state.id+1})}>updateid</button>
        </>
      )
    }
}