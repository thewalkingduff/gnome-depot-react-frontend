import { useEffect, useState } from 'react';
import '../index.css'
import ProductCard from './ProductCard';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('http://localhost:8080/products/all')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <main className="home-main-container">
            <div className="products-container" id="products-container">
               <ProductCard products={products} />
            </div>
        </main>
    );
}