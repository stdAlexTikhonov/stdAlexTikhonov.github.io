import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props: any) {
  return <ListItem button component="a" {...props} />;
}

export const SimpleList: React.FC<{ links: string[]}> = ({ links }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {links.map((link: string) => {
          const arr = link.split('/');
          const label = arr[arr.length - 1];
          return <ListItemLink href={link} style={{ textDecoration: 'none'}}>
              <ListItemText primary={label.toLocaleUpperCase()}/>
            </ListItemLink>
        })}

      </List>
    </div>
  );
}
