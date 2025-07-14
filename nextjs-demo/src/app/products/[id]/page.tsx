
export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}