import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw} from "draft-js";
import draftToHtml from 'draftjs-to-html';


export function Compose() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [to, setTo] = useState(""); 
  const [subject, setSubject] = useState(""); 

  const onEditorStateChange = (newState) => {
    setEditorState(newState);
  };

  const handleSend = () => {

    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);


    const bodyText = contentState.getPlainText();


    const htmlContent = draftToHtml(rawContent);

    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Body (Plain Text):", bodyText);
    console.log("Body (HTML):", htmlContent);
    

  };

  return (
    <div className="flex flex-col w-full h-screen p-6 pt-24">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Compose Email</h2>
      </div>

      <div className="mb-4">
        <label htmlFor="to" className="block text-sm font-medium text-gray-700">
          To
        </label>
        <input
          id="to"
          type="email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Recipient's email"
        />
      </div>


      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email Subject"
        />
      </div>

     
      <div className="flex-grow mb-4">
        <label className="block text-sm font-medium text-gray-700">Body</label>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          placeholder="Write your email here..."
        />
      </div>

     
      <div className="absolute bottom-6 right-6">
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition-all duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
}
