import "./List.css"
import Userinfo from "./userInfo/userinfo" 
import ChatList from "./chatList/ChatList"

const List = () => {
    return(
        <div className='list'>
            <Userinfo/>
            <ChatList/>
        </div>
    )
}

export default List