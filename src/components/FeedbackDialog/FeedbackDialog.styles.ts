import { makeStyles } from '@material-ui/core/styles';

export const useFeedbackDialogStyles = makeStyles(
  () => ({
    blurPage: {
      '& div#__next': {
        filter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.21)',
      },
    },
  }),
  { index: 1 },
);
