import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSubscription_GET_ROOM } from '../gql/rooms.hooks';
import { INSERT_USER, UPDATE_CARD, useSubscription_GET_USER } from '../gql/users.hooks';

export function RoomPage() {
    const [search, setSearch] = useSearchParams();
    const roomId = search.get('id') || '';
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [closePopup, setClosePopup] = useState(false);
    const GET_ROOM = useSubscription_GET_ROOM(roomId);
    const GET_USER = useSubscription_GET_USER(userId);

    console.log(GET_ROOM);

    useEffect(() => {
        if (!userId)
            setClosePopup(false)
    }, [userId]);


    const createUser = async () => {
        const res = await INSERT_USER({
            name: userName,
            card: '',
            roomId: roomId,
            showingCard: false,
        });

        setUserId(res.insert_Users_one?.id);
        setClosePopup(true);
    }

    const updateCard = async (card: string) => {
        const res = await UPDATE_CARD(userId, card);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, flexDirection: 'column' }}>
            <Typography variant='h6' sx={{ marginTop: 2, marginBottom: 2 }}>
                {GET_ROOM.data?.Rooms_by_pk?.name} - {' '}
                {GET_USER.data?.Users_by_pk?.name}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {GET_ROOM.data?.Rooms_by_pk?.Users.map(user => (
                    <Chip label={`${user.name} - ${user.card}`} />
                ))}
            </Box>
            <div style={{ flex: 1, width: '100%' }}></div>
            <div style={{ width: '100%' }}>
                <Paper
                    style={{ padding: 20, margin: 20, width: 'calc(100% - 40px)', height: 'min-content', }}
                    variant="outlined"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px'
                    }}
                >
                    <Button variant='outlined' onClick={() => updateCard('1')}>
                        1 SP
                    </Button>
                    <Button variant='outlined' onClick={() => updateCard('3')}>
                        3 SP
                    </Button>
                    <Button variant='outlined' onClick={() => updateCard('8')}>
                        8 SP
                    </Button>
                </Paper>
            </div>
            <Dialog open={!closePopup} >
                <DialogTitle>Choose name:</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        id="name"
                        label="Name"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={createUser}>Enter</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
