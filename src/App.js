import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createTheme, Grid, ThemeProvider, Toolbar, Container, Divider } from '@mui/material';
import FeaturedPost from './components/FeaturedPost';
import { featuredPosts, sidebar } from './components/data/Data';
import PostCard from './components/PostCard';
import Post from './components/Post'
import SideBar from './components/SideBar';
import Main from './components/Main'
import HooksTest from './components/HooksTest';

function App() {
  

  return (
    // <HooksTest/>

    < >
      <Header />
      <FeaturedPost />
      <br />
      <PostCard />
      {/* <Post/> */}
      <Container>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Main />
          </Grid>
          <Grid item md={4} mt={4}>
            <SideBar title={sidebar.title} description={sidebar.description} archives={sidebar.archives} />
          </Grid>
        </Grid>
      </Container>
    </>

  );
}

export default App;
