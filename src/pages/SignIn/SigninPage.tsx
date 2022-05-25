import { Box, Button, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, Stack, Text, useToast } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react"
import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from "../../api/index.api";
import { useMutation } from "react-query";
import { store } from "../../stores/index.store";
import { history } from "../../router/history";
import { SigninParams } from "../../interfaces/account.interface";


export const SigninPage: FC = () => {

  const { register, handleSubmit } = useForm<SigninParams>();
  const { setUser } = store.application((state) => state);
  const toast = useToast();

  // Sign in 
  const { mutate: signin } = useMutation(api.account.signin, {
    onSuccess: (data) => {
      setUser(data);
      toast({
        title: 'Successfully signin to your account.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      history.push('/homepage')
    },
    onError:()=>{
      toast({
        title: 'Failed to signin.',
        description: `Incorrect email address or password. Please try again!`,
        position: 'top-right',
        status: 'warning',
        isClosable: true,
      });
    }
  });


  const onSubmit: SubmitHandler<SigninParams> = async (data) => {
    signin(data);
  };
  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'

      >
        <Box textAlign='center'>
          <Heading>Sign In to Your Account</Heading>
        </Box>
        <Box my={4} textAlign='left'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel htmlFor="email" textStyle="bodyMedium">Email Address:</FormLabel>
              <Input type="email" 
              {...register('email', { required: true })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password:</FormLabel>
              <Input type="password"  {...register('password', { required: true })}/>
            </FormControl>
            <Stack>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
              <Box>
                <Link>Forgot your password</Link>
              </Box>
            </Stack>
            <Button type='submit' variant='outline' width="full" mt={4}>Sign In</Button>
          </form>
        </Box>
      </Box>
    </Flex>
  )
}
export default SigninPage;