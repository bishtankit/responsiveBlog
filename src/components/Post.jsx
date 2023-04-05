import furniture2 from "../images/furniture2.jpg";

function Post() {


  return(
    <>
      <div className="post-div">
      <div className="post-img-div">
       <img src={furniture2} />
       </div>
       <div className="post-text-div">
        <h2> Simplicity and work </h2>
        <p> Simplicity and work Work is often a major source of
        stress. People get frustrated, it ruins their
        relationship with others and it leads to burnout.
        By keeping your work life as simple as possible,
        it will help balance everything out. continue reading
        </p>
       </div>
      </div>{/* Post-div close */}
      <hr style={{marginTop: '2em', marginBottom: '2em', visibility: 'hidden'}}/>
    </>
  )
}

export default Post;
