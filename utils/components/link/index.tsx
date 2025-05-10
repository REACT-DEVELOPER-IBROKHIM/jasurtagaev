import Link from 'next/link'
import React from 'react'

const LinkElement = (props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => {
  return <Link role='link' className='bg-sky-700 mt-4 px-[30px] py-[10px] cursor-pointer hover:bg-sky-600' {...props}>
    {
      props.children
    }
  </Link>
}

export default LinkElement