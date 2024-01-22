interface MenuActionProps {
  isActive: boolean;
}

export default function MenuAction({ isActive }: MenuActionProps) {
  const styles = {
    line: 'w-100 h-[1.5px] bg-white mb-[9px] last-of-type:mb-0',
    lineUp: 'animate-line-up',
    lineDown: 'animate-line-down',
  };

  return (
    <ul className='w-[22px] cursor-pointer'>
      <li className={`${styles.line} ${isActive ? styles.lineUp : null}`}></li>
      <li
        className={`${styles.line} ${isActive ? styles.lineDown : null}`}
      ></li>
    </ul>
  );
}
