

export default function ProductCard(props) {
    return (
        <div class="product-card">
            <h1>Products</h1>
            {props.products.map(product =>
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <div class="product-img-home-container">
                        <a href="">
                            <img src={product.image} alt="" width={200} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}