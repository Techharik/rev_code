import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as api from "./api"; // your API helper file

export default function AddProduct() {
    const queryClient = useQueryClient();

    const { data } = useQuery({
        queryKey: ['items'],
        queryFn: api.getItems,
        staleTime: 1000 * 60 * 5,

    })

    // ✅ mutation for POST
    const addProduct = useMutation({
        mutationFn: (newProduct) => api.postItems(newProduct),
        onSuccess: (data) => {
            console.log("Product added:", data);
            queryClient.invalidateQueries(["items"]);

        },
    });

    return (
        <div>
            <div>
                {addProduct.data && (
                    <h1 className="font-bold text-lg">{addProduct.data.title}</h1>
                )}
            </div>

            <div>
                <button
                    onClick={() =>
                        addProduct.mutate({ title: "hh", price: 20.5 })
                    }
                    disabled={addProduct.isPending}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                    {addProduct.isPending ? "Adding..." : "Add Product"}
                </button>
            </div>
        </div>
    );
}
