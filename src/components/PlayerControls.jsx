'use client';

import React from 'react'
import { PlayFill, SkipEndFill, SkipStartFill } from 'react-bootstrap-icons';

const PlayerControls = () => {
    //TODO: add useMusicplayer

    return (
        <div>
            <div>
                <p>CURRENT TRACK NAME</p>
            </div>
            <button>
                <SkipStartFill />
            </button>
            <button>
                <PlayFill />
            </button>
            <button>
                <SkipEndFill />
            </button>
        </div>
    )
}

export default PlayerControls