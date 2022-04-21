<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12"></div>
        <div class="col-12">
          <div class="main-container mt-5">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="main-container--title">
                    <h4 class="fw-bold">Member Dashboard</h4>
                  </div>
                </div>
              </div>
            </div>
            <DashboardCards :people="people"></DashboardCards>
            <TableComponent :people="people"></TableComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import TableComponent from "./components/Table.vue";
import DashboardCards from "./components/DashboardCards.vue";

export default {
  name: "App",
  components: {
    TableComponent,
    DashboardCards,
  },
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        let response = await axios.get(
          "https://randomuser.me/api/?page=1&results=25&seed=abc"
        );
        this.people = response.data.results;
      } catch (error) {
        console.log("Failed to load user");
        // Do something to throw errror
      }
    },
  },
};
</script>
