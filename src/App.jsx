import React, { useState, useEffect } from 'react'
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Homepage from './components/Homepage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'
import TranscriptionBox from './components/TranscriptionBox'

function App() {

  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const [textToCopy, setTextToCopy] = useState('')

  const isAudioAvailable = file || audioStream

  function handleAudioReset() {
    setFile(null)
    setAudioStream(null)
    resetTranscript()
  }

  


  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

  useEffect(()=>{
    resetTranscript()
  },[])

  return (
    <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>

        <Header />
        {isAudioAvailable ?
          <FileDisplay handleAudioReset={handleAudioReset} file={file} audioStream={audioStream} />
          :
          <Homepage setFile={setFile} setAudioStream={setAudioStream} startListening={startListening}  />}

        <TranscriptionBox transcript={transcript} browserSupportsSpeechRecognition={browserSupportsSpeechRecognition} textToCopy={textToCopy} setTextToCopy={setTextToCopy}/>

      </section>
    </div>
  )
}

export default App
