import { useContext } from 'react'
import Link from 'next/link'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { lighten } from 'polished'

import { Page } from '../../../assets/data'
import { Container, Left, Sidebar, Center, Mark } from './styles'
import dark from '../../themes/dark'
import light from '../../themes/light'

const offColor = lighten(0.4, dark.colors.header.background)
const onColor = lighten(0.15, light.colors.header.background)

export type Menu = {
  [index in keyof Page]?: string
}

interface StructureProps {
  title: string
  subtitle?: string
  menu: Menu[]
  toogleTheme: () => void
}

const Structure: React.FC<StructureProps> = ({
  children,
  title,
  menu,
  subtitle,
  toogleTheme
}) => {
  const { title: theme } = useContext(ThemeContext)
  return (
    <>
      <input type="checkbox" id="check" />
      <Container>
        <Mark>
          <label htmlFor="check">
            <i className="fas fa-bars" id="sidebar_btn"></i>
          </label>
          <Left>
            <h3>
              {title}
              {subtitle ? ` > ${subtitle}` : ''}
            </h3>
          </Left>
        </Mark>
        <Switch
          onChange={toogleTheme}
          checked={theme === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={offColor}
          onColor={onColor}
        />
      </Container>

      <Sidebar className="sidebar">
        <Link href={`/${title.toLowerCase()}/`}>
          <Center className="center">
            <img
              src={`/images/${title.toLowerCase()}/bandeira.svg`}
              className="profile_image"
              alt="bandeira"
            />
            <h4>{title}</h4>
          </Center>
        </Link>
        {menu.map(({ title: label, icon, key }) => (
          <Link
            passHref
            key={key}
            href={`/${title.toLowerCase()}/${encodeURIComponent(key)}`}
          >
            <a>
              <i className={`fas ${icon}`} />
              <span>{label}</span>
            </a>
          </Link>
        ))}
      </Sidebar>
      <div className="content">{children}</div>
    </>
  )
}

export default Structure
