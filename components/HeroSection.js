import React, { useRef, useEffect } from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../../src/App.css';
import {TweenMax, Power3} from 'gsap'

function HeroSection() {
    let titleBlock = useRef(null);


    useEffect(() => {
        console.log(titleBlock);
        TweenMax.to(
            titleBlock,
            4,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )
    }, [])


    return (
        <div className="hero-container">
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
                <div className='title-block'
                 ref={el => (titleBlock = el)} >
                    <div className='column'>
                        <h1>Centralized netowrking for Decentralized Assets</h1>
                    </div>
                    <div className='column'>
                        <p>
                            Zentih is a emerging social media platform with the goal of allowing new NFT's the
                            oppurtunity to network and share knowledge as the technology behing the blockchain advnaces.
                        </p>
                    </div>
                        {/* <div className="hero-btns">
                            <Button className="btns" buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            >
                                GET STARTED
                            </Button>
                            <Button className="btns" buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            
                            >
                                Watch Trailer <i className='far fa-play-circle' />
                            </Button>
                        </div> */}
                    </div>    
                </div>
    )
}

export default HeroSection
