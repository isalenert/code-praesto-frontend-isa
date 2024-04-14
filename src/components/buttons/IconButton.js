function IconButton({ className, children, iconPath, ...rest }) {
  return (
    <a className={`border-solid border-2 border-gray-200 px-4 py-2 rounded-3xl cursor-pointer text-base outline-none no-underline flex flex-row gap-2 ${className}`} {...rest}>
      <img className="size-fit self-center" src={iconPath} />
      {children}
    </a>
  )
}

export default IconButton;