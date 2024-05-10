import React from 'react';
import resume from "../img/cv.jpg";

function Resume ()
{

    return (
        <div className="resume">
            <div className="resume_jpg">
                <img src={resume}/>
            </div>
        </div>
    );
};

export default Resume;



