import BlogPost from './BlogPost'
import data from './data'

// .map() data
// return <BlogPost key={index} item={item} />

function BlogList() {

    function blogPostData() {
        data.map((item, index) => {
            return(
                <BlogPost key={index} item={item} />
            )}
        )}

    const blogPostElement = blogPostData();

    return(
        {blogPostElement}
    )
}

export default BlogList;