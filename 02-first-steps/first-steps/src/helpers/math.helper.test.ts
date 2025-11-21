import {expect, test, describe} from 'vitest';
import { add, subtract, multiply, divide } from './math.helper';

describe('add', () => {
    test('should add two positives numbers', () => {
        //1. arrange
        const a = 2;
        const b = 3;
        //2. act
        const result = add(a, b);
        //3. assert
        expect(result).toBe(a + b);
    });

    test('should add two negative numbers', () => {
        //1. arrange
        const a = -2;
        const b = -3;
        //2. act
        const result = add(a, b);
        //3. assert
        expect(result).toBe(a + b);
    });

})

describe('subtract', () => {
    test('should subtract two positives numbers', () => {
        const a = 5;
        const b = 3;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });

    test('should subtract two negative numbers', () => {
        const a = -5;
        const b = -3;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });

});

describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        const a = 4;
        const b = 3;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });

    test('should multiply two negative numbers', () => {
        const a = -4;
        const b = -3;
        
        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });
});