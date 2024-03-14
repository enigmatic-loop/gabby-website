import Link from "next/link"

type Props = {
  href: string,
  title: string
}

const NavLink: React.FC<Props> = ({ href, title }) => {
  return (
    <Link 
      href={href} 
      className='block py-2 pl-3 pr-4 text-gray-300 sm:text-xl rounded md:p-0 hover:text-white'
    >
        {title}
    </Link>
  )
}

export default NavLink;