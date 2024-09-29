import React, { useState, useRef } from 'react';
import './AudioFaderApp.css';

const AudioFaderApp = () => {
  // 状態管理: 音源音量と背景音量
  const [sourceVolume, setSourceVolume] = useState(0.5);
  const [bgVolume, setBgVolume] = useState(0.5);
  const sourceAudioRef = useRef(null);
  const bgAudioRef = useRef(null);

  // 音量調整ハンドラ
  const handleSourceVolumeChange = (e) => {
    setSourceVolume(e.target.value);
    sourceAudioRef.current.volume = e.target.value;
  };

  const handleBgVolumeChange = (e) => {
    setBgVolume(e.target.value);
    bgAudioRef.current.volume = e.target.value;
  };

  // データ送信
  const saveData = async () => {
    const data = {
      sourceVolume,
      bgVolume,
      timestamp: new Date().toISOString(),
    };
    
    const response = await fetch('http://localhost:3000/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Data saved successfully');
    } else {
      alert('Error saving data');
    }
  };

  return (
    <div className="audio-fader-app">
      <h1>Audio Fader Experiment</h1>
      <div className="fader-container">
        <label>Source Volume: {sourceVolume}</label>
        <input type="range" min="0" max="1" step="0.01" value={sourceVolume} onChange={handleSourceVolumeChange} />
      </div>
      <div className="fader-container">
        <label>Background Volume: {bgVolume}</label>
        <input type="range" min="0" max="1" step="0.01" value={bgVolume} onChange={handleBgVolumeChange} />
      </div>
      <audio ref={sourceAudioRef} src="/source.wav" controls loop></audio>
      <audio ref={bgAudioRef} src="/background.wav" controls loop></audio>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
};

export default AudioFaderApp;
