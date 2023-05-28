import './KeyBoard.css'
import Butt from '../Butt/Butt'

export default function KeyBoard() {

    function handleButtAction() {
        alert('OK')
    }

    return (
        <div className='CalcBody'>
            <Butt name='7' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='8' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='9' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='/' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='4' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='5' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='6' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='X' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='1' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='2' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='3' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='-' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='0' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='.' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='=' action={/* (name) =>  */handleButtAction/*    */}></Butt>
            <Butt name='+' action={/* (name) =>  */handleButtAction/*    */}></Butt>
        </div>
    )
}