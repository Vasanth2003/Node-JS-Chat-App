import { MultiChatSocket,MultiChatWindow,useMultiChatLogic } from "react-chat-engine-advanced"

const ChatsPage=(props)=>
{
    const chatProps=useMultiChatLogic(
    '47e79c8e-6e90-47e5-9cd1-de2b7be9428a',
    props.user.username,
    props.user.secret
    );
    return(
    <div style={{height:'100vh'}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps} style={{height:'100%'}}/>


    </div>)
    
}
export default ChatsPage