import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  userFormContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'gray',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    padding: '10px',
    fontSize: '25px',
    fontWeight: 'bold',
    boxShadow: '0 3px 6px 0 #555',
  },
  todoListArrow: {
    transform: 'rotate(180deg)',
    color: theme.colors.gray[5],
  },
  newsStoryText: {
    marginBottom: '15px',
  },
  todoListChild: {
    justifyContent: 'space-between',
  },
  todoListContainer: {
    display: 'flex',
  },
}));
