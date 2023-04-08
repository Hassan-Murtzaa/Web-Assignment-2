import React from "react";

function Profile({ userData }) {
    return (
        <div className="datacontainer">
            {userData.avatar_url ? (<div className="dataitem"><img src={userData.avatar_url} /></div>) : (<div></div>)}
            {userData.name ? (<div className="dataitem"><i>Name :</i> {userData.name}</div>) : (<div></div>)}
            {userData.html_url ? (<div className="dataitem"><i>URL:</i> <a href={userData.html_url}>Click</a></div>) : (<div></div>)}
            {userData.bio ? (<div className="dataitem"><i>Bio :</i> {userData.bio}</div>) : (<div></div>)}
        </div>
    );
}

export default Profile;