'use client';

import '@/app/assets/scss/listSelectItem.scss';

interface ListSelectItemProps {
  title: string;
  onClick?: any;
  isSelected: boolean;
}

export default function ListSelectItem({
  title,
  onClick,
  isSelected,
}: ListSelectItemProps) {
  return (
    <li
      className={`list-select-item ${isSelected ? 'is-selected' : null}`}
      onClick={() => onClick()}
    >
      {title}
    </li>
  );
}
