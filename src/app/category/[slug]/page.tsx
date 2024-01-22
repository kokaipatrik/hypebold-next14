'use server';

import Filters from '@/components/Filters';

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const getConfig = await fetch(
    `${process.env.NEXT_PUBLIC_API}/ad/category/${params.slug}`
  );
  const config = await getConfig.json();

  return (
    <div className='container mx-auto px-[20px]'>
      <h1 className='text-6xl'>{config.data.name}</h1>
      <Filters pageType='category' slug={params.slug} />
    </div>
  );
}
