import React, { FC, memo, Suspense } from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './router/routes';
import { FallbackSpinner } from './components/FallbackSpinner';
import { useAxiosLoader } from './effects/axios.effect';
import { QueryClient, QueryClientProvider } from 'react-query';

import './assets/css/tailwind.css';
import { theme } from './providers/theme.provider';

const App: FC=memo(()=>{
  useAxiosLoader();
  return(
    <Suspense fallback={<FallbackSpinner/>}>
      <AppRouter/>
    </Suspense>
  )
});
const queryClient = new QueryClient();

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
    <App/>
    </QueryClientProvider>

  </ChakraProvider>
  ,
  document.getElementById('root'))

