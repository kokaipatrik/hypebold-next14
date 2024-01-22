'use server';

import Filters from '@/components/Filters';

export default async function Brand({ params }: { params: { slug: string } }) {
  const getConfig = await fetch(
    `${process.env.NEXT_PUBLIC_API}/ad/brands/${params.slug}`
  );
  const config = await getConfig.json();

  return (
    <div>
      <h1 className='text-6xl'>{config.data.name}</h1>
      <Filters pageType='brand' slug={params.slug} />
    </div>
  );
}
