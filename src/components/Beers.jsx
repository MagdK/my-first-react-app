/* 
// Original
import Beer from './Beer.jsx'

function Beers(props) {
    console.log(props.list)
    return (
        <div className="beers">
            {props.list.map(item => <Beer info={item} />)}
        </div>
    )
}
export default Beers; */


import Beer from './Beer.jsx'

function Beers({list}) {
    const a = 10
    // console.log(list)

    console.log(<Beer info={list[0]} randomNum={a} key={100}/>);
    return (
        <div className="beers">
            {list.map((item, index) => <Beer info={item} randomNum={a} key={index}/>)}
        </div>
    )
}

export default Beers;