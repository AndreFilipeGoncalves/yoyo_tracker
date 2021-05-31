<template>
    <nav class="menu-wrapper">
        <router-link
        class="menu-entry"
        v-for="entry in menuEntries"
        :to="entry.route"
        :key="entry.route">
            {{entry.label}}
        </router-link>
    </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'

const { t } = useI18n()
const props = defineProps({
    menuEntries: Object
})

</script>

<style lang="scss">
.menu-wrapper {
    width:100%;
    height:60px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    background-color:white;
    box-shadow: -10px 10px 5px 0px rgba(0,0,0,0.15);
    .menu-entry {
        box-sizing:border-box;
        padding:12px;
        font-size:18px;
    }
}
</style>
