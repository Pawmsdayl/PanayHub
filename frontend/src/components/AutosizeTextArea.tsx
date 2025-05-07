// import { useState, useRef, useEffect } from 'react';
//
// function AutoResizingTextarea() {
//   const [value, setValue] = useState('');
//   const textareaRef = useRef(null);
//
//   // Auto-resize effect
//   useEffect(() => {
//     const textarea = textareaRef.current;
//     if (textarea) {
//       textarea.style.height = 'auto';
//       textarea.style.height = `${textarea.scrollHeight}px`;
//     }
//   }, [value]);
//
//   return (
//     <textarea
//       ref={textareaRef}
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       placeholder="Type something..."
//       className="w-full min-h-[40px] resize-none overflow-hidden p-2 text-base leading-relaxed border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
//     />
//   );
// }
//
// export default AutoResizingTextarea;

import { useState, useRef } from 'react';

function AutoResizingTextarea() {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setValue(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onInput={handleInput}
      placeholder="Type your message..."
      className="w-full text-white min-h-[40px] resize-none overflow-hidden p-2 text-base leading-relaxed border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

export default AutoResizingTextarea;
