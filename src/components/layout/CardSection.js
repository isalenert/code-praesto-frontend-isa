import ArrowRight from '../../assets/icons/ArrowRight.png';

function CardSection({ title, href, iconPath, children }) {
  return (
    <>
      <div className="mt-40 flex flex-row justify-between w-full items-center">
        <div className="flex flex-row space-x-2">
          <img className='object-contain' src={iconPath} />
          <p className='font-bold text-2xl'>{title}</p>
        </div>
        <a className='font-bold flex flex-row space-x-2 items-center hover:underline' href={href}>
          <img className='mr-2 w-fit h-fit' src={ArrowRight} />
          Ver mais
        </a>
      </div>
      <div className='flex flex-wrap justify-between'>
        {children}
      </div>
    </>
  )
}

export default CardSection;
