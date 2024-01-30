import Image from 'next/image';

export default function ProductsHeader() {
  const styles = {
    item: 'relative flex items-center w-full',
    itemImg:
      'absolute overflow-hidden w-full h-0 pt-[100%] rounded-[12px] bg-[#ccc]',
  };

  const isEven = (n: number) => n % 2;

  return (
    <div className='flex h-full w-full gap-[40px] opacity-[0.04]'>
      {[0, 1, 2, 3, 4].map((i) => (
        <div className={styles.item} key={i}>
          <figure
            className={`${styles.itemImg} ${
              isEven(i + 1) ? 'animate-even-up-down' : 'animate-odd-up-down'
            }`}
          >
            <Image
              src={`/images/product${i + 1}.jpg`}
              alt='image'
              className='absolute top-0'
              fill
            />
          </figure>
        </div>
      ))}
    </div>
  );
}
