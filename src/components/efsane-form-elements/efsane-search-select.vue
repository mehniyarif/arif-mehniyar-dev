<template>
  <label v-bind="efsaneSearchSelect" :for="listId" :style="styles" v-select-click-outside="clickOutside">
    <span v-if="efsaneAttrs.label"
      >{{ efsaneAttrs.label }}
      <efsane-description-tooltip
        :tooltip="efsaneAttrs.description"
      ></efsane-description-tooltip>
    </span>
    <div class="input-search-select-container">
      <input
        class="input-search-select"
        @focusOut="close"
        :id="inputId"
        v-bind="searchSelectAttrs"
        v-on="efsaneEvents"
        type="search"
        :placeholder="efsaneAttrs.placeholder"
        v-model="labelPlaceholder"
        @input="changeValue"
        @focus="open"
        @mousedown="open"
      />
      <ul
        :id="listId"
        :value="value"
        @input="
          (e) => {
            $emit('input', e.target.value);
          }
        "
        v-if="show"
      >
        <li
          :data-value="optionValue(option)"
          :value="optionLabel(option)"
          v-for="(option, key) in options"
          @click.stop="select(option)"
        >
          {{ optionLabel(option) }}
        </li>
        <li disabled v-if="!options.length">No Match</li>
      </ul>
    </div>
  </label>
</template>

<script>
import Attrs from "./attrs";
import Methods from "./methods";
import EfsaneDescriptionTooltip from "./partials/efsane-description-tooltip";
export default {
  name: "efsane-search-select",
  mixins: [Attrs, Methods],
  components: {
    EfsaneDescriptionTooltip,
  },
  data() {
    return {
      listId: this.makeId(),
      inputId: this.makeId(),
      containerId: this.makeId(),
      show: false,
      labelPlaceholder: this.value || "",
    };
  },
  props: {
    efsaneAttrs: Object,
    efsaneEvents:Object,
    childChangeRequest: Function,
    value: {},
  },
  mounted() {
    this.labelControl();
  },
  computed: {
    labelValidation() {
      let item = this.options.find((v) => this.optionValue(v) === this.value);
      if (item) return true;
      return false;
    },
    styles() {
      return {
        "--pg-efsane-search-select-label-validation-color": this.labelValidation
          ? "rgba(0,0,0,0.7)"
          : "#f63e3e",
      };
    },
    options() {
      return this.efsaneAttrs.options || [];
    },
    searchSelectAttrs() {
      let asArray = Object.entries(this.efsaneAttrs);
      let acceptAttrs = [
        "form",
        "disabled",
        "form",
        "multiple",
        "name",
        "required",
        "type",
      ];
      let filtered = asArray.filter(([key, attr]) => acceptAttrs.includes(key));
      return Object.fromEntries(filtered);
    },
  },
  watch: {
    value: "labelControl",
    options: "labelControl",
  },
  methods: {
    labelControl() {
      let item = this.options.find((v) => this.optionValue(v) === this.value);
      if (item) {
        this.labelPlaceholder = this.optionLabel(item);
      }
    },
    changeValue(e) {
      this.show = true
      this.$emit("input", e.target.value);
    },
    open() {
      this.show = true;
    },
    clickOutside() {
      this.$emit('focusout',true )
      this.close()
    },
    close() {
      this.show = false;
    },
    select(option) {
      this.show = false;
      this.labelPlaceholder = this.optionLabel(option);
      this.$emit("input", this.optionValue(option));
    },
    optionLabel(data) {
      if (!this.efsaneAttrs?.optionLabel) return data;
      let optionLabel = this.efsaneAttrs.optionLabel || "label";
      return data[optionLabel];
    },
    optionValue(data) {
      if (!this.efsaneAttrs?.optionValue) return data;
      let optionValue = this.efsaneAttrs.optionValue || "value";
      return data[optionValue];
    },
  },
  directives: {
    selectClickOutside: {
      bind: function (el, binding) {
        const ourClickEventHandler = (event) => {
          if (
            !el.contains(event.target) &&
            el !== event.target
          ) {
            binding.value(event);
          }
        };
        el.__vueClickEventHandler__ = ourClickEventHandler;

        document.addEventListener("click", ourClickEventHandler);
      },
      unbind: function (el) {
        document.removeEventListener("click", el.__vueClickEventHandler__);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "css/basic.scss";
</style>
