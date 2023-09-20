import React from 'react';
import Layout from '../../Layout';
import "./Profile.css";

const Profile = () => {

    return (
        <>
            <Layout>
                <div class="mainBannerSection" >

                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="main-content d-flex">
                                    <div class="img-content">
                                        <img class="image-wrap " src="/assets/images/1.jpg" />
                                    </div>
                                    <div class="text-wrap ml-2">
                                        <div class="text-content d-flex">
                                            <h6 class="mr-2"> Kartik Tyagi</h6>
                                            <span class="mr-2 mt-2"><i class="fa fa-check-circle" style={{ fontSize: 20, color: "#e6d7da" }}></i></span>
                                            <span class="status mr-2 mt-2"> offline
                                            </span>
                                        </div>
                                        <div class="text-star d-flex">
                                            <ul >
                                                <li>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                                <li>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </li>
                                            </ul>
                                            <span class="dott"></span>
                                            <h6 class="text-white">5 out of 5</h6>
                                            <span class="dott"></span>
                                            <h6 class="text-white">9 out of 9</h6>

                                        </div>
                                        <div class="third-content">
                                            <h6 class="text-white">Tester</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="side-content ">

                                    <div class="dimo-wrap d-flex">
                                        <div class="dimo">
                                            <div class="dimo-one">
                                                10
                                            </div>
                                            <div class="dimo-two">
                                                views
                                            </div>
                                        </div>
                                        <div class="dimo">
                                            <div class="dimo-one">
                                                10
                                            </div>
                                            <div class="dimo-two">
                                                comments
                                            </div>
                                        </div>
                                        <div class="dimo">
                                            <div class="dimo-one">
                                                10
                                            </div>
                                            <div class="dimo-two">
                                                likes
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <section class="mid-sectiuon">
                    <div class="auto-container">
                        <div class="info-mid ">
                            <ul class="">
                                <li><a href="#"> <i class="fa fa-info-circle" aria-hidden="true"></i> info</a></li>
                                <li><a href="#"> <i class="fa fa-globe" aria-hidden="true"></i> overview 1</a></li>
                                <li><a href="media"> <i class="fa fa-camera" aria-hidden="true"></i> Media </a></li>
                                <li><a href="#"> <i class="fa fa-address-card" aria-hidden="true"></i> activity</a></li>
                                <li><a href="#"> <i class="fa fa-clipboard" aria-hidden="true"></i> posts</a></li>
                            </ul>
                        </div>

                    </div>
                </section>
                <section class="second-section">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="show-all-cards p-4 mt-4">
                                    <ul>
                                        <li>
                                            <h6 class="d-flex mr-3 ml-3">All<span class="media-icons ml-2"><i class='far fa-file-image'></i></span> </h6>
                                        </li>
                                        <li>
                                            <h6 class="d-flex mr-3">Photos<span class="media-icons ml-2"><i class='fas fa-camera-retro'></i></span> </h6>
                                        </li>
                                        <li>
                                            <h6 class="d-flex mr-3">Videos<span class="media-icons ml-2">
                                                <i class="fa fa-play-circle"></i></span> </h6>
                                        </li>
                                        <li>
                                            <h6 class="d-flex mr-3">Audios<span class="media-icons ml-2">
                                                <i class='far fa-file-audio'></i></span> </h6>
                                        </li>
                                        <li>
                                            <h6 class="d-flex mr-3">Files<span class="media-icons ml-2"><i class='far fa-file-video'></i></span> </h6>
                                        </li>



                                    </ul>
                                </div>
                                <div class="row media-bg-image m-0 mt-4">
                                    <div class="col-lg-9">
                                        <div class="d-flex p-2 text-white">
                                            <span class="media-icons ml-2 mr-2"><i class='far fa-file-video'></i></span> Photos
                                        </div>

                                    </div>
                                    <div class="col-lg-3 ">
                                        <a href="#">
                                            <h6 class="text-white">View All</h6>
                                        </a>
                                    </div>
                                </div>
                                <div class="media-content-images">
                                    <ul>
                                        <li>
                                            <img class="media-content-img mt-4" src="/assets/images/1.jpg" />
                                        </li>
                                        <li>
                                            <img class="media-content-img mt-4" src="/assets/images/1.jpg" />
                                        </li>
                                        <li>
                                            <img class="media-content-img mt-4" src="/assets/images/1.jpg" />
                                        </li>
                                        <li>
                                            <img class="media-content-img mt-4" src="/assets/images/1.jpg" />
                                        </li>
                                        <li>
                                            <img class="media-content-img mt-4" src="/assets/images/1.jpg" />
                                        </li>
                                    </ul>

                                </div>
                                <div class="row media-bg-image-video m-0 mt-4">
                                    <div class="col-lg-9">
                                        <div class="d-flex p-2 text-white ">
                                            <span class="media-icons ml-2 mr-2"><i class='far fa-file-video'></i></span> videos
                                        </div>

                                    </div>
                                    <div class="col-lg-3 ">
                                        <a href="#">
                                            <h6 class="text-white">View All</h6>
                                        </a>
                                    </div>
                                </div>
                                <div class="no-items p-4 mt-2 border-sideline">
                                    <h6>No items found</h6>
                                </div>
                                <div class="row media-bg-image m-0 mt-4">
                                    <div class="col-lg-9">
                                        <div class="d-flex p-2 text-white ">
                                            <span class="media-icons ml-2 mr-2"><i class='far fa-file-video'></i></span> Audios
                                        </div>

                                    </div>
                                    <div class="col-lg-3 ">
                                        <a href="#">
                                            <h6 class="text-white">View All</h6>
                                        </a>
                                    </div>
                                </div>
                                <div class="no-items p-4 mt-2 border-sideline">
                                    <h6>No items found</h6>
                                </div>
                                <div class="row media-bg-image-file m-0 mt-4">
                                    <div class="col-lg-9">
                                        <div class="d-flex p-2 text-white ">
                                            <span class="media-icons ml-2 mr-2"><i class='far fa-file-video'></i></span> Files
                                        </div>

                                    </div>
                                    <div class="col-lg-3 ">
                                        <a href="#">
                                            <h6 class="text-white">View All</h6>
                                        </a>
                                    </div>
                                </div>
                                <div class="no-items p-4 mt-2 border-sideline mb-3">
                                    <h6>No items found</h6>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="one-card  my-4 d-flex justify-content-between">
                                    <div class="first-content d-flex">
                                        <img class="ml-2 mt-2" src="/assets/images/1.jpg" />
                                        <h6 class="text-white ml-2 mb-2 mt-2">sign in to account</h6>
                                    </div>
                                    <div class="second-content">
                                        <img class="img-change " src="/assets/images/1.jpg" />
                                    </div>
                                </div>
                                <div class="second-card">
                                    <div class="d-flex mx-4 mt-2 mb-2 pt-3">
                                        <span class="user-profile" > <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                        <h6 class="ml-3">About me</h6>
                                    </div>
                                    <div class="border-bottom-line mx-4 my-4"></div>
                                    <div class="profile-image">
                                        <img src="/assets/images/1.jpg" />
                                        <h4>hello</h4>
                                        <p class="p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>

                                        <div class="border-line">

                                        </div>
                                        <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis aperiam quod facilis consectetur, .</p>
                                    </div>
                                </div>
                                <div class="third-card mb-3">
                                    <div class="d-flex mx-4 mt-2 mb-2 pt-3">
                                        <span class="user-profile" > <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                        <h6 class="ml-3">Friends</h6>

                                    </div>
                                    <div class="border-bottom-line mx-4 my-3"></div>
                                    <ul>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  </h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  <span>    <i class="fa fa-check-circle" aria-hidden="true"></i></span></h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  <span>    <i class="fa fa-check-circle" aria-hidden="true"></i></span></h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  <span>    <i class="fa fa-check-circle" aria-hidden="true"></i></span></h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  </h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="border-bottom-line mx-4 my-4"></div>
                                    <a href="show-all">
                                        <h6 class="text-center mx-3 pb-2">show all friends(11)</h6></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
                <section class="second-section">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="information-card my-4 px-4 py-4">
                                    <div class="d-flex  mb-4 border-bottom-line">
                                        <span class="mr-3 mb-2"><i class="fa fa-info-circle" aria-hidden="true"></i>
                                        </span>
                                        <h6 class="mb-2">profile</h6>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>Name</li>
                                                    <li>Gender</li>
                                                    <li>Between age</li>
                                                    <li>Looking for</li>
                                                </ul>
                                            </div>

                                        </div>
                                        <div class="col-lg-8">
                                            <div class="info-profile-one">
                                                <ul>
                                                    <li>Akruti kalia</li>
                                                    <li>Female</li>
                                                    <li>23</li>
                                                    <li>soulmate</li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="col-lg-4">
                                <div class="one-card  my-4 d-flex justify-content-between">
                                    <div class="first-content d-flex">
                                        <img src="/assets/images/1.jpg" />
                                        <h6 class="text-white ml-2 mb-2 mt-2">sign in to account</h6>
                                    </div>
                                    <div class="second-content">
                                        <img src="/assets/images/1.jpg" />
                                    </div>
                                </div>
                                <div class="second-card">
                                    <div class="d-flex mx-4 mt-2 mb-2 pt-3">
                                        <span class="user-profile" > <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                        <h6 class="ml-3">About me</h6>
                                    </div>
                                    <div class="border-bottom-line mx-4 my-4"></div>
                                    <div class="profile-image">
                                        <img src="/assets/images/1.jpg" />
                                        <h4>hello</h4>
                                        <p class="m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>

                                        <div class="border-line">

                                        </div>
                                        <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis aperiam quod facilis consectetur, .</p>
                                    </div>
                                </div>
                                <div class="third-card mb-3">
                                    <div class="d-flex mx-4 mt-2 mb-2 pt-3">
                                        <span class="user-profile" > <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                        <h6 class="ml-3">Friends</h6>

                                    </div>
                                    <div class="border-bottom-line mx-4 my-3"></div>
                                    <ul>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  </h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/background/bg.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  <span>    <i class="fa fa-check-circle" aria-hidden="true"></i></span></h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  <span>    <i class="fa fa-check-circle" aria-hidden="true"></i></span></h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  <span>    <i class="fa fa-check-circle" aria-hidden="true"></i></span></h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="third-image-content d-flex pb-3">
                                                <div class="third-image">
                                                    <img src="/assets/images/1.jpg" />
                                                </div>
                                                <div class="third-content">
                                                    <h5>Lorem ipsum dolor  </h5>
                                                    <h6>loreum ipsum</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div class="border-bottom-line mx-4 my-4"></div>
                                    <a href="show-all">
                                        " <h6 class="text-center mx-3 pb-2">show all friends(11)</h6></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </Layout>
        </>
    )
}

export default Profile;