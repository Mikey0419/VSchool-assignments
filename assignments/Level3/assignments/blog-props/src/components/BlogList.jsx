import BlogPost from './BlogPost'
import data from './data'

import './list.css'

function BlogList() {

    const blogPostElement = data.map((item, index) => {
        return(
            <BlogPost key={index} item={item} />
        )})

    return(
        <div className="list-container">
            {blogPostElement}
            <a className="older-post-link">older posts <span className="arrow icon-arrow-right2"></span></a>
        </div>
    )
}

export default BlogList;