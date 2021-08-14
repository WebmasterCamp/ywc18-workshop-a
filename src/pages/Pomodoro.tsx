import styled from '@emotion/styled'
import {
  Container,
  Button,
  LinearProgress,
  Typography,
} from '@material-ui/core'
import React, {
  useMemo,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { useTimer } from 'react-timer-hook'

import { BoardState } from '@/backend/board'
import favicon from '@/favicon.svg'
import PomodoroBackground from '@/public/pomodoro_background.svg'
import { PomodoroMode } from '@/types'

const TimerBox = styled.div`
  margin-top: 192px;
  margin-left: 86px;
  width: 220px;
  text-align: center;
`

const TimerButtonContainer = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: center;
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
  background-color: #eb5757;
  color: white;

  &:hover {
    background-color: #bf2828;
  }
`

const SkipButton = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 32px;
  cursor: pointer;
`

const modeLabel: Record<PomodoroMode, string> = {
  inactive: 'ยังไม่เริ่มนับเวลา',
  focus: 'เวลาทำงาน',
  break: 'เวลาพักงาน',
}

const focusSeconds = 25 * 60
const freeSeconds = 5 * 60

const maxSecond: Record<PomodoroMode, number> = {
  inactive: 0,
  focus: focusSeconds,
  break: freeSeconds,
}

const time = new Date()
time.setSeconds(time.getSeconds() + focusSeconds)

export interface PomodoroProps {
  state: BoardState
  setState: (newState: BoardState) => void
  viewMode: boolean
}

export function Pomodoro({
  state,
  setState,
  viewMode,
}: PomodoroProps): ReactElement {
  const endTime = state.endTime
  const mode = state.mode
  const previousMode = useRef<PomodoroMode>(mode)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    const oldMode = previousMode.current
    if (mode === oldMode) return
    previousMode.current = mode
    if (mode === 'focus' && oldMode == 'break') {
      new Notification('พักผ่อนจนหนำใจ ได้เวลากลับไปทำงานแล้ว!')
    } else if (mode === 'break' && oldMode == 'focus') {
      new Notification('พักผ่อนได้แล้วนะคนเก่ง! ได้เวลาสนุกแล้วสิ')
    }
  }, [mode])

  const handleTimerExpire = useCallback(() => {
    nextPhrase()
  }, [mode])

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: endTime, onExpire: handleTimerExpire })

  useEffect(() => {
    start()
    setTimeout(() => restart(endTime), 0)
  }, [endTime])

  useEffect(() => {
    if (mode !== 'inactive') {
      resume()
    } else {
      pause()
    }
  }, [isRunning, mode])

  const setPhrase = (newMode: PomodoroMode, seconds: number) => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + seconds)
    time.setMilliseconds(0)
    setState({
      endTime: time.getTime(),
      mode: newMode,
    })
  }

  const nextPhrase = useCallback(() => {
    switch (mode) {
      case 'inactive':
        setPhrase('focus', focusSeconds)
        break
      case 'focus':
        setPhrase('break', freeSeconds)
        break
      case 'break':
        setPhrase('focus', focusSeconds)
        break
    }
  }, [mode])

  const handleStart = () => {
    nextPhrase()
  }

  const handleStop = () => {
    setPhrase('inactive', 0)
  }

  const handleSkip = () => {
    if (mode !== 'inactive') {
      setPhrase(mode, 5)
    }
  }

  const currentPercentage = useMemo(() => {
    if (mode === 'inactive') {
      return 0
    }
    const percentage = (minutes * 60 + seconds) / maxSecond[mode]
    return 100 - percentage * 100
  }, [mode, minutes, seconds])

  const renderTimerButtonContainer = () => {
    return (
      <TimerButtonContainer>
        {mode === 'inactive' ? (
          <Button variant="contained" color="primary" onClick={handleStart}>
            เริ่มนับเวลา
          </Button>
        ) : (
          <DangerButton
            variant="contained"
            color="secondary"
            onClick={handleStop}
          >
            เลิกนับเวลา
          </DangerButton>
        )}
      </TimerButtonContainer>
    )
  }

  const renderTimer = () => {
    const minutesText = minutes < 10 ? `0${minutes}` : minutes
    const secondsText = seconds < 10 ? `0${seconds}` : seconds
    return (
      <TimerBox>
        <Typography variant="h6" fontWeight="medium">
          {modeLabel[mode]}
        </Typography>
        <TimerText>
          <Typography variant="h1" fontWeight="medium">
            {minutesText}:{secondsText}
          </Typography>
        </TimerText>
        <LinearProgress variant="determinate" value={currentPercentage} />
        {!viewMode ? renderTimerButtonContainer() : null}
        <SkipButton onClick={handleSkip} />
      </TimerBox>
    )
  }

  const renderTimerContainer = () => {
    return <Container>{renderTimer()}</Container>
  }

  return (
    <div>
      {renderTimerContainer()}
      <BackgroundContainer>
        <img src={PomodoroBackground} alt="React Logo" />
      </BackgroundContainer>
    </div>
  )
}
