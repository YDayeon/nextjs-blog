'use client';

type TProps = {
  categories: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
};

export default function Categories({
  categories,
  selectedCategory,
  onClick,
}: TProps) {
  return (
    <aside className='w-full basis-1/6'>
      <h3 className='font-bold text-2xl mb-2 text-right'>Categories</h3>
      <ul className='flex flex-col items-end'>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className='text-lg cursor-pointer inline-block after:block after:transition-all after:duration-300 after:scale-0 after:border-b-4 after:border-orange-400 after:content=[""] after:origin-[0%_50%] after:ease-in-out hover:after:scale-100'
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
