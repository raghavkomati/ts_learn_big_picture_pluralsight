/// <reference path="person.ts" />


class Player implements Person {
    name!: string;
    age?: number;
    highScore!: number;
    formmatName() {
        this.name.toUpperCase();
    }
}