import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export const NavBar = () => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" />
            Reactivities
          </Menu.Item>
          <Menu.Item name='Activities' />
          <Menu.Item>
            <Button positive context='Create Activity' />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  )
}
