import { createContext, useContext, useRef, useState } from "react";

type MusicPlayerContextData = {
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  currentTime: number;
  setCurrentTime: (currentTime: number) => void;
  duration: number;
  setDuration: (duration: number) => void;
  audio: HTMLAudioElement | undefined;
  setAudio: (audio: HTMLAudioElement) => void;
};

const MusicPlayerContext = createContext<MusicPlayerContextData>(
  {} as MusicPlayerContextData
);

export function MusicPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement>();

  return (
    <MusicPlayerContext.Provider
      value={{
        playing: isPlaying,
        setPlaying: setIsPlaying,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        volume,
        setVolume,
        audio,
        setAudio,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export const useMusicPlayer = () => useContext(MusicPlayerContext);
