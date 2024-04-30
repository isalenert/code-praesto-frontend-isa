function PrimaryButton({ className, children, ...rest }) {
  return (
    <a className={`border-none px-4 py-2 rounded-3xl cursor-pointer text-base outline-none no-underline bg-gray-950 text-gray-50 font-bold hover:shadow-lg ${className}`} {...rest}>
      {children}
    </a>
  )
}

export default PrimaryButton;