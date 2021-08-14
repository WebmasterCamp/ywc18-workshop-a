import React, { useMemo } from 'react';
import styled from '@emotion/styled'
import { ReactElement } from "react";
import { Box, Container, Button, Grid, LinearProgress } from '@material-ui/core';
import { useTimer } from 'react-timer-hook';
import { useState } from 'react';
import { PomodoroMode } from '@/types';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { SideBar } from '@/components/SideBar';
import { TopBar } from '@/components/TopBar';
import PomodoroBackground from '@/public/pomodoro_background.svg';
import { Scaffold } from '@/components/Scaffold';

const Layout = styled.div`
  display: flex;
`

const TimerBox = styled.div`
  margin-top: 168px;
  margin-left: 86px;
  width: 220px;
  text-align: center;
`

const TimerButtonBox = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
`
const ModeText = styled.div`
  font-size: 24px;
  font-weight: semi-bold;
`

const TimerText = styled.div`
  font-size: 72px;
  font-weight: bold;
  margin: 0 -64px;
`

const BackgroundContainer = styled.div`
  position: absolute;
  z-index: -100;
  bottom: 32px;
  right: 64px;
`

const DangerButton = styled(Button)`
  background-color: #EB5757;
  color: white;

  &:hover {
    background-color: #bf2828;
  }
`

const modeLabel: Record<PomodoroMode, string> = {
  'inactive': 'ยังไม่เริ่มนับเวลา',
  'focus': 'เวลาทำงาน',
  'break': 'เวลาพักงาน',
}


const focusSeconds = 25;
const freeSeconds = 5;

const maxSecond: Record<PomodoroMode, number> = {
  'inactive': 0,
  'focus': focusSeconds,
  'break': freeSeconds,
}

const time = new Date();
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
    } else {
      pause();
    }
  }, [isRunning, mode])

  const setPhrase = (newMode: PomodoroMode, seconds: number) => {
    setMode(newMode);
    const time = new Date();
    time.setSeconds(time.getSeconds() + seconds);
    console.log({ newMode, time });
    setEndTime(time.getTime());
    restart(time.getTime());
  }

  const nextPhrase = useCallback(() => {
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

  const handleStop = () => {
    setPhrase('inactive', 0);
  }

  const currentPercentage = useMemo(() => {
    if (mode === 'inactive') {
      return 0;
    }
    const percentage = ((minutes * 60) + seconds)/maxSecond[mode];
    console.log(percentage)
    return 100 - (percentage * 100);
  }, [mode, minutes, seconds])

  const renderTimerButtonContainer = () => {
    return (
      <TimerButtonBox>
        <Grid container direction="row" justifyContent="center" spacing={2}>
          { mode === 'inactive' ?
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleStart}>เริ่มนับเวลา</Button>
            </Grid>
            :
            <Grid item>
              <DangerButton variant="contained" color="secondary" onClick={handleStop}>เลิกนับเวลา</DangerButton>
            </Grid>
          }
        </Grid>
      </TimerButtonBox>
    );
  };

  const renderTimer = () => {
    return (
      <TimerBox>
        <ModeText>
          {modeLabel[mode]}
        </ModeText>
        <TimerText>
          {minutes}:{seconds}
        </TimerText>
        <LinearProgress variant="determinate" value={currentPercentage} />
      </TimerBox>
    );
  };

  const renderTimerContainer = () => {
    return (
      <Container>
        {renderTimerButtonContainer()}
        {renderTimer()}
      </Container>
    );
  };

  return (
    <Scaffold drawerChildren={<SideBar />}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {renderTimerContainer()}
        <BackgroundContainer>
          <img src={PomodoroBackground} alt="React Logo" />
        </BackgroundContainer>
      </Box>
    </Scaffold>
  );
};