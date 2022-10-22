import React from "react";
import "./Login.css";
import { loginUrl } from './spotify'
import logoirisfylogin from './img/IRISFY_LOGO_SIDEBAR-removebg-preview.png'

function Login() {
    return (
        <div className="login">
            <h1>I am the login</h1>
            {/* Spotify Logo */}
            {/*
                https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png
            */}
            <img
                src={logoirisfylogin}
                alt=""
            />
            {/* Login with spotify button */}
            <a href={loginUrl} >ENTRAR COM O SPOTIFY</a>
        </div>
    )
}

export default Login;