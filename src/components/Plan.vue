<script setup>
import { planInfo as pageInfo } from '../data/pageData'

const info = pageInfo
</script>

<template>
    <section class="price-area overlay section-padding" id="price-page" style="background-position: 50% 431px;">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                    <div class="page-title">
                        <h2>{{info.planHead}}</h2>
                        <p>{{info.planPara}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-4" v-for="(plan, index) in info.plans" :key="index">
                    <div class="price-table active">
                        <h3 class="text-uppercase price-title">{{plan.planName}}</h3>
                        <hr>
                        <ul class="list-unstyled">
                            <li><strong class="amount">$ <span class="big">{{ plan.planPrice }}</span></strong>/Month</li>
                            <li v-for="(planFeature, index) in plan.features" :key="index">{{planFeature}}</li>
                        </ul>
                        <hr>
                        <a href="#" class="button">Purchase</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
