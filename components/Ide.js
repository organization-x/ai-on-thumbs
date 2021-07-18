import React from "react";
import SyntaxHighlighter from 'react-native-syntax-highlighter';

/*by default component uses hljs so access hljs styles, import from /prism for prism styles */

import { docco } from 'react-syntax-highlighter/styles/hljs';

export default function IDE({ codeString }){
	return (
		<SyntaxHighlighter 
			language='python' 
			style={docco}
			highlighter={"hljs"}
		>
			{codeString}
		</SyntaxHighlighter>
	);  
};