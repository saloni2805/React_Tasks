import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars({ avatar }) {
    console.log(avatar)
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={avatar} />
        </Stack>
    );
}
