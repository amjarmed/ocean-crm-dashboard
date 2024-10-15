import { Menu } from 'lucide-react';

function MobileNav() {
  return (
    <div className='md:hidden'>
      <button
        className='text-slate-400 hover:text-sky-500'
        aria-label='toggle menu'
        type='button'
      >
        <Menu size={24} />
      </button>
    </div>
  );
}

export default MobileNav;
