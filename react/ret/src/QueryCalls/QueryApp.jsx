import React from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { queryClient } from '../main';

const fetcher = async (url) => {
    const result = await fetch(url);
    if (!result.ok) throw new Error('Network response was not ok');
    return result.json();
}

const fetcherPost = async (data) => {
    const product = { title: 'New Product', price: 29.99 };
    const result = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!result.ok) throw new Error('POST failed');
    return result.json();
}

const QueryApp = () => {
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetcher('https://fakestoreapi.com/products'),
        staleTime: 5 * 60 * 1000,
        cacheTime: 30 * 60 * 1000,
    });

    const mutation = useMutation({
        mutationFn: (data) => fetcherPost(data),
        onSuccess: () => {
            // Refetch the users/products query after POST
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {data?.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
            <button onClick={() => mutation.mutate()}>Add Product</button>
        </div>
    );
};

export default QueryApp;
