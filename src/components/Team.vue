<script setup>
import { teamInfo as pageInfo } from '../data/pageData'

const info = pageInfo
</script>

<template>
    <section class="section-padding gray-bg" id="team-page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                    <div class="page-title">
                        <h2>{{info.teamHead}}</h2>
                        <p>{{info.teamPara}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3" v-for="(member, index) in info.members" :key="index">
                    <div class="single-team">
                        <div class="team-photo">
                            <img :src="member.memberImage" alt="">
                        </div>
                        <h4>{{member.memberName}}</h4>
                        <h6>{{member.memberPosition}}</h6>
                        <ul class="social-menu">
                            <li><a href="#"><i class="ti-facebook"></i></a></li>
                            <li><a href="#"><i class="ti-twitter"></i></a></li>
                            <li><a href="#"><i class="ti-linkedin"></i></a></li>
                            <li><a href="#"><i class="ti-pinterest"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
