import React, {useState} from "react"
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
export default function IDE({text}) {
  return <SyntaxHighlighter 
  	language='python' 
  	style={docco}
  	highlighter={"prism" || "hljs"}
  >
    {text}
  </SyntaxHighlighter>;  
}