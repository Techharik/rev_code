


export function add(a: number, b: number) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        throw new Error("Invalid typesss")
    }
    return a + b
}

add(2, 3)

export async function fetchData() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
}