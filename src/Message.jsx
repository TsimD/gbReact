import React, {useEffect} from 'react';
import "./Style/Message.css";
import SendIcon from '@mui/icons-material/Send';
import {TextField, Button} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function Message (props) {
  const [messageList, setMessageList] = React.useState([]);

  const [valueAuthor, setValueAuthor] = React.useState('');
  const [valueText, setValueText] = React.useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    setMessageList(prevState => [...prevState, {
      id: genId(messageList),
      author: valueAuthor,
      text: valueText,
    }])
    setValueAuthor('');
    setValueText('');
  }

  function genId (arr) {
    return arr.length ? arr[arr.length - 1].id + 1 : 0
  }

  useEffect(() => {
    setTimeout(() => {
      botAnswer()
    }, 2000)
  }, [messageList])

  function botAnswer () {
    const lastAuthor = messageList[messageList.length - 1];

    if (lastAuthor && lastAuthor.author) {
      setMessageList(prevState => [...prevState, {
        id: genId(prevState),
        text: `Сообщение автора ${lastAuthor.author} отправлено`
      }])
    }

  }

  return (<div className='container'>
        <div className="form">
          <TextField id="outlined-basic" label="введите автора" variant="outlined" value={valueAuthor} autoFocus
                     onChange={(e) => setValueAuthor(e.target.value)}/>
          <TextField id="outlined-basic" label="введите сообщение" variant="outlined" value={valueText}
                     onChange={(e) => setValueText(e.target.value)}/>

          <Button variant="contained" endIcon={<SendIcon/>} onClick={handlerSubmit}>
            Send
          </Button>

        </div>

        {
          messageList.map((message => {
            return (
<div className="cardCont">
  <CardContent className="CardContent" key={message.id} sx={{backgroundColor:'#FAEBD7', borderRadius:'15px', margin:'10px'}}>
    <Typography sx={{fontSize: 14 }} color="text.secondary" gutterBottom>
      {message.author}
    </Typography>
    <Typography variant="h4" component="div">
      {message.text}
    </Typography>
  </CardContent>
</div>



            )
          }))
        }


      </div>


  );
}

export default Message;