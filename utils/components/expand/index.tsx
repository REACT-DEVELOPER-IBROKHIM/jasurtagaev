import Link from 'next/link'
import React from 'react'

interface ExpandProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const ExpandLink = ({ href, children, ...rest }: ExpandProps) => {
  return (
    <Link className='text-sky-700 m-8' href={href} {...rest}>
      {children}
    </Link>
  );
}

export default ExpandLink