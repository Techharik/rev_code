import { describe, it, expect, test } from 'vitest';
import { add, fetchData } from './Operation'


const fakeData = {
    "category": "men's clothing",
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "id": 1,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "price": 109.95,
    "rating": {
        "count": 120,
        "rate": 3.9,
    },
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
}


describe("Math Utilities", () => {

    it("Sum of two postive Numbers", () => {
        const a = 10;
        const b = 20;

        const result = add(a, b)

        expect(result).toBe(30);
        expect(add(3, 5)).toBe(8);
        expect(add(7, 7)).toBe(14);

    })

    it('Sum two negative numbers', () => {
        const a = -10
        const b = -20

        const result = add(a, b)

        expect(result).toBe(-30)
    })

    // if the passed Parameter is a string we need to error out:
    it('Check the parameters only numbers not an other types', () => {
        const a = 'Hello'
        const b = 22;

        // const result = add(a, b)

        expect(() => add(a, b)).toThrow('Invalid typesss')
    })

    test('Check the test Cases', () => {
        expect({ 'a': 1 }).toEqual({ 'a': 1 }) //deepEqual check th contents:
        expect({ 'a': undefined }).toEqual({}) //pass - must be fail
        expect({ 'a': undefined }).toStrictEqual({ 'a': undefined }) //PASS - check strictly with undfiend cease and ucntion cases
        expect([1, 2, 3]).toContain(2) //check the value  is there
        expect('Hello').toContain('H') //all itearable
        const users = [{ name: 'Hari' }];
        expect(users).toContainEqual({ name: 'Hari' }); //deep checks
        const email = 'user@example.com';
        expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    })
});


describe('Multiple Parameterized Testing', () => {
    test.each([
        [1, 2, 2],
        [1, 2, 2],
        [3, 2, 6]
    ])('Miltiply the multiple param', (a, b, expected) => {
        expect(a * b).toBe(expected)
    })

    it('Fetching the data from a api call', async () => {
        const result = await fetchData();
        expect(result).toContainEqual(fakeData)
    })
})