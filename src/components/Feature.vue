<script setup>
import { featureInfo as pageInfo } from '../data/pageData'

const info = pageInfo
</script>

<template>
    <section class="gray-bg section-padding" id="feature-page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                    <div class="page-title">
                        <h2>{{info.featureHead}}</h2>
                        <p>{{info.featurePara}}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4" v-for="(feature, index) in info.features" :key="index">
                    <div class="box">
                        <div class="box-icon">
                            <img :src="feature.featImg" alt="">
                        </div>
                        <h3>{{feature.featHead}}</h3>
                        <p>{{feature.featPara}}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
