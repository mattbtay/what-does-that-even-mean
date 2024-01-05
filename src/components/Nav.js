import {Box, Image} from '@chakra-ui/react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <Box position="absolute" w="100%" display="flex" px="24px" py="12px" alignItems="center" justifyContent="space-between" backgroundColor="#4c959c">
        <Image src='logo.png' alt="logo" w={200} />
          <Box gap="12px" display="flex" color="#fff">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/pricing'>Pricing</NavLink>
            <NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'red' }}>
              About
            </NavLink>
          </Box>
        </Box>
    )
}

export default Nav