import {AppBar, Toolbar, styled, Box, InputBase} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu'; // or below line is same
import {Menu as MenuIcon , Search, Tune,  HelpOutlineOutlined, SettingsOutlined, AppsOutlined, AccountCircleOutlined} from '@mui/icons-material';

import { gmailLogo } from '../constants/constant';

const StyledAppBar = styled(AppBar)({
    background: '#F5F5F5',
    boxShadow: 'none'
})

const SearchWrapper = styled(Box)({
    background: '#EAF1FB',
    marginLeft: 80,
    borderRadius: 8,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div' : {
        width: '100%',
        padding: '0 5px'
    }
});

const OptionWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent:'end',
    '& > svg': {
        marginLeft: '20px'
    }
});


const Header = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color="action" />
                <img src={gmailLogo} alt="logo" style={{width: 110, marginLeft: 15 }} />
                <SearchWrapper>
                    <Search color='action' />
                    <InputBase placeholder='Search mail' />
                    <Tune color='action' />
                </SearchWrapper>
                <OptionWrapper>
                    <HelpOutlineOutlined color='action' />
                    <SettingsOutlined color='action' />
                    <AppsOutlined color='action' />
                    <AccountCircleOutlined color='action' />
                </OptionWrapper>
            </Toolbar>
        </StyledAppBar>
    )
};

export default Header;