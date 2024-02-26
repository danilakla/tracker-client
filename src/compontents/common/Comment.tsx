import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';

const useStyles = makeStyles((theme:any) => ({
  commentBox: {
    width: '50%',
    margin: '0 auto',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  userName: {
    fontWeight: 'bold',
  },
  commentText: {
    marginTop: 3,
  },
  date: {
    color: 'black'
  },
}));

interface CommentProps {
  name: string;
  text: string;
  date: string;
}

const Comment: React.FC<CommentProps> = ({ name, text, date }) => {
  const classes = useStyles();

  return (
    <Box className={classes.commentBox} >
      <Typography className={classes.userName} variant="h6">
        Created by:{name} | time:{date}
      </Typography>
      <CssBaseline/>
      <Typography className={classes.commentText} variant="body1">
        {text}
      </Typography>

    </Box>
  );
};

export default Comment;