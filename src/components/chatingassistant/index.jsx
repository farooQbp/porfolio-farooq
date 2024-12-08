// import React, { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import CloseIcon from "@mui/icons-material/Close";
// import FullscreenIcon from "@mui/icons-material/Fullscreen";
// import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
// import SendIcon from "@mui/icons-material/Send";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import "./chatassistant.css";

// const ChatAssistant = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);

//   // Create an instance of GoogleGenerativeAI
//   const genAI = new GoogleGenerativeAI({
//     apiKey: "AIzaSyBEKXurJH8kMRu6ijuwCJ1M7EQBtPOnZ3g", // Make sure this API key is correct
//   });

//   const toggleChat = () => setIsOpen(!isOpen);

//   const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

//   const closeChat = () => {
//     setIsOpen(false);
//     setIsFullScreen(false);
//   };

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { role: "user", content: input }];
//     setMessages(newMessages);
//     setInput("");

//     try {
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//       const response = await model.generateContent({
//         prompt: input,
//         temperature: 0.7,
//         maxOutputTokens: 256,
//       });

//       if (!response || !response.text) {
//         throw new Error("Invalid response from Gemini API");
//       }

//       const reply = response.text;
//       setMessages([...newMessages, { role: "assistant", content: reply }]);
//     } catch (error) {
//       console.error("Error communicating with Gemini API:", error);
//       setMessages([
//         ...newMessages,
//         { role: "assistant", content: "Sorry, I couldn't process your request. Please try again later." },
//       ]);
//     }
//   };

//   return (
//     <div>
//       <div className="chat-icon" onClick={toggleChat}>
//         <ChatBubbleOutlineIcon style={{ fontSize: "30px", color: "#1e1e1e" }} />
//       </div>

//       {isOpen && (
//         <div className={`chat-popup ${isFullScreen ? "fullscreen" : ""}`}>
//           <div className="chat-header">
//             <span>Chat with our AI Assistant</span>
//             <div className="header-actions">
//               <button onClick={toggleFullScreen}>
//                 {isFullScreen ? (
//                   <FullscreenExitIcon style={{ color: "#fff" }} />
//                 ) : (
//                   <FullscreenIcon style={{ color: "#fff" }} />
//                 )}
//               </button>
//               <button onClick={closeChat}>
//                 <CloseIcon style={{ color: "#fff" }} />
//               </button>
//             </div>
//           </div>
//           <div className="chat-body">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`chat-message ${msg.role === "user" ? "user" : "assistant"
//                   }`}
//               >
//                 {msg.content}
//               </div>
//             ))}
//           </div>
//           <div className="chat-footer">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />
//             <button onClick={handleSend}>
//               <SendIcon style={{ color: "#fff" }} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatAssistant;




import OpenAI from 'openai/index.mjs';
import React, { useState } from 'react';


const ChatAssistant = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const client = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true // This is the default and can be omitted
      });

      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo-0125',
      });
      console.log(chatCompletion)
      // setResponse(completion.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      setResponse('Error: Could not generate response.');
    }
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default ChatAssistant;