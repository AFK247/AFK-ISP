const navbar=document.getElementById("top_navbar");

navbar.innerHTML=`
<nav class="navbar fixed-top navbar-dark navbar-expand-lg navbar-expand-md navbar-expand-sm bg-dark ">
<div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
            <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#"><i class="fa-2x fa-brands fa-internet-explorer design"></i></a>
            </li>

            <li class="nav-item ">
                <a class="nav-link active fs-5 fw-bolder design" aria-current="page" href="#">AFK ISP</a>
            </li>

            <li class="nav-item">
                <a class="nav-link active home fs-5 ms-lg-5 ms-md-5" href="../index.html">Home</a>
            </li>
            <li class="nav-item ms-3">
                <a class="nav-link active home fs-5" href="../packages.html">Packages</a>
            </li>
            <li class="nav-item ms-3">
                <a class="nav-link active  home fs-5" href="../coverage.html">Coverage</a>
            </li>
            
        </ul>
        <form class="margin d-flex justify-content-center m-4 m-lg-0 m-md-0 m-sm-0" role="search">
        <a class="register btn btn-outline-warning me-4" href="../admin.html">Admin</a>
            <a class="register btn btn-outline-warning me-4" href="../registration.html">Register</a>
            <a class="register btn btn-outline-info rounded-pill me-4" href="../blog.html">News</a>
        </form>
    </div>
</div>
</nav>
`;