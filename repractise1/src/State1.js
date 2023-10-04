export default function State1(props){
    return(
        <>
        <h1>{props.func.data.name}</h1>
        <h1>{props.func.data.id}</h1>
        <button type="submit" onClick={props.func1}>Change data</button>
        </>
    )
}