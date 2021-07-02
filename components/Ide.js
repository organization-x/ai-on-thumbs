import SyntaxHighlighter from 'react-native-syntax-highlighter';
import from prism for prism styles 
import { docco } from 'react-syntax-highlighter/styles/hljs';
const Component = () => {
  const codeString = '(num) => num + 1';
  return <SyntaxHighlighter 
  	language='python' 
  	style={docco}
  	highlighter={"prism" || "hljs"}
  >
  	{codeString}
  </SyntaxHighlighter>;  
}