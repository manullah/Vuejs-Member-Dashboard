<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="r-table">
          <table class="table">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Location</th>
            </tr>
            <tr v-for="(item, index) in people" :key="index">
              <td>
                <div class="r-profile-picture">
                  <img
                    :src="setPicture(item.picture)"
                    :alt="setName(item.name)"
                    class="rounded-circle"
                  />
                </div>
              </td>
              <td>
                <div class="r-table__column">
                  <span class="r-table__column--name">
                    {{ setName(item.name) }}
                  </span>
                  <span class="r-table__column--email">{{ item.email }}</span>
                </div>
              </td>
              <td>
                <div class="r-table__column">
                  <span class="r-table__column--age">
                    {{ setAge(item.dob) }}
                  </span>
                </div>
              </td>
              <td>
                <div class="r-table__column">
                  <span
                    class="r-table__column--gender"
                    :class="
                      item.gender === genderConstant.male ? 'male' : 'female'
                    "
                  >
                    {{ item.gender }}
                  </span>
                </div>
              </td>
              <td>
                <div class="r-table__column">
                  <span class="r-table__column--nationality">
                    <img
                      :src="`https://flagcdn.com/16x12/${
                        item.nat && item.nat.toLowerCase()
                      }.png`"
                      :alt="item.nat"
                    />
                  </span>
                </div>
              </td>
              <td>
                <div class="r-table__column">
                  <span class="r-table__column--location">
                    {{ setLocation(item.location) }}
                  </span>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gender as genderConstant } from "../constants/gender";

export default {
  props: {
    people: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      genderConstant,
    };
  },
  methods: {
    setName(name) {
      if (name) return `${name.title} ${name.first} ${name.last}`;
      return "-";
    },

    setAge(dob) {
      if (dob) return `${dob.age}`;
      return "-";
    },

    setLocation(location) {
      if (location)
        return `${location.city}, ${location.state}, ${location.country}`;
      return "-";
    },

    setPicture(picture) {
      if (picture) return picture.thumbnail;
      return "";
    },
  },
};
</script>
