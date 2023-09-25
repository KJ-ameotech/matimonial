import React from 'react'

const ProfileInfo = () => {
    return (
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
    )
}

export default ProfileInfo