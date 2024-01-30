import { useState } from 'react';

import ListSelectItem from '@/components/Form/ListSelect/ListSelectItem';

interface ListSelectProps {
  name: string;
  label: string;
  items: any[];
  select: any;
}

export default function ListSelect({
  name,
  label,
  items,
  select,
}: ListSelectProps) {
  const [selectedItem, setSelectedItem] = useState({
    name: '',
    url: '',
  });

  const selectItem = (item: any) => {
    setSelectedItem(item);
    select({
      name,
      item: {
        name: item.name,
        value: item.url,
      },
    });
  };

  return (
    <div>
      {label && <label className='label'>{label}</label>}
      {items?.length > 0 && (
        <ul className='flex flex-wrap gap-[12px]'>
          {items.map((item, key) => (
            <ListSelectItem
              key={key}
              title={item.name}
              onClick={() => selectItem(item)}
              isSelected={selectedItem.url === item.url}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
