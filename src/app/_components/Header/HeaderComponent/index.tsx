import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import Image from 'next/image'

import classes from './index.module.scss'
import { HeaderNav } from '../Nav'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav className={classes.header}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/LOGO_NAV_BAR.webp" alt="logo" width={170} height={25} />
        </Link>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
