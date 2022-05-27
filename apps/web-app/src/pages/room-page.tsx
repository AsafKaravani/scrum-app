import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSubscription_GET_ROOM } from '../gql/rooms.hooks';
import { INSERT_USER, UPDATE_CARD, useMutation_UPDATE_CARD, useSubscription_GET_USER } from '../gql/users.hooks';

export function RoomPage() {
    const [search, setSearch] = useSearchParams();
    const roomId = search.get('id') || '';
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [closePopup, setClosePopup] = useState(false);
    const GET_ROOM = useSubscription_GET_ROOM(roomId);
    const GET_USER = useSubscription_GET_USER(userId);


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
            <Typography>
                {GET_ROOM.data?.Rooms_by_pk?.name}
                {GET_USER.data?.Users_by_pk?.name}
            </Typography>
            <div style={{ flex: 1, width: '100%' }}></div>
            <div style={{ width: '100%' }}>
                <Paper
                    style={{ padding: 20, margin: 20, width: 'calc(100% - 40px)', height: 'min-content' }}
                    variant="outlined"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px'
                    }}
                >
                    <Button>
                        1 SP
                    </Button>
                    <Button>
                        3 SP
                    </Button>
                    <Button>
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
