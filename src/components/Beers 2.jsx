import Beer from './Beer.jsx'

function Beers(props) {
    console.log(props.list)
    return (
        <div className="beers">
            {props.list.map(item => <Beer info={item} />)}
        </div>
    )
}

export default Beers;