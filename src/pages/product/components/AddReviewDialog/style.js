import { makeStyles } from '@material-ui/core';
import {
    FlexColumn,
    CreatePadding,
    Centering,
    CreateMargin,
} from '@theme/mixins';

export default makeStyles((theme) => ({
    root: {
        ...Centering,
        height: '100%',
        width: '100%',
        ...CreatePadding(16, 16, 16, 16),
    },
    container: {
        ...FlexColumn,
        width: '100%',

        [theme.breakpoints.up('sm')]: {
            maxWidth: 900,
        },
        maxHeight: '70%',
    },
    textField: {
        ...CreateMargin(16, 0, 16, 0),
    },
    ratingContainer: {
        ...CreatePadding(10, 0, 20, 0),
    },
}));
