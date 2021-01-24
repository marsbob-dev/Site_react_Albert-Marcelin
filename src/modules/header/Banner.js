function Banner () {



    return (
        <div id="bannerHeader">
            <div id="textBanner">
                <h1>Tech & Services</h1>
                <p>Merch and Services about tech</p>
                <div class="dropdown">
                    <button class="btn btn-dark px-4 rounded-pill" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Banner