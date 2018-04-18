<template>
    <section class="container">
        <div class="columns is-multiline">
            <div v-for="(item, i) in dog_list" v-bind:key='i' class='column is-1'>
                <img v-bind:src='item.url' />
            </div>
        </div>
    </section>
</template>

<script>
    import dogApi from '@/api/dog'
    import { mapState } from 'vuex'

    export default {
        async fetch({store, params}) {
            let json = await dogApi.dogs(params.breed);
            store.commit('dog_list_update', json)
        },
        computed: mapState(['dog_list']),
    }
</script>