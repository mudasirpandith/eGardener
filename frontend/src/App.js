import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import WithSubnavigation from './Components/NavBar';
import { Home } from './Screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterSection from './Components/Footer';
import { Page404 } from './Screens/404';
import { Login } from './Screens/SignIn';
import { SignUp } from './Screens/SignUp';
import { ExpertPage } from './Screens/ExpertServices';
import { Profile } from './Screens/Profile';
import { ExpertLogin } from './Screens/ExpertLogin';
import { ExpertDash } from './Screens/ExpertDash';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <WithSubnavigation />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="/" element={<Home />} />
              <Route path="signin" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="profile" element={<Profile />} />
              <Route path="expert" element={<ExpertLogin />} />
              <Route path="/expert/:id" element={<ExpertPage />} />
              <Route path="/expert-dash" element={<ExpertDash />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </BrowserRouter>

        <FooterSection />
      </Box>
    </ChakraProvider>
  );
}

export default App;
