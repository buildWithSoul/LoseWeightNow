<template>
  <div class="calculator-root">
    <h2 v-if="chosenMethod"> Calculating Using {{chosenMethod}} Equation</h2>
    <h2 v-else> Weight Loss Calculator </h2>
    <row>
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="Method"></el-step>
        <el-step title="BioMetrics"></el-step>
        <el-step title="Lifestyle"></el-step>
        <el-step title="Motivation"></el-step>
        <el-step title="Results"></el-step>
      </el-steps>
    </row>
  <row>
    <div v-if="active === 0">
      <div class="method-container">
        <div>
          <h3> Choose your method of calorie calculation </h3>
        </div>
        <div class="methods">
          <el-radio v-model="chosenMethod" label="Basic" border>Basic</el-radio>
          <el-popover
            placement="top-start"
            title="Based on the Katch McArdle Equation"
            width="300"
            trigger="hover">
          <el-radio v-model="chosenMethod" label="Katch McArdle" slot="reference" border>KM</el-radio>
        </el-popover>
        <el-popover
          placement="top-start"
          title="Based on the Mifflin-St Jeor Equation"
          width="300"
          trigger="hover">
          <el-radio v-model="chosenMethod" slot="reference" label="Mifflin-St Jeor" border>Mifflin</el-radio>
        </el-popover>

        </div>
      </div>

      <p class="hidden"> <CalculatorMethod :chosenMethod="chosenMethod" v-on:chooseMethod="chooseMethod"/> </p>
    </div>
    <div v-if="active === 1">
      <div class="method-container">
        <div>
          <h3> Weight </h3>
          <el-input-number v-model="weight" label="lbs" controls-position="right" :min="1" :max="400"></el-input-number> lbs
        </div>
        <div v-if="chosenMethod !== 'Basic'">
          <row>
        <Col :xs="24" :md="12">
          <h3> Body Fat </h3>
          <el-input-number v-model="percentFat" label="percent" controls-position="right" :min="0" :max="45"></el-input-number> %
        </Col>

        <Col :xs="24" :md="12">
          <h3> Gender </h3>  <p> Hint: If you were born with balls, you are Male. </p>
          <el-radio v-model="chosenGender" label="Male" border>Male</el-radio>
          <el-radio v-model="chosenGender" label="Female" border>Female</el-radio>
        </Col>
      </row>
      <row>
        <Col :xs="24" :md="12">
          <h3> Height </h3>
          <el-input-number v-model="feet" controls-position="right" :min="0" :max="10"></el-input-number> feet
          <el-input-number v-model="inches" controls-position="right" :min="0" :max="12"></el-input-number> inches

        </Col>
        <Col :xs="24" :md="12">
          <h3> Age </h3>
          <el-input-number v-model="age" controls-position="right" :min="1" :max="100"></el-input-number> years
        </Col>
      </row>
      </div>
      </div>
    </div>
    <div v-if="active === 2">
      <div class="method-container">
        <div>
          <h3> Activity </h3>
          <el-popover
            placement="top-start"
            title="Work a desk job and don't work out"
            width="300"
            trigger="hover">

          <el-radio v-model="activityMultiplier" slot="reference" label="1.2" border>Sedentary</el-radio>
        </el-popover>
        <el-popover
          placement="top-start"
          title="Workout once or twice a week"
          width="300"
          trigger="hover">

          <el-radio v-model="activityMultiplier" slot="reference" label="1.375" border>Light</el-radio>
        </el-popover>
        <el-popover
          placement="top-start"
          title="Work out 3 to 5 times a week "
          width="300"
          trigger="hover">

          <el-radio v-model="activityMultiplier" slot="reference" label="1.55" border>Moderate</el-radio>
        </el-popover>
        <el-popover
          placement="top-start"
          title="Workout every day"
          width="300"
          trigger="hover">

          <el-radio v-model="activityMultiplier" slot="reference" label="1.725" border>Very</el-radio>
        </el-popover>
        <el-popover
          placement="top-start"
          title="Training for marathons"
          width="300"
          trigger="hover">

          <el-radio v-model="activityMultiplier" slot="reference" label="1.9" border>Extra</el-radio>
        </el-popover>
        </div>
        <h3> Current Diet </h3>

        <div>
          <h4> Total Calories  </h4>
          <el-input-number v-model="calories" controls-position="right" :min="500" :max="4000"></el-input-number> calories
          <h4> Percentage Distribution  </h4>
          Carbs: <el-input-number v-model="carbs" controls-position="right" :min="1" :max="100"></el-input-number> %
          Fats: <el-input-number v-model="fats" controls-position="right" :min="1" :max="100"></el-input-number> %
          Proteins: <el-input-number v-model="protein" controls-position="right" :min="1" :max="100"></el-input-number> %
        </div>

      </div>
     </div>
    <div v-if="active === 3">
        <h3> Motivation </h3>
        <div class="methods">
          <el-radio v-model="motivation" label="Enjoyable" border>Enjoyable</el-radio>
          <el-radio v-model="motivation" label="Balanced" border>Balanced</el-radio>
          <el-radio v-model="motivation" label="Aggressive" border>Aggressive</el-radio>
        </div>
        <h3> Cheat Frequencies </h3>
        <el-radio v-model="cheat" label="Daily" border>A Litle Every Day</el-radio>
        <el-radio v-model="cheat" label="OnceAWeek" border>One Big Day</el-radio>

     </div>
    <div v-if="active === 4">
        <div>
            <h2> Results Are In! </h2>
        </div>
        <div>
          <p> Your biosystem uses about {{resultTotalCalories}} calories daily </p>
          <p> We recommend eating between {{resultsMinCalories}} and {{resultsMaxCalories}} per day </p>

          <p> On a {{motivation}} lifestyle, this means <p>
            <p> {{dailyJunkMin}} to {{dailyJunkMax}} calories of junk food per day </p>
            <p> {{dailyFreshMin}} to {{dailyFreshMax}} calories of clean food per day </p>

        </div>

    </div>

  </row>

  <row>
    <h3 v-if="showError"> {{errorMessage}} </h3>

    <div class="button-container">
  <Button type="primary" round v-if="active > 0" v-on:click="previous"> Previous </Button>

    <Button type="primary" round v-if="active < 3" v-on:click="next"> Next </Button>
    <Button type="primary" round v-if="active === 3" v-on:click="calculate"> Calculate </Button>

    <div v-if="active === 4">
      <Button type="primary" round> Discover meal options </Button>
      <Button type="primary" round> Join activity groups </Button>

    </div>
  </div>
  </row>

  </div>
</template>

<style>
.calculator-root {
  margin: auto;
}

.hidden {
  display: none;
}

.button-container {
  margin-top: 1.5rem;
}
</style>

<script>
// @ is an alias to /src
import {
  Button,
  Row,
  Col,
  Steps,
  Step,
  Radio,
  InputNumber,
  Popover
} from "element-ui";
import CalculatorMethod from "../components/Calculator_Method";

const ENJOYABLE = "Enjoyable";
const BALANCED = "Balanced";
const AGGRESSIVE = "Aggressive";

export default {
  name: "Calculator",
  components: {
    row: Row,
    Col: Col,
    Button: Button,
    "el-radio": Radio,
    "el-steps": Steps,
    "el-step": Step,
    "el-popover": Popover,
    "el-input-number": InputNumber,
    CalculatorMethod: CalculatorMethod
  },
  data() {
    return {
      active: 0,
      weight: 0,
      percentFat: null,
      age: null,
      feet: null,
      inches: null,
      chosenMethod: null,
      chosenGender: null,
      activityMultiplier: null,
      cheat: null,
      motivation: null,
      calories: null,
      fats: null,
      carbs: null,
      protein: null,
      showError: false,
      errorMessage: null,
      resultTotalCalories: 0,
      resultsMinCalories: 0,
      resultsMaxCalories: 0,
      dailyJunkMax: 0,
      dailyJunkMin: 0,
      dailyCleanMax: 0,
      dailyCleanMin: 0
    };
  },
  methods: {
    next() {
      if (this.validate()) {
        if (this.active++ > 5) this.active = 0;
        this.showError = false;
        this.errorMessage = null;
      }
    },
    validate() {
      switch (this.active) {
        case 0:
          if (this.chosenMethod) return true;
          else {
            this.showError = true;
            this.errorMessage =
              "We gotta select an equation before we move forward!";
            return false;
          }
        case 1:
          if (
            (parseInt(this.weight) > 10 && this.chosenMethod === "Basic") ||
            (parseInt(this.weight) > 10 &&
              this.chosenMethod !== "Basic" &&
              this.percentFat &&
              this.chosenGender &&
              parseInt(this.age) > 2 &&
              this.feet > 1 &&
              this.inches)
          ) {
            return true;
          } else {
            this.showError = true;
            this.errorMessage =
              this.chosenMethod === "Basic"
                ? "We gotta add a real weight before we move forward!"
                : "We gotta add all of this info before we move forward";
            return false;
          }
        case 2:
          if (
            parseInt(this.fats) > 0 &&
            parseInt(this.carbs) > 0 &&
            parseInt(this.protein) > 0 &&
            parseInt(this.calories) > 0 &&
            this.activityMultiplier
          ) {
            if (
              parseInt(this.fats) +
                parseInt(this.carbs) +
                parseInt(this.protein) ===
              100
            ) {
              return true;
            } else {
              this.showError = true;
              this.errorMessage = "Fats protein and carbs must equal to 100%";
              return false;
            }
          } else {
            this.showError = true;
            this.errorMessage =
              "We gotta add all of this info before we move forward";
            return false;
          }
        case 3:
          if (this.motivation && this.cheat) return true;
          else {
            this.showError = true;
            this.errorMessage =
              "We gotta add all of this info before we move forward";
            return false;
          }
        case 4:
          calculate();
      }
    },
    previous() {
      this.active--;
    },
    calculate() {
      // Step 1- get BMR
      const BMR_METHOD = this.chosenMethod;
      const WEIGHT_IN_LBS = parseInt(this.weight);
      const BODY_FAT = parseInt(this.percentFat);
      const GENDER = this.chosenGender;

      const AGE_IN_YEARS = parseInt(this.age);
      const HEIGHT_IN_INCHES = parseInt(this.feet) + parseInt(this.inches);

      const WEIGHT_IN_KG = WEIGHT_IN_LBS / 2.2;

      const HEIGHT_IN_CM = HEIGHT_IN_INCHES * 2.54;

      const LEAN_MASS_IN_LBS = WEIGHT_IN_LBS - (BODY_FAT * WEIGHT_IN_LBS) / 100;

      const KATCH_MCARDLE_EQN = 370 + 9.79 * LEAN_MASS_IN_LBS;
      const MIFFLIN_BASE_EQN =
        10 * WEIGHT_IN_KG + 6.25 * HEIGHT_IN_CM - 5 * AGE_IN_YEARS;
      const MIFFLIN_MALE_EQN = MIFFLIN_BASE_EQN + 5;
      const MIFFLIN_FEMALE_EQN = MIFFLIN_BASE_EQN - 161;
      const BASIC_EQN = WEIGHT_IN_LBS * 10;

      let CALCULATED_BMR = 0;

      if (BMR_METHOD === "Basic") CALCULATED_BMR = BASIC_EQN;
      else if (BMR_METHOD === "Katch McArdle")
        CALCULATED_BMR = KATCH_MCARDLE_EQN;
      else if (GENDER === "Male") CALCULATED_BMR = MIFFLIN_MALE_EQN;
      else CALCULATED_BMR = MIFFLIN_FEMALE_EQN;

      // step 2 - get activity multiplier
      const ACTIVITY_MULTIPLIER = parseInt(this.activityMultiplier);
      const BMR_ACTIVITY_MULTIPLIER = CALCULATED_BMR * ACTIVITY_MULTIPLIER;

      // step 3- thermic effect of food
      const DAILY_CALORIES = parseInt(this.calories);
      const PROTEIN_PERCENT = parseInt(this.protein);
      const CARBS_PERCENT = parseInt(this.carbs);
      const FAT_PERCENT = parseInt(this.fats);

      const CALORIES_FROM_PROTEIN = (PROTEIN_PERCENT * DAILY_CALORIES) / 100;
      const CALORIES_FROM_CARBS = (CARBS_PERCENT * DAILY_CALORIES) / 100;
      const CALORIES_FROM_FAT = (FAT_PERCENT * DAILY_CALORIES) / 100;

      const PROTEIN_BURN = 0.25;
      const CARB_BURN = 0.1;
      const FAT_BURN = 0.025;

      const THERMIC_EFFECT_OF_FOOD =
        PROTEIN_BURN * CALORIES_FROM_PROTEIN +
        CARB_BURN * CALORIES_FROM_CARBS +
        FAT_BURN * CALORIES_FROM_FAT;

      // get results and store in local storage
      const TDEE = BMR_ACTIVITY_MULTIPLIER + THERMIC_EFFECT_OF_FOOD;
      const LOSS_RANGE_MAX = 0.9 * TDEE;
      const LOSS_RANGE_MIN = 0.7 * TDEE;

      this.resultTotalCalories = Math.round(TDEE);
      this.resultsMaxCalories = Math.round(LOSS_RANGE_MAX);
      this.resultsMinCalories = Math.round(LOSS_RANGE_MIN);

      // calculate daily
      const MOTIVATION = this.motivation;
      let DAILY_JUNK_CALORIES_MIN = 0;
      let DAILY_JUNK_CALORIES_MAX = 0;
      let DAILY_FRESH_CALORIES_MIN = 0;
      let DAILY_FRESH_CALORIES_MAX = 0;

      switch (MOTIVATION) {
        case "Aggressive":
          DAILY_JUNK_CALORIES_MIN = 0.1 * LOSS_RANGE_MIN;
          DAILY_JUNK_CALORIES_MAX = 0.1 * LOSS_RANGE_MAX;
          DAILY_FRESH_CALORIES_MIN = 0.9 * LOSS_RANGE_MIN;
          DAILY_FRESH_CALORIES_MAX = 0.9 * LOSS_RANGE_MAX;
          break;
        case "Balanced":
          DAILY_JUNK_CALORIES_MIN = 0.2 * LOSS_RANGE_MIN;
          DAILY_JUNK_CALORIES_MAX = 0.2 * LOSS_RANGE_MAX;
          DAILY_FRESH_CALORIES_MIN = 0.8 * LOSS_RANGE_MIN;
          DAILY_FRESH_CALORIES_MAX = 0.8 * LOSS_RANGE_MAX;
          break;
        case "Enjoyable":
          DAILY_JUNK_CALORIES_MIN = 0.3 * LOSS_RANGE_MIN;
          DAILY_JUNK_CALORIES_MAX = 0.3 * LOSS_RANGE_MAX;
          DAILY_FRESH_CALORIES_MIN = 0.7 * LOSS_RANGE_MIN;
          DAILY_FRESH_CALORIES_MAX = 0.7 * LOSS_RANGE_MAX;
          break;
      }

      this.dailyJunkMin = Math.round(DAILY_JUNK_CALORIES_MIN);
      this.dailyJunkMax = Math.round(DAILY_JUNK_CALORIES_MAX);
      this.dailyFreshMin = Math.round(DAILY_FRESH_CALORIES_MIN);
      this.dailyFreshMax = Math.round(DAILY_FRESH_CALORIES_MAX);
      this.active++;
    },
    finish() {
      return 0;
    },
    chooseMethod(value) {
      this.$data.chosenMethod = value;
    },
    handleWeightChange(value) {
      this.$data.weight = value;
    }
  }
};
</script>
