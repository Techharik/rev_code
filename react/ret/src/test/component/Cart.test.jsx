import { describe, expect, it } from "vitest";
import ShoppingCart from "../../componnets/Cart";
import { fireEvent, getAllByRole, getAllByText, render, screen } from "@testing-library/react";


describe('Shoping cart Render Test cases', () => {
    it('Shopping cart', () => {
        render(<ShoppingCart initialItems={[]} />)

        const heading = screen.getByText('Shopping Cart');
        expect(heading).toBeInTheDocument();

        //input and button
        const input = screen.getByPlaceholderText('Add an item');
        const addBtn = screen.getByText('Add')
        const clearBtn = screen.getByText('Clear')

        expect(input).toBeInTheDocument()
        expect(clearBtn).toBeInTheDocument()
        expect(addBtn).toBeInTheDocument()

        // add a single Item that apperas in list
        // const list = queryAllByRole('listitem')

        fireEvent.change(input, { target: { value: 'milk' } })
        fireEvent.click(addBtn)
        const Shoplist = screen.getByText('milk');
        expect(Shoplist).toBeInTheDocument()

        //add multiple items list grows:

        fireEvent.change(input, { target: { value: 'egg' } })
        fireEvent.click(addBtn)
        fireEvent.change(input, { target: { value: 'carrot' } })
        fireEvent.click(addBtn)

        const list = screen.getAllByRole('listitem');
        expect(list.length).toBeGreaterThan(1)

        //clear input checks
        expect(input.value).toBe('');

        //adding the empty string:

        fireEvent.change(input, { target: { value: '' } })
        fireEvent.click(addBtn)
        const shopAllList = screen.getAllByRole('listitem');

        shopAllList.forEach((li) => {
            expect(li.value).not.toBe('')
        })

        //remove the items remove egg:
        const removeBtns = screen.getAllByText('Remove');

        fireEvent.click(removeBtns[1]);

        // assert the item text 'egg' is no longer in the DOM
        expect(screen.queryByText('egg')).not.toBeInTheDocument();

        fireEvent.click(clearBtn);
        const emptymsg = screen.getByTestId("empty-message");
        expect(emptymsg).toBeInTheDocument()
    })
})