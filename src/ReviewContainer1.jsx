import logo1 from './assets/jackie-chan.jpeg';
import logo2 from './assets/jimmy.jpeg'


function RevContainer1() {
    return (
      <>
        <div className="Box">
            <div className="bottom">
                <div className="left">
                    <h3>Jackie Chan</h3>
                    <div className="stars">
                        <i className="fa fa-star checked"></i>
                        <i className="fa fa-star checked"></i>
                        <i className="fa fa-star checked"></i>
                        <i className="fa fa-star checked"></i>
                    </div>
                </div>
                <img src={logo1} style={{width: "80px", height: "80px"}}/>
            </div>
            <div className="top">
                <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place</p>
            </div>
            <div className="profile"></div>
        </div>
        <div className="Box">
        <div className="bottom">
            <div className="left">
                <h3>Jimmy McGill</h3>
                <div className="stars">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                </div>
            </div>
            <img src={logo2} style={{width: "80px", height: "80px"}} />
        </div>
        <div className="top">
            <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place</p>
        </div>
    </div>
  </>  
    )
}

export default RevContainer1