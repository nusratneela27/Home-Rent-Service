import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div className='border-[1px] border-gray-800 w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-lg transition cursor-pointer bg-slate-200'>
      <div className='flex flex-row items-center justify-between'>
        <div className='text-sm font-semibold px-6'>Anywhere</div>
        <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] border-gray-800 flex-1 text-center'>
          Any Week
        </div>
        <div className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'>
          <div className='hidden sm:block'>Add Guests</div>
          <div className='p-2 bg-zinc-500 rounded-full text-white'>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
