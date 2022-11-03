import BlogPost from './BlogPost'
import data from './data'

function BlogList() {

    const blogPostElement = data.map((item, index) => {
        return(
            <BlogPost key={index} item={item} />
        )})

    return(
        {blogPostElement}
    )
}

export default BlogList;