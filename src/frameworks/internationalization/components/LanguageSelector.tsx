import { createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SupportedLanguages from '../SupportedLanguages';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    console.log('selected val is ', event.target.value);
    const newlanguage = event.target.value as string;
    setLanguage(newlanguage);
    i18n.changeLanguage(newlanguage);
  };
  return (
    <div>
      <FormControl variant='filled' className={classes.formControl}>
        <InputLabel id='demo-simple-select-filled-label'>Languages</InputLabel>
        <Select labelId='language-select-label' id='langauge-selector' value={language} onChange={handleChange}>
          {SupportedLanguages.map(languageObject => {
            return (
              <MenuItem key={languageObject.id} value={languageObject.key}>
                {languageObject.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default LanguageSelector;
