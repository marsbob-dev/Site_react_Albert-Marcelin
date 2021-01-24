import {Link} from "react-router-dom";
function Banner () {



    return (
        <div id="bannerHeader">
            <div id="textBanner">
                <h1>Tech & Services</h1>
                <p>Merch and Services about tech</p>
                <button className="btn btn-dark px-4 rounded-pill" id="white" type="button">
                    <Link to="/test" className="text-white headerA">
                    See more    
                    </Link>
                </button> 
            </div>
        </div>
    );
}

export default Banner