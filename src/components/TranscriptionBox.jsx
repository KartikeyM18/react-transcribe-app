import React from 'react'


import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import useClipboard from "react-use-clipboard";







function TranscriptionBox(props) {

    const { browserSupportsSpeechRecognition, transcript, textToCopy, setTextToCopy } = props



    const [isCopied, setCopied] = useClipboard(textToCopy, { successDuration: 1000});

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (

        <div className='flex justify-center items-start h-64'>



            {transcript &&
                <div className="bg-white p-3 rounded-md specialBtn">
                    <div className='mb-3' onChange={setTextToCopy(transcript)} >{transcript} </div>
                    <button onClick={setCopied} className=' bg-slate-300 hover:bg-slate-400 p-2 rounded-md'>
                        <i className="fa-solid fa-copy pr-1"></i>
                        {isCopied && " Copied!"}
                    </button>
                </div>}

        </div>



    );
};


export default TranscriptionBox
