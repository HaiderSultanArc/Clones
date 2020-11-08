import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Message.css';

const Message = forwardRef( // forwardRef is a higher order function, it just wraps what we already have with some additional functionalities, which in this case is ref (reference)
    ({fields, username}, ref) => {   // props that were passed to the component
        const isUser = username ===fields.username;   // username is the logged in user and message.username is the username who sent the message
        
        return (
            <div ref={ref} className={`message ${isUser && 'message__user'}`}>    {/* ref={ref} is reference of the object to use animations className is message and if the username === message.username then className is also message__user so only person who is logged in will get both classes for him only */}
                <Card className={isUser? "message__userCard": "message__questCard"}>  {/* if user is logged in then message__userCard is className else message__guestCard */}
                    <CardContent>
                        <Typography color="white" variant="h5" component="h2">
                            {fields.username}: {fields.message}   {/* fields.username is username and fields.message are the fields of individual document that were sent to react component by mapping through all the collections 'messages' */}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
})

export default Message
