import React,{useEffect} from 'react';
import { Link, useParams} from 'react-router-dom';
import blogData from '../Assets/data/blogData';
import Helmet from '../Components/Helmet/Helmet';
import imgComment from '../Assets/all-images/people/ava-1.jpg';
import '../Style/BlogDetails.css';


const BlogDetails = () => {

  const { slug } = useParams()
  const blog = blogData.find(blog => blog.title === slug)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section className='blogsXx'>
        <div className='blogdetails'>
          <div className='blogs_details'>
            <img src={blog.imgUrl} alt='' />
            <h2 className='section_title'>{blog.title}</h2> {/* mt-4 */}

            <div className='blogdetails_items'>
              <span className='section_description'>
                <i class="ri-user-line"></i> {blog.author}
              </span>
              <span className='section_description'>
                <i class="ri-calendar-line"></i> {blog.date}
              </span>
              <span className='section_description'>
                <i class="ri-time-line"></i> {blog.time}
              </span>
            </div>
            
            <p className='section_description'>{blog.description}</p>
            <h5 className='ps-5 fw-normal fs-4'> {/*ps-5 katjibu wast*/}
              <blockquote>{blog.quote}</blockquote>
            </h5>
            <p className='section_description'>{blog.description}</p>
          </div>
          <div className='commentList'>
            <h4>3 Comments</h4>
          </div>
          {/* === SINGLE COMMENT === */}
          <div className='singlecomment'>
            <img src={imgComment} alt='' />
            <div className='commentdetails'>
              <h6>David Visa</h6>
              <p className='section_description'>14 July, 2024</p>
              <p className='section_description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore et nesciunt sapiente totam dignissimos omnis.
                Tenetur aspernatur dignissimos omnis.
              </p>
              <span className='replay'>
                <i class="ri-reply-line"></i> replay
              </span>
            </div>
          </div>
          {/* === COMMENT FORM === */}
          <div className='leavecomment'>
            <h4>Leave a Comment</h4>
            <p className='section_description'>You must sign-in to make or comment a post</p>
            <form className='leavcomnt'>
              <div className='inputmessage'>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <div className='textarea'>
                <textarea rows="8" placeholder='Write...' required/>
              </div>
              <button type='submit' className='btn-form'>
                Post a Comment
              </button>
            </form>
          </div>
        </div>
        {/*=== OTHERS BLOGS ===*/}
        <div className='othresBlogs'>
          <h2 className='other_title'>Recent News</h2>
          {
            blogData.slice(0,3).map(item =>(
              <div className='recentBlogs' key={item.id}>
                <div className='recentblogsitem'>
                  <img src={item.imgUrl} alt='' />
                  <div>
                    <h6><Link to={`/blogs/${item.title}`}>{item.title}</Link></h6>
                    <p className='section_description'>{item.date}</p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </section> 
    </Helmet>
  )
}

export default BlogDetails
