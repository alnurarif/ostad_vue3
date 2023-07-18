<script setup>
import { homeInfo as pageInfo } from '../data/pageData'

const info = pageInfo
</script>

<template>
    <div class="preloader" style="display: none;">
        <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        </div>
    </div>
    <div class="mainmenu-area affix" data-spy="affix" data-offset-top="100">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#primary-menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <a href="#" class="navbar-brand logo">
                    <h2>LuminousLook</h2>
                </a>
            </div>
            <nav class="collapse navbar-collapse" id="primary-menu">
                <ul class="nav navbar-nav navbar-right">
                    <li class=""><a href="#home-page">Home</a></li>
                    <li class=""><a href="#service-page">Service</a></li>
                    <li class=""><a href="#feature-page">Features</a></li>
                    <li class=""><a href="#price-page">Pricing</a></li>
                    <li class=""><a href="#team-page">Team</a></li>
                    <li class=""><a href="#faq-page">FAQ</a></li>
                    <li class=""><a href="#contact-page">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
    <header class="header-area overlay full-height relative v-center" id="home-page" style="background-position: 50% 257px;">
        <div class="absolute anlge-bg"></div>
        <div class="container">
            <div class="row v-center">
                <div class="col-xs-12 col-md-7 header-text">
                    <h2>{{info.homeHead}}</h2>
                    <p>{{info.homePara}}</p>
                    <a href="#" class="button white">Watch video</a>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
</style>
