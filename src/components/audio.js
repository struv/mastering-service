import React, { useRef, useState } from 'react';
import audioFile from '../assets/fireSampl2.mp3';
import audioFile2 from '../assets/joshua.mp3';


const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);
  
    return (
      <div>
        <h3>Before</h3>
        <audio ref={audioRef} src={audioFile} controls />
        <h3>After</h3>
        <audio ref={audioRef} src={audioFile2} controls/>
      </div>
    );
  };

export default AudioPlayer;