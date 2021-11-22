<template>
  <div id="app">
	<div id="app">
		<task-list />
	</div>
	</div>
</template>

<script>
import TaskList from './components/TaskList.vue';

export default {
  name: "App",
  components: {
	TaskList,
  }
};
</script>

<style>
@import "./index.css";
</style>
