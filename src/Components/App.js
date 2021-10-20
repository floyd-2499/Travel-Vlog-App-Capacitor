import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Posts from './Pages/Posts/Posts';
import Blogs from './Pages/BlogPages/Blogs';
import Blogs2 from './Pages/BlogPages/Blogs2';
import SpecialBlog from './Pages/BlogPages/SpecialBlog';
import CombineBlog from './Pages/BlogPages/CombineBlog';
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <BrowserRouter >
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/blogs" exact component={CombineBlog} />
            <Route path="/blog-1" exact component={Blogs} />
            <Route path="/blog-2" exact component={Blogs2} />
            <Route path="/special-blog" exact component={SpecialBlog} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/posts" exact component={Posts} />
            </BrowserRouter>
            
        </div>
    )
}

export default App
