
export default function ProductLayout({ 
        children 
    }: { 
        children: React.ReactNode 
    }) {
    return (
        <div>
            <h1>Product Details</h1>
            <main>{children}</main>
            <section>
                <h2>Featured Products layout</h2>
                {/* Add your featured products content here */}
            </section>
        </div>
    );
}