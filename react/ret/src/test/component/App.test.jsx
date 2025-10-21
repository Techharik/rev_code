import { render, screen } from "@testing-library/react";
import Button from "../../componnets/Buttons";
import { describe, expect } from "vitest";
import List from "../../componnets/List";
import ProfileCard from "../../componnets/ProfileCard";

describe('Button Compoennts', () => {
    it('renders the App components', () => {
        render(<Button props={{ lable: 'MyButton', style: 'bg-red-100' }} />);

        screen.debug()

        const childrenText = screen.getByText(/MyButton/i);
        expect(childrenText).toBeInTheDocument()
    })
})

describe('List Components', () => {
    test('Testing the List components', () => {
        //arrage:
        const lists = ['j', 'k', "l"];

        render(<List languages={lists} />);

        lists.forEach((e) => {
            expect(screen.getByText(e)).toBeInTheDocument()
        })

        screen.debug();

    })
})


describe('Profile Card test Cases', () => {
    it('Check the profile card metrics', () => {
        const props = { name: 'Hari', age: "20", isOnline: true }
        render(<ProfileCard {...props} />);

        const name = screen.getByText(props.name);
        const age = screen.getByText('Age: 20');
        const isOnline = screen.getByText('Online');

        expect(name).toBeInTheDocument();
        expect(age).toBeTruthy();
        expect(isOnline).toBeTruthy();

        const status = screen.getByText("Online");
        expect(status).toHaveClass("online");
        screen.debug()
    })
})
