export default function Brand({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className='text-4xl'>Brand: {params.slug}</h1>
    </div>
  );
}
