import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
       
        title="Iowa State University"
        subheader="Ames, IA"
        
      />
      
      <CardContent>
        
        <Rating name="size-small" defaultValue={4} size="small" />
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'Left',
        typography: 'body2',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={}
    >
     
      <Link href="https://www.iastate.edu/" underline="">
        {'https://www.iastate.edu/'}
      </Link>
    </Box>
        
      </CardContent>
      <br />
      
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        
      <TextField
          id="outlined-read-only-input"
          label="Credit Level"
          defaultValue="Certificate"
          InputProps={{
            readOnly: true,
          }}
        />
        
        <TextField
          id="outlined-read-only-input"
          label="Graduation Rate"
          defaultValue="72%"
          InputProps={{
            readOnly: true,
          }}
        />
        
        <TextField
          id="outlined-read-only-input"
          label="SAT Scores"
          defaultValue="1350/1530"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Cost"
          defaultValue="$50,000"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
      
    </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
