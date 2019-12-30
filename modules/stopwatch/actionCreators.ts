import {
    START,
    STOP
} from './actionTypes'

export function startStopwatch() {
    return { type: START }
}

export function stopStopwatch() {
    return { type: STOP }
}
