import React from 'react';
import Helmet from '../Components/Helmet/Helmet';
import CommonSection from '../Components/UI/CommonSection';
import Ad2 from '../Components/UI/Ad2';
import BlogList from '../Components/UI/BlogList';
import blogData from '../Assets/data/blogData';
import '../Style/Blog.css';


const Blog = () => {
  return (
    <Helmet title='News'>
        <CommonSection title="News" />
        <div className='Blogsection'>
          <div className='blogs6'>
            {
              blogData.map(item => (
                <BlogList item={item} key={item.id} />
              ))
            }
          </div>
        </div>
        <Ad2 />
    </Helmet>
  )
}

export default Blog
