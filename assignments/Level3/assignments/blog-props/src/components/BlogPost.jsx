import './post.css'
 //props.item.title, props.item.subTitle, props.item.author, props.item.date

function BlogPost(props) {

    return(
        <div class="post-container">
            <a className="link" href="#">
                <h1 className="blog-title">{props.item.title}</h1>
                <h2 className="blog-subtitle">{props.item.subTitle}</h2>
            </a>
            <p className="tagline">Posted by <span className="author">{props.item.author}</span> on {props.item.date}.</p>
            <hr className="hr" />
        </div>
    )
}

export default BlogPost