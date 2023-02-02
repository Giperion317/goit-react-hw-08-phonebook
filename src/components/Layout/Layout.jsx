import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auht/auth-selector';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Suspense } from "react";
import { Box, Flex, Container, Link, Spinner } from '@chakra-ui/react';

export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <Box
        as="header"
        bgGradient="linear(to-r, purple.400, blackAlpha.300, purple.400)"
        py="2"
      >
        <Container
          maxW={['300px', '440px', '750px', '970px', '1200px']}
          m="0 auto"
        >
          <Flex
            justifyContent="space-around"
            alignItems="center"
            flexDirection={['column', 'row', null, null, null]}
            gap="3"
          >
            <Navigation />
            <Logo />
            {token ? <UserAuthMenu /> : <AuthNavigation />}
          </Flex>
        </Container>
      </Box>
      <Box as="main">
        <Box as="section" py="6">
          <Container
            maxW={['300px', '440px', '750px', '970px', '1200px']}
            m="0 auto"
            textAlign="center"
          >
            <Suspense fallback={<Spinner color="purple.800" size="xl" />}>
              <Outlet />
            </Suspense>
          </Container>
        </Box>
      </Box>
      <Box
        as="footer"
        bgGradient="linear(to-r, blackAlpha.300, purple.400, blackAlpha.300)"
        py="2"
        fontFamily="cursive"
        fontSize="md"
        fontWeight="semibold"
        color="purple.800"
        mt="auto"
      >
        <Container
          maxW={['300px', '440px', '750px', '970px', '1200px']}
          m="0 auto"
          textAlign="center"
        >
          © Phonebook 2023 | create by{' '}
          <Link
            color="pink.900"
            _hover={{ color: 'pink.600' }}
            href="https://github.com/Giperion317"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giperion317
          </Link>
        </Container>
      </Box>
    </>
  );
};
