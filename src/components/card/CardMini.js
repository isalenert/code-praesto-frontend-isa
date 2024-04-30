

function CardMin({href, coverImage, title, bussinessName, price, duration, qntParticipants, description}) {
  return (
    <a href={href}>
      <div className="border-solid border-2 border-gray-200 p-6 rounded-2xl mt-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col space-y-1">
          <p className="font-bold text-xl">{title}</p>
          <p className="font-medium text-base">{bussinessName}</p>
        </div>
        <div className="w-6/12 flex justify-end">
          <img src={coverImage} alt="cover image"/>
        </div>
      </div>
      <div className="flex flex-col space-y-2 mt-6 text-gray-600">
        <div className="flex flex-row justify-between">
          <p className="text-sm font-medium">{duration}</p>
          <p className="text-sm font-medium"><strong>{qntParticipants}</strong> participantes</p>
        </div>
        <p className="text-sm font-medium line-clamp-3 text-justify">{description}</p>
        <p className="text-sm font-bold pt-4 line-clamp-1">{price}</p>
      </div>
    </div>
    </a>
  )
}

export default CardMin;