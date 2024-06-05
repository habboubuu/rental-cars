import React from 'react';
import '../../Assets/data/blogData';
import '../../Style/BlogList.css';
import { Link } from 'react-router-dom'

const BlogList = (props) => {
      
    const{imgUrl, title, author, date, description, time} = props.item
    return(
        <div className='BlogParent'>
            <img src={imgUrl} alt=''  /> {/* width-100 */}
            <div className='blog_info'>
                <Link to={`/blogs/${title}`}>
                    {
                        title.lenght > 22 ? title.substr(0,22) : title // kyt7akm f 3adad lenght title
                    }
                </Link>
                <p className='section_description'>
                    {
                        description.length > 100 ? description.substr(0,100) : description //kayt7akm f 3adad length p
                    }
                </p>
                <Link to={`/blogs/${title}`} className='read_more'>Read More</Link>

                <div className='blog_time'>
                    <span className='blog_author'>
                        <i class="ri-user-line"></i> {author}
                    </span>
                    <div style={{display:"flex", alinItems:"center", gap:"3px"}}>
                        <span className='section_description'>
                            <i class="ri-calendar-line"></i> {date}
                        </span>
                        <span className='section_description'>
                            <i class="ri-time-line"></i> {time}
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BlogList
