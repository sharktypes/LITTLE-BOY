export default function SearchNumbers() {
  return (
    <label
      htmlFor='tnumbers'
      className='relative block overflow-hidden rounded-lg border border-slate6 px-3 pt-3 shadow-sm'
    >
      <input
        type='text'
        id='tnumbers'
        placeholder='Search Numbers'
        className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
      />

      <span className='absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
        Search Numbers
      </span>
    </label>
  )
}
