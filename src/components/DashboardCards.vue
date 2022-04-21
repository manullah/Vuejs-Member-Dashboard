<template>
  <div class="r-cards">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="r-card">
            <div class="r-card__content">
              <span class="r-card__content--value">
                {{ getDifferentNationality() }}
              </span>
              <span class="r-card__content--title">Different Nationality</span>
            </div>
            <div class="r-card__icon">
              <i class="fas fa-flag"></i>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="r-card">
            <div class="r-card__content">
              <span class="r-card__content--value text-capitalize">
                {{ getMostGender() }}
              </span>
              <span class="r-card__content--title">Most Gender</span>
            </div>
            <div class="r-card__icon">
              <i
                class="fas"
                :class="
                  getMostGender() === genderConstant.male
                    ? 'fa-mars'
                    : 'fa-venus'
                "
              ></i>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="r-card">
            <div class="r-card__content">
              <span class="r-card__content--value">
                {{ getAverageAge() }} year
              </span>
              <span class="r-card__content--title">Average Age</span>
            </div>
            <div class="r-card__icon">
              <i class="fas fa-walking"></i>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="r-card">
            <div class="r-card__content">
              <span class="r-card__content--value">
                {{ getAverageMembership() }} year
              </span>
              <span class="r-card__content--title">Average Membership</span>
            </div>
            <div class="r-card__icon">
              <i class="fas fa-users"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gender as genderConstant } from "../constants/gender";
import { average, getNumberOfYears } from "../lib/helpers";

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
    getDifferentNationality() {
      return new Set(this.people).size;
    },

    getMostGender() {
      const countMale = this.people.filter(
        (item) => item.gender === genderConstant.male
      ).length;
      const countFemale = this.people.filter(
        (item) => item.gender === genderConstant.female
      ).length;

      return countFemale > countMale
        ? genderConstant.male
        : genderConstant.female;
    },

    getAverageAge() {
      return average(this.people.map((item) => item.dob?.age || 0)).toFixed(0);
    },

    getAverageMembership() {
      return average(
        this.people.map(
          (item) => getNumberOfYears(item.registered?.date || 0) || 0
        )
      ).toFixed(0);
    },
  },
};
</script>
