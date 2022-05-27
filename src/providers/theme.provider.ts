import '@fontsource/poppins/400.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/600.css';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts:{
    heading: 'Poppins',
    body: 'Rubik',
  },
  textStyles:{

  }
})