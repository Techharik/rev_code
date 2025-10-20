
export function add(a: number, b: number) {
    if (typeof (a) !== "number" || typeof (b) !== "number") {
        throw new Error("Invalid typesss")
    }
    return a + b
}

add(2, 3)