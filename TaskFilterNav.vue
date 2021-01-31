<template>
  <nav class="tasks-filter-nav">
      <button 
      @click="updateFilter('all')"
      :class="{active: current === 'all'}">View All</button>
      <button 
      @click="updateFilter('incomplete')"
      :class="{active: current === 'incomplete'}">Incomplete</button>
      <button 
      @click="updateFilter('completed')"
      :class="{active: current === 'completed'}">Completed</button>
  </nav>
</template>

<script>
export default {
    props: ['current'],
    methods:{
        updateFilter(by){
            this.$emit('filterChange', by)
        }
    }
}
</script>

<style>
    .tasks-filter-nav button{
        background: none;
        border: none;
        color: #999;
        outline: none;
        font-size: 12px;
        text-transform: uppercase;
        margin-right: 10px;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer;
    }
    .tasks-filter-nav button.active{
        padding-bottom: 7px;
        border-bottom: 2px solid #00ce89;
        color: #555;
    }
</style>