var element = document.getElementById("dash");
element.innerHTMl=` <nav id="sidebar">
<div class="sidebar-header p-4">
    <h3>Admin</h3>
    <img src="" alt="">
</div>
<div class="container p-4">
    <ul class="list-unstyled components">
        <li>
            <a href="#">Home</a>
        </li>
        <hr>
        <li>
            <a href="#">Contact Form</a>
        </li>
        <hr>
        <li>
            <a href="#">Job Application</a>
        </li>

    </ul>
</div>
</nav>
<div class="container" id="content">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <div class="siledi">
            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="bi bi-arrow-left-right"></i>
            </button>
        </div>
        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact <Form></Form></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Job Application</a>
                </li>
            </ul>
            <div class="logout">
                <a class="nav-link" href="#"><Button class="btn btn-info">Logout <i
                            class="bi bi-box-arrow-in-right"></i></Button></a>
            </div>
        </div>
</nav>
</div>
`