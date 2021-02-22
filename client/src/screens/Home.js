import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useHistory } from "react-router-dom";

export default function Home (){
    const history = useHistory();

    const handleRoute = () =>{ 
        history.push("/About");
    }

    return (
        <div className="Home">
            <div className="tagline">Help your kids unlock their potential</div>
            <div className="mission">We are committed to providing 
                quality math and science content for young learners 
                ages 7 to 19</div>
            <div className="physics"></div>
            <div className="calculator"></div>
            <div className="globus"></div>
            <div className="home-button">
                <PrimaryButton 
                    text="Learn More" 
                    type="submit"
                    onClick={handleRoute}
                />
            </div>
        </div>
    )
}