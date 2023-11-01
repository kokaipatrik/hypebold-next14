export default function Category({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className='text-4xl'>Category: {params.slug}</h1>
    </div>
  );
}
