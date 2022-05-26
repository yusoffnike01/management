import { Box, Button, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Img, Input, Link, Stack, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import { FC, useEffect} from "react"
import { SubmitHandler, useForm } from 'react-hook-form';
import { api } from "../../api/index.api";
import { useMutation } from "react-query";
import { store } from "../../stores/index.store";
import { history } from "../../router/history";
import { SigninParams } from "../../interfaces/account.interface";
import signInImage from '../../assets/img/mainimage.png'
import { chakra } from "@chakra-ui/react"
import WebFont from 'webfontloader';



export const SigninPage: FC = () => {

  const textColor = useColorModeValue('gray.400', 'white');
  const { register, handleSubmit } = useForm<SigninParams>();
  const { setUser } = store.application((state) => state);
  const toast = useToast();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);

   
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
        position: 'bottom',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  });

  const onSubmit: SubmitHandler<SigninParams> = async (data) => {
    signin(data);
  };
  return (
    <Flex 
        position='relative'
        mb='40px' 
    >
      <Flex 
             h={{ sm: "initial", md: "75vh", lg: "85vh" }}
             w='100%'
             maxW='1044px'
             mx='auto'
             justifyContent='space-between'
             mb='30px'
             pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
            alignItems='center'
            justifyContent='start'
            style={{userSelect: 'none'}}
            w={{ base: "100%", md: "50%", lg: "6\0%" }}
        >
          <Flex
              direction='column'
              w='100%'
              background='transparent'
              p='48px'
              mt={{ md: "150px", lg: "90px" }}
          >
            <Heading fontSize='32px' mb='10px'>
              Welcome Back Student Management System 
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Enter your email and password to sign in
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>

            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>Email:</FormLabel>
              <Input 
                    type="email" 
                    borderRadius='15px'
                    mb='24px'
                    fontSize='sm'
                    placeholder='Your email adress'
                    size='lg'
              {...register('email', { required: true })}
              />
              
               <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>Password:</FormLabel>
               <Input 
                      type="password"  
                      borderRadius='15px'
                      mb='36px'
                      fontSize='sm'
                      placeholder='Your password'
                      size='lg'
                      {...register('password', { required: true })}
                />
                <FormControl display='flex' alignItems='center'>
                <Checkbox>
                  <FormLabel 
                            htmlFor='remember-login'
                            mb='0'
                            ms='1'
                            fontWeight='normal'
                  > Remember Me
                  </FormLabel>
                </Checkbox>
                </FormControl>
                <Button 
                        type='submit' 
                        bg='teal.300'
                        width="full" 
                        _hover={{
                            bg: "teal.200",
                                }}
                        mt={4}
                        _active={{
                            bg: "teal.400",
                        }}
                  
                  >Sign In
            </Button>
            </FormControl>
            </form>
      
          </Flex>
        </Flex>
          <Box
              display={{base: 'none', md: 'block'}}
              overflowX='hidden'
              h='100%'
              w='40vw'
              position='absolute'
              right='0px'          
          >
            <Box
              backgroundColor='teal.200'
              w='100%'
              h='100%'
              bgSize='center'
              bgPosition='50%'
              position='absolute'
              backgroundRepeat='no-repeat'
              borderTopLeftRadius='20px'
              borderBottomLeftRadius='20px'
              boxShadow='xl'
            >
              <Heading 
                      fontSize='36px' 
                      mt='40px' 
                      pl='70px'  
                      className='italic'
            
             >
               <chakra.span  color='white'>Best </chakra.span> Student Record Management for School & Institutes </Heading>
               <Img 
                    src={signInImage}
                    mt='40px'
                />
            </Box>
          </Box>
      </Flex>
    </Flex>
  )
}
export default SigninPage;