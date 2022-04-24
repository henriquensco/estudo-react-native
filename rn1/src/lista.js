import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

export default [
    { id: uuid(), task: 'Fazer tal coisa 0', done: false },
    { id: uuid(), task: 'Fazer tal coisa 1', done: true },
    { id: uuid(), task: 'Fazer tal coisa 2', done: false },
    { id: uuid(), task: 'Fazer tal coisa 3', done: true },
    { id: uuid(), task: 'Fazer tal coisa 4', done: false },
];