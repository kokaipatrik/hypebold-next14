import RadioItem from './RadioItem';

interface RadioProps {
  name: string;
  label?: string;
  items: any;
  select: any;
  selected?: any;
}

export default function Radio({ name, label, items, select, selected }: RadioProps) {
  return (
    <div>
      {label && <label className='label'>{label}</label>}
      {items.length > 0 && (
        <ul className='flex flex-wrap gap-[26px]'>
          {items.map((item: any, key: number) => (
            <RadioItem
              key={key}
              title={item.name}
              onClick={() => select({ name, item: { name: item.name, value: item.url } })}
              isSelected={selected?.value === item.url}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
