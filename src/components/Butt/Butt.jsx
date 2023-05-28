import './Butt.css'

export default function Butt (props) {
    return (
        <div className='external-div' onClick={props.action}>
            <div className='internal-div'>
                <p>{props.name}</p>
            </div>
        </div>
    )
}