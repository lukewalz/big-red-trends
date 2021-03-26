import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff1536',
        },
        secondary: {
            main: '#f6f6f6',
        },
    },
    props: {
        MuiPaper: {
            elevation: 3,
        },
        MuiTabs: {
            variant: 'fullWidth'
        },
        MuiCircularProgress: {
            style: {
                alignSelf: 'center',
                margin: '5'
            }
        }
    }
});