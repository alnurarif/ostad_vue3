<script setup>
import { faqInfo as pageInfo } from '../data/pageData';
const info = pageInfo
</script>

<template>
    <section class="gray-bg section-padding" id="faq-page">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
                    <div class="page-title">
                        <h2>{{ info.faqHead }}</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <div class="panel-group" id="accordion">
                        <div class="panel" v-for="(faq,index) in info.faqs" :key="index">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" :href="`#${faq.questionId}`" :aria-expanded="0==index && `true`"><span></span>{{faq.faqQuestion}}</a>
                            </h4>
                            <div :id="faq.questionId" class="panel-collapse collapse" :class="0==index && `in`">
                                <p>{{faq.faqAnswer}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
