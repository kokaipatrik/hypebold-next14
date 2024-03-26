import { useEffect, useState } from 'react';

import '@/app/assets/scss/select.scss';

interface SelectProps {
  name: string;
  label?: string;
  placeholder: string;
  items: any;
  select: any;
  selected?: any;
  selectedDependency?: any;
}

export default function Select({
  name,
  label,
  placeholder,
  items,
  select,
  selected,
  selectedDependency,
}: SelectProps) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(
    selected
      ? selected
      : {
          name: '',
          value: '',
        }
  );

  const selectItem = (item: any) => {
    setSelectedItem(item);
    setDropdownIsOpen(false);
    select({
      name,
      item: {
        name: item.name,
        value: item.url ? item.url : item.value,
      },
    });
  };

  useEffect(() => {
    if (!selected) {
      setSelectedItem({
        name: '',
        value: '',
      });
    }
  }, [selected]);

  useEffect(() => {
    if (Object.keys(selectedItem.value).includes(selectedDependency?.value)) {
      setSelectedItem((prevState: any) => ({
        ...prevState,
        name: prevState.value[selectedDependency.value],
      }));
    }
  }, [selectedDependency]);

  return (
    <div>
      {label && <label className='label'>{label}</label>}
      {items?.length > 0 && (
        <div className={`select ${dropdownIsOpen ? 'is-open' : null}`}>
          <div
            className='select__selected'
            onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
          >
            {selectedItem.name ? selectedItem.name : placeholder}
            <div className='select__arrow' />
          </div>
          <ul className='select__dropdown'>
            {items.map((item: any, key: number) => (
              <li
                key={key}
                className='select__item'
                onClick={() => selectItem(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
