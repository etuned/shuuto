import { useColorMode, IconButton } from '@chakra-ui/react'
import { BsSun, BsMoon } from 'react-icons/bs'
const ColorSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
          aria-label='Toggle Color Modes'
          icon={colorMode === 'dark' ? <BsSun/> : <BsMoon/> }
          onClick={toggleColorMode}
        />
    );
}

export default ColorSwitcher  