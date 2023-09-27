import React from 'react'
import { calculateAge } from '../../Utils/Function'

const ProfileInfo = ({ profileUserData }) => {


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
                            <li>Marital Status</li>
                            <li>Caste</li>
                            <li>Community</li>
                            <li>Income</li>
                            <li>Living in</li>
                            <li>Height</li>
                            <li>Weight</li>

                            <li>Education</li>
                        </ul>
                    </div>

                </div>
                <div class="col-lg-8">
                    <div class="info-profile-one">
                        <ul>
                            <li>{profileUserData && profileUserData?.first_name?.charAt(0)?.toUpperCase() + profileUserData?.first_name?.slice(1) + " " + profileUserData?.last_name}</li>
                            <li>{profileUserData.gender}</li>
                            <li>{calculateAge(profileUserData.date_of_birth)}</li>
                            <li>{'girl'}</li>
                            <li>{profileUserData.marital_status}</li>
                            <li>{profileUserData.caste}</li>
                            <li>{profileUserData.community}</li>
                            <li>{profileUserData.income}</li>
                            <li>{profileUserData.living_in}</li>
                            <li>{profileUserData.height}</li>
                            <li>{profileUserData.weight}</li>
                            <li>{profileUserData?.education}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo