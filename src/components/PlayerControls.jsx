'use client';

import { PauseFill, PlayFill, SkipEndFill, SkipStartFill } from 'react-bootstrap-icons';
import { useMusicplayer } from '../hooks/UseMusicContext';

const PlayerControls = () => {
    //TODO: add useMusicplayer
    const music = useMusicplayer();

    return (
        <div>
            <div>
                <p>{music.currentTrackName}</p>
            </div>
            <button onClick={() => music.playPreviousTrack()}>
                <SkipStartFill />
            </button>
            <button onClick={() => music.togglePlay()}>
                {music.isPlaying ? <PauseFill /> : <PlayFill />}
            </button>
            <button onClick={() => music.playNextTrack()}>
                <SkipEndFill />
            </button>
        </div>
    )
}

export default PlayerControls