import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
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
  },
  newsStoryText: {
    marginBottom: '15px',
  },
}));
