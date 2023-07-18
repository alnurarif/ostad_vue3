<script setup>
import { servicesInfo as pageInfo } from '../data/pageData'

const info = pageInfo
</script>

<template>
    <section class="gray-bg section-padding" id="service-page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-4" v-for="(service, index) in info.services" :key="index">
                    <div class="box">
                        <div class="box-icon">
                            <img :src="service.serviceImg" alt="">
                        </div>
                        <h4>{{service.serviceHead}}</h4>
                        <p>{{service.servicePara}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
