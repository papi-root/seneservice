import React from "react";
import { ThemeProvider } from 'styled-components';
import ChatBot from "react-simple-chatbot";
function Chat2si(props) {  
  const theme = {
    background: '#fff',
    fontFamily: 'Helvetica',
    headerBgColor: '#16a085',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#16a085',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  const config = {
    width: "400px",
    height: "500px",
    background: '#27ae60',
    floating: true
  };
  const steps = [
      {
       id: "1",
       message: "Comment vous vous appelez ?",
       trigger: "2"
      },
      {
       id: "2",
       user: true, 
       trigger: "3"
      }, 
      {
        id: '3',
        message: 'Bonjour {previousValue}!',
        trigger: "4"
      },
      {
        id: '4',
        message: 'Bienvenue chez Sen Services Internation! Comment pourait on vous aider ?',
        trigger: '5'
      },
      {
        id: '5',
        options: [
          { value: 1, label: 'Equipement à moindre coût', trigger: '4' },
          { value: 2, label: 'Immobilier', trigger: '3' },
          { value: 3, label: 'Autres', trigger: '3' }
        ],
      },
      
    ];  
    
    return  <ThemeProvider theme={theme}>
              <ChatBot botAvatar={require("../img/chatbot.svg")} hideUserAvatar="true" steps={steps} {...config} />; 
            </ThemeProvider>
}export default Chat2si;