import { describe, expect, it } from 'vitest';
import Counter from '../../componnets/Counter';
import { screen, render, fireEvent } from '@testing-library/react';

describe('counter component test cases', () => {
    it('render test', async () => {
        render(<Counter initial={0} step={1} />);

        const heading = screen.getByRole('heading');
        const incBtn = screen.getByRole('button', { name: '+' })
        const decBtn = screen.getByRole('button', { name: '-' })
        const reset = screen.getByRole('button', { name: 'Reset' })

        expect(heading).toBeInTheDocument()
        expect(incBtn).toBeInTheDocument()
        expect(decBtn).toBeInTheDocument()
        expect(reset).toBeInTheDocument()

        const count = await screen.findByText('Counter: 0');
        expect(count).toBeInTheDocument()

        fireEvent.click(incBtn);
        const inccount = await screen.findByText('Counter: 1');
        expect(inccount).toBeInTheDocument()
        fireEvent.click(decBtn);
        const deccount = await screen.findByText('Counter: 0');
        expect(deccount).toBeInTheDocument();

        fireEvent.click(incBtn);
        fireEvent.click(incBtn);
        fireEvent.click(incBtn);
        const threeCount = await screen.findByText('Counter: 3');
        expect(threeCount).toBeInTheDocument();
        fireEvent.click(reset);
        const resetCount = await screen.findByText('Counter: 0');
        expect(resetCount).toBeInTheDocument();
    })
    it('Changing the Initial stage and Step', async () => {
        render(<Counter initial={2} step={2} />);

        const heading = screen.getByRole('heading');
        const incBtn = screen.getByRole('button', { name: '+' })
        const decBtn = screen.getByRole('button', { name: '-' })
        const reset = screen.getByRole('button', { name: 'Reset' })

        expect(heading).toBeInTheDocument()
        expect(incBtn).toBeInTheDocument()
        expect(decBtn).toBeInTheDocument()
        expect(reset).toBeInTheDocument()

        const count = await screen.findByText('Counter: 2');
        expect(count).toBeInTheDocument()

        fireEvent.click(incBtn);
        const inccount = await screen.findByText('Counter: 4');
        expect(inccount).toBeInTheDocument()
        fireEvent.click(decBtn);
        const deccount = await screen.findByText('Counter: 2');
        expect(deccount).toBeInTheDocument();

        fireEvent.click(incBtn);
        fireEvent.click(incBtn);
        fireEvent.click(incBtn);
        const threeCount = await screen.findByText('Counter: 8');
        expect(threeCount).toBeInTheDocument();
        fireEvent.click(reset);
        const resetCount = await screen.findByText('Counter: 2');
        expect(resetCount).toBeInTheDocument();
    })
})