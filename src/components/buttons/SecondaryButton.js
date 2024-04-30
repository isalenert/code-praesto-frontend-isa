function SecondaryButton({ className, children, ...rest }) {
  return (
    <a className={`border-none px-4 py-2 rounded-3xl cursor-pointer text-base outline-none no-underline font-medium hover:bg-gray-200 ${className}`} {...rest}>
      {children}
    </a>
  )
}

export default SecondaryButton;