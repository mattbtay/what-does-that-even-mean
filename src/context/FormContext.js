import { createContext } from 'react';

export const FormContext = createContext({
    loading: false,
    response: '',
    type: false,
    simpleText: '',
    complicatedText: '',
    text: '',
    setLoading: () => {},
    setResponse: () => {},
    setType: () => {},
    setSimpleText: () => {},
    setComplicatedText: () => {},
    setText: () => {},
});