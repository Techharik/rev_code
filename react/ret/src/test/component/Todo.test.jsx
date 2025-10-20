import { describe, expect } from 'vitest';
import TodoList from '../../componnets/ToggleTodo';
import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from 'postcss';


describe('Todo List Cases', () => {
    it("check the Heading exits", () => {
        render(<TodoList />);

        const result = screen.getByText(/My Todo List/i);
        expect(result).toBeInTheDocument()

    })

    it('check the add todo and input clear', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a todo")
        const button = screen.getByRole('button', { name: 'Add' });

        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'first Todo' } });
        expect(input.value).toBe('first Todo')
        fireEvent.click(button);
        expect(screen.getByText(/first todo/i)).toBeInTheDocument();
        fireEvent.change(input, { target: { value: '' } });
        expect(input.value).toBe('');

        const list = screen.getAllByRole('listitem');
        list.forEach((li) => {
            fireEvent.click(li)
            expect(li).toHaveClass('done')
        })

        expect(list.length).toBe(1)

        screen.debug()
    })

    it('check the empty  todo', () => {
        render(<TodoList />);

        const input = screen.getByPlaceholderText("Add a todo");
        const button = screen.getByRole('button', { name: 'Add' });


        fireEvent.change(input, { target: { name: '' } })
        fireEvent.click(button);

        const list = screen.queryAllByRole('listitem')
        expect(list.length).toBe(0)

    })


    test('debug test cases', () => {
        render(<TodoList />)
        screen.debug()
    })
})