import { Person } from './person';

// /// <reference path="person.ts" />


export class Player implements Person {
    name!: string;
    age?: number;
    highScore!: number;
    formmatName() {
        this.name.toUpperCase();
    }
}