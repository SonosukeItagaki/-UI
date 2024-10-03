import React, { useState } from "react";
import './VolumeSlider.css'; // CSSを外部ファイルで管理

const VolumeSlider = () => {
  // メイン音源と背景音の音量（0〜100）を管理する
  const [volume, setVolume] = useState(50);
  const [backgroundVolume, setBackgroundVolume] = useState(50);

  // メイン音源のフェーダーが操作された時の処理
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  // 背景音のフェーダーが操作された時の処理
  const handleBackgroundVolumeChange = (event) => {
    setBackgroundVolume(event.target.value);
  };

  return (
    <div className="volume-slider-container">
      {/* メイン音源のフェーダー */}
      <div className="slider-group">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="slider"
        />
        <span className="volume-counter">{volume}</span> {/* カウンター表示 */}
      </div>

      {/* 背景音のフェーダー */}
      <div className="slider-group">
        <input
          type="range"
          min="0"
          max="100"
          value={backgroundVolume}
          onChange={handleBackgroundVolumeChange}
          className="slider"
        />
        <span className="volume-counter">{backgroundVolume}</span> {/* カウンター表示 */}
      </div>
    </div>
  );
};

export default VolumeSlider;
