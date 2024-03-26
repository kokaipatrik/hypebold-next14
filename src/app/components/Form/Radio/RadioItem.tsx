interface RadioItemProps {
  title: string;
  onClick?: any;
  isSelected?: boolean;
}

export default function RadioItem({ title, onClick, isSelected }: RadioItemProps) {
  return (
    <div
      className={`flex flex-wrap gap-[6px] items-center cursor-pointer transition-all ${isSelected ? 'text-white' : 'text-gray-5'}`}
      onClick={() => onClick()}
    >
      <span className='w-[18px] h-[18px] rounded-[9px] border-[1.5px] border-gray-6'></span>
      {title}
    </div>
  );
};
