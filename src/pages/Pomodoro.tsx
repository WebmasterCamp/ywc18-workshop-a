import React from 'react';
import { ReactElement } from "react";
import { Container } from '@material-ui/core';
import { useTimer } from 'react-timer-hook';
import { useState } from 'react';
import { PomodoroMode } from '@/types';
import { useCallback } from 'react';
import { useEffect } from 'react';

const time = new Date();

const focusSeconds = 4;
const freeSeconds = 2;
time.setSeconds(time.getSeconds() + focusSeconds);

export function Pomodoro(): ReactElement {

  const [endTime, setEndTime] = useState<number>(0)
  const [mode, setMode] = useState<PomodoroMode>('inactive');

  const handleTimerExpire = useCallback(() => {
    nextPhrase();
  }, [mode])
  
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: endTime, onExpire: handleTimerExpire });

  useEffect(() => {
    if (mode !== 'inactive') {
      resume();
    }
  }, [isRunning, mode])

  // useEffect(() => {
  //   console.log('endTime changed ' + endTime )
  //   resume();
  // }, [endTime])

  const setPhrase = (newMode: PomodoroMode, seconds: number) => {
    setMode(newMode);
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds);
    console.log({ newMode, time });
    setEndTime(time.getTime());
    restart(time.getTime());
  }

  const nextPhrase = useCallback(() => {
    console.log('next phrase')
    console.log({ mode })
    switch (mode) {
      case 'inactive':
        start();
        setPhrase('focus', focusSeconds);
        break;
      case 'focus':
        setPhrase('break', freeSeconds);
        break;
      case 'break':
        setPhrase('focus', focusSeconds);
        break;
    }
  }, [mode])

  const handleStart = () => {
    nextPhrase();
  }

  return (
    <Container>
      Timer
      Mode: {mode}
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      {/* <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 5);
        restart(time)
      }}>Restart</button> */}
    </Container>
  );
};