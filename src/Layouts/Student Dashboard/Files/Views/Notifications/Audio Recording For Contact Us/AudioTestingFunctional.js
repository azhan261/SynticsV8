import React from 'react'
import { createAudioFile } from '../../apiForAudioSending'

function AudioTestingFunctionalForStudent(props) {
    var TestingAudio = props
    var SendingFile = {
        url : TestingAudio.data
    }
    const dataSent = () => {
        if(TestingAudio.data == ""){
            console.log("didnt get anything")
        }
        else{
         createAudioFile(SendingFile)
        }
        
    }
    dataSent()
    return (
        <div>
            
        </div>
    )
}

export default AudioTestingFunctionalForStudent
