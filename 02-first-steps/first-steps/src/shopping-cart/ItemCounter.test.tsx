import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {

        const name = 'Test item';
        const quantity = 10;

        render(<ItemCounter name = {name} quantity={quantity} />);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(quantity)).toBeDefined();

        screen.debug();
    });

    test('should increment when +1 button is clicked', () => {
        render(<ItemCounter name = "Test item" quantity={1} />);

        const [buttonAdd, buttonReduce] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();

        
    });

    test('should decrease count when -1 button is clicked', () => {
        render(<ItemCounter name = "Test item" quantity={5} />);

        const [buttonAdd, buttonReduce] = screen.getAllByRole('button');

        fireEvent.click(buttonReduce);

        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease coutn when -1 button is pressen and quantity is 1', () => {
        render(<ItemCounter name = "Test item" quantity={1} />);
        const [buttonAdd, buttonReduce] = screen.getAllByRole('button');
        
        fireEvent.click(buttonReduce);
        
        expect(screen.getByText('1')).toBeDefined();

    });

    test('should turn black color to red when count is more than 5', () => {
        render(<ItemCounter name = "Test item" quantity={5} />);

        const [buttonAdd, buttonReduce] = screen.getAllByRole('button');

        const itemText = screen.getByText('Test item');

        expect(itemText.style.color).toBe('black');
        
        fireEvent.click(buttonAdd); //6

        expect(itemText.style.color).toBe('red');
        
    });
});