/* 
// Original
function Beer(props) {
    return (
        <div className="beer">
            {props.info.title}
        </div>
    )
}
export default Beer; */


function Beer({info, randomNum}) {
    const {title, sub, text} = info
    return (
        <div className="beer">
            {title}
            {sub}
            {text}
            <button onClick={() => {console.log(`Clicked`)}}>Click me</button>
        </div>
    )
}
export default Beer;
