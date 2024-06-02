

function CardEventsPage({href, coverImage, title, description}) {
    return (
      <a href={href}>
        <div className="border-solid border-2 border-gray-200 p-6 rounded-2xl mt-8">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-1">
            <p className="font-bold text-xl">{title}</p>
          </div>
          <div className="w-6/12 flex justify-end">
            <img src={coverImage} alt="cover image"/>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mt-6 text-gray-600">
          <div className="flex flex-row justify-between">
          </div>
          <p className="text-sm font-medium line-clamp-3 text-justify">{description}</p>
        </div>
      </div>
      </a>
    )

  }
  
  export default CardEventsPage;