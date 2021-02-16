import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function Home (){
    return (
        <div className="Home">
            <div className="tagline">Help your kids unlock their potential</div>
            <div className="mission">We are committed to providing 
                quality math and science content for young learners 
                ages 7 to 19</div>
            <div className="physics"></div>
            <div className="calculator"></div>
            <div className="globus"></div>
            <PrimaryButton text="Learn More" type="submit"/>
        </div>
    )
}