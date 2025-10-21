import { describe, expect, test } from "vitest";
import { screen, render, fireEvent } from '@testing-library/react';
import TextBadges from "../../stories/TextBadges";




describe('Testing the TextBadges', () => {
    test('Check the component render Propely with default Props', () => {
        render(<TextBadges label={'Badges'} handler={() => alert('alert')} />);


        //check the component render with crt text and default variants;
        const text = screen.getByText('Badges');

        expect(text).toBeInTheDocument()
        expect(text).toHaveClass('bg-amber-500/70 text-black')
        screen.debug()
    })
    test('Check the component render Propely with Secondary Props', () => {
        render(<TextBadges label={'Badges'} color="secondary" size="medium" handler={() => alert('alert')} />);


        //check the component render with crt text and default variants;
        const text = screen.getByText('Badges');

        expect(text).toBeInTheDocument()
        expect(text).not.toHaveClass('bg-amber-500/70 text-black')
        expect(text).toHaveClass('bg-green-500/70 text-white')
        expect(text).toHaveClass('font-semibold text-md')
        screen.debug()
    })
})