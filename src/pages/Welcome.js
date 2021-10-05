import React from 'react';
import style from "./style/welcome.module.css";


export default function Welcome() {
    return(
        <div className={style.WelcomeContainer}>
            <h1>Hello world!</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    We're working hard to develop this site ready for everyone.The official build wil role out soon.Expect nothing but the best of our services and 24hrs connection with the people you love
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur odit deserunt officia, nihil perferendis dicta enim tenetur deleniti nisi vitae repellendus incidunt in officiis cumque veniam voluptate molestiae eius. Unde.</p>
                <p>
                    Anyone can join with an invite from an existing username and we'll text you if ou have a friend on the app who can let you in. We are so grateful you're here and can't wait to have you join.
                </p>
                
            </div>
        </div>
    )
} 