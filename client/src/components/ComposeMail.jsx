
import Dialog from '@mui/material/Dialog';
import { Box, Typography, InputBase, TextField, Button } from '@mui/material';
import {CloseOutlined, DeleteOutlined} from '@mui/icons-material';
import { styled } from '@mui/system';

import { useState } from 'react';
import useApi from '../hooks/useApi'; // our custom hook
import { API_URLS } from '../services/api.urls';


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

    const [data, setData] = useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmail);

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
        // console.log("INSIDE CONFIG IS : ", config);

        // console.log("INSIDE DATA : ", data);
        
        
        if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : "aryadishant414@gmail.com",
                Subject : data.subject,
                Body : data.message
            }).then(
              message => alert(message)
            );
        }

        const payload = {
            to: data.to,
            from: 'aryadishant414@gmail.com',
            subject: data.subject,
            body: data.message,
            date: new Date(),
            image: '',
            name: 'Dishant Arya',
            starred: false,
            type: 'sent'
        }

        sentEmailService.call(payload);

        if(!sentEmailService.error) {
            setOpenDrawer(false);
            setData({});
        } else {

        }

        setOpenDrawer(false);
    }

    const onValueChange = (e) => {
        console.log(e.target.name , " : ", e.target.value);
        setData({...data , [e.target.name] : e.target.value});
        console.log("INSIDE DATA : ", data);
        
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
                    onChange={(e) => onValueChange(e)}
                    name='to'
                />
                <InputBase
                    placeholder="Subject"
                    onChange={(e) => onValueChange(e)}
                    name='subject'
                />
            </RecipientsWrapper>
            <TextField 
                multiline
                rows={20}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                onChange={(e) => onValueChange(e)}
                name='message'
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