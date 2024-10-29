
import Dialog from '@mui/material/Dialog';
import { Box, Typography, InputBase, TextField, Button } from '@mui/material';
import {CloseOutlined, DeleteOutlined} from '@mui/icons-material';
import { styled } from '@mui/system';



const dialogStyle = {
    height: '92%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: '14px',
        fontWeight: 500
    }
});

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: '14px',
        borderBottom: '1px solid #F5F5F5',
        marginTop: '10px'
    }
});

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    alignItems: 'center'
});

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '18px',
    width: '100px'
});

const ComposeMail = ({openDrawer, setOpenDrawer}) => {

    const config = {
        Host : process.env.REACT_APP_SMTP_HOST,
        Username : process.env.REACT_APP_SMTP_USERNAME,
        Password : process.env.REACT_APP_SMTP_PASSWORD,
        Port: process.env.REACT_APP_SMTP_PORT
    }

    const closeComposeEmail = () => {
        setOpenDrawer(false);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("INSIDE CONFIG IS : ", config);
        
        if(window.Email){
            window.Email.send({
                ...config,
                To : 'aryadishant414@gmail.com',
                From : "aryadishant414@gmail.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => alert(message)
            );
        }

        setOpenDrawer(false);
    }


    return (
        <Dialog
            open={openDrawer}
            PaperProps={{sx: dialogStyle}}
        >
            <Header>
                <Typography>New Message</Typography>
                <CloseOutlined fontSize='small' onClick={() => closeComposeEmail()} />
            </Header>
            <RecipientsWrapper>
                <InputBase
                    placeholder="Recipients"
                />
                <InputBase
                    placeholder="Subject"
                />
            </RecipientsWrapper>
            <TextField 
                multiline
                rows={20}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
            />

            {/* footer */}
            <Footer>
                <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
                <DeleteOutlined onClick={() => setOpenDrawer(false)} />
            </Footer>

        </Dialog>
    )
};

export default ComposeMail;