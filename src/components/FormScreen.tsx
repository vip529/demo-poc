import { createStyles, Grid, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    paper: {
      padding: 2,
      textAlign: 'center',
      // color: theme.palette.text.secondary,
    },
  }),
);
const FormComponment: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('translations');
  return (
    <div>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant='h6' gutterBottom>
            {t('Introduction')}

            <Typography variant='subtitle2' gutterBottom>
              {t(
                'is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop',
              )}
            </Typography>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default FormComponment;
