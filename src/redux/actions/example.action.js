import {
    INCREMENT,
    DECREMENT
} from '../constants/index';

export const _INCREMENT = () => {
    return {
        type: INCREMENT
    }
}
export const _DECREMENT = () => {
    return {
        type: DECREMENT
    }
}