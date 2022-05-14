<template>
  <form :id="elementId" class="efsane-form" :style="styles">
    <template v-for="(element, key) in efsaneElements">
      <!--      if fieldset-->
      <efsane-fieldset v-if="element.efsane.tag === 'fieldset'" :key="key" :fieldset-key="key + 1"
                       :style="{[`--${element.efsane.gridArea}`]:element.efsane.gridArea,
                                    gridArea: `var(--${element.efsane.gridArea})`,
                                    gridTemplateRows: `repeat(${element.children.length}, max-content)`}"
                       :slots="element.efsane.slots"
                       :efsane-attrs="element.efsane.attrs"
                       :grid-template-areas="element.efsane.gridTemplateAreas">

        <template v-for="(subElement, key) in element.efsane.slots">
            <!--      if other elements-->
            <div v-if="subElement.efsane.efsaneTag === 'efsane-other'" class="efsane-other-element"
                 :style="{[`--${subElement.efsane.gridArea}`]:subElement.efsane.gridArea,
                              gridArea: `var(--${subElement.efsane.gridArea})`}">

                <slot v-if="slotControl(subElement.data)" :name="subElement.data.slot" v-bind="subElement.data.attrs" v-on="element.data.on"></slot>
                <component v-else :is="subElement.tag" v-bind="subElement.data.attrs" v-on="subElement.data.on"></component>
            </div>

            <!--      if coverage element-->
            <component v-else :is="subElement.efsane.efsaneTag"  :key="key"
                       :value="setValue(subElement.efsane.attrs)"
                       @input="getValue($event,subElement.efsane.attrs)"
                       :style="{[`--${subElement.efsane.gridArea}`]:subElement.efsane.gridArea,
                              gridArea: `var(--${subElement.efsane.gridArea})`}"
                       :efsane-attrs="subElement.efsane.attrs"
                       :efsane-events="subElement.efsane.events"
            >
            </component>
        </template >


      </efsane-fieldset>
      <!--      if other elements-->
      <div v-else-if="element.efsane.efsaneTag === 'efsane-other'" class="efsane-other-element"
           :style="{[`--${element.efsane.gridArea}`]:element.efsane.gridArea,
                            gridArea: `var(--${element.efsane.gridArea})`}">

          <slot v-if="slotControl(element.data)" :name="element.data.slot" v-bind="element.data.attrs" v-on="element.data.on"></slot>
          <component v-else :is="element.tag" v-bind="element.data.attrs" v-on="element.data.on" ></component>
      </div>

      <!--      if coverage element-->
      <component v-else :is="element.efsane.efsaneTag"  :key="key"
                 :value="setValue(element.efsane.attrs)"
                 @input="getValue($event,element.efsane.attrs)"
                 :style="{[`--${element.efsane.gridArea}`]:element.efsane.gridArea,
                            gridArea: `var(--${element.efsane.gridArea})`}"
                 :efsane-attrs="element.efsane.attrs"
                 :efsane-events="element.efsane.events">

      </component>

    </template>
  </form>
</template>

<script>
import EfsaneFieldset from "./efsane-fieldset"
import Methods from "./methods"
export default {
  name: "efsane-form",
  components: {
    EfsaneFieldset
  },
  mixins:[Methods],
  props:{
      value:{},
      gap:{
        type:[String, Number],
        default: "10"
      },
      margin:{
        type:[String, Number],
        default: "0"
      },
      marginTop:{
        type:[String, Number],
        default: "0"
      },
      marginRight:{
        type:[String, Number],
        default: "0"
      },
      marginBottom:{
        type:[String, Number],
        default: "0"
      },
      marginLeft:{
        type:[String, Number],
        default: "0"
      },
      padding:{
        type:[String, Number],
        default: "0"
      },
      paddingTop:{
        type:[String, Number],
        default: "0"
      },
      paddingRight:{
        type:[String, Number],
        default: "0"
      },
      paddingBottom:{
        type:[String, Number],
        default: "0"
      },
      paddingLeft:{
        type:[String, Number],
        default: "0"
      },
      numberOfColumns:{
        type:[String, Number],
        default: 12
      }
  },
  data(){
      return{
        efsaneElements:[],
        elementId:this.makeId(),
        fromGridTemplateAreas:null
      }
  },
  async created() {
    this.createOrUpdate()
  },
  watch:{
    "$parent._data":{
      handler(){
        this.createOrUpdate()
      },
      deep:true
    },
    value:{
      handler(){
        this.createOrUpdate()
      },
      deep:true
    }
  },
  computed:{
    styles(){
      return{
        "--efsane-form-gap":CSS.px(this.gap),
        "--efsane-form-margin-top":CSS.px(parseInt(this.marginTop) || parseInt(this.margin) || 0),
        "--efsane-form-margin-left":CSS.px(parseInt(this.marginLeft) || parseInt(this.margin) || 0),
        "--efsane-form-margin-right":CSS.px(parseInt(this.marginRight) || parseInt(this.margin) || 0),
        "--efsane-form-margin-bottom":CSS.px(parseInt(this.marginBottom) || parseInt(this.margin) || 0),
        "--efsane-form-padding-top":CSS.px(parseInt(this.paddingTop) || parseInt(this.padding) || 0),
        "--efsane-form-padding-left":CSS.px(parseInt(this.paddingLeft) || parseInt(this.padding) || 0),
        "--efsane-form-padding-right":CSS.px(parseInt(this.paddingRight) || parseInt(this.padding) || 0),
        "--efsane-form-padding-bottom":CSS.px(parseInt(this.paddingBottom) || parseInt(this.padding) || 0),
        "--efsane-form-grid-template-areas":this.fromGridTemplateAreas,
        "--efsane-number-of-columns":parseInt(this.numberOfColumns),
        "--efsane-number-of-rows":parseInt(this.efsaneElements.length)
      }
    }
  },
  methods:{
    reportValidity(){
      document.querySelector(".efsane-form").reportValidity()
    },
    checkValidity(){
      return document.querySelector(".efsane-form").checkValidity()
    },
    setValue(attrs){
      let arrayName = attrs?.arrayName
      let arrayLine = attrs?.arrayLine
      let path = attrs?.name

      if(arrayName){ // bir array içinde gelecekse
          if(this.value[arrayName] && this.value[arrayName].length){
            if(this.value[arrayName][arrayLine]){
              return this.fromObject(this.value[arrayName][arrayLine], path)
            }else{
              this.value[arrayName][arrayLine] = {}
              return this.fromObject(this.value[arrayName][arrayLine],path)
            }
          }else{
            this.value[arrayName] = []
            this.value[arrayName][arrayLine] = {}
            return this.fromObject(this.value[arrayName][arrayLine], path)
          }
      }else if(!arrayName && arrayLine > -1){ // kendisi bir arrayse
          if(this.value&& this.value.length){
            if(this.value[arrayLine]){
              return this.fromObject(this.value[arrayLine], path)
            }else{
              this.value[arrayLine] = {}
              return this.fromObject(this.value[arrayLine],path)
            }
          }else{
            this.value= []
            this.value[arrayLine] = {}
            return this.fromObject(this.value[arrayLine], path)
          }
      }
      else{
        return this.fromObject(this.value, path)
      }
    },
    getValue(eventValue, attrs){
      let arrayName = attrs?.arrayName
      let arrayLine = attrs?.arrayLine

      let value = !arrayName && arrayLine > -1 ? [...this.value] : {...this.value}
      let path = attrs?.name

      if(arrayName){
          if(value[arrayName] && value[arrayName].length){
            if(value[arrayName][arrayLine]){
              let arrayObject = value[arrayName][arrayLine]
              value[arrayName][arrayLine] = this.updatePath(arrayObject, path, eventValue)
            }else{
              value[arrayName][arrayLine] = {}
              let arrayObject = value[arrayName][arrayLine]
              value[arrayName][arrayLine] = this.updatePath(arrayObject, path, eventValue)
            }
          }else{
            value[arrayName] = []
            value[arrayName][arrayLine] = {}
            let arrayObject = value[arrayName][arrayLine]
            value[arrayName][arrayLine] = this.updatePath(arrayObject, path, eventValue)
          }
      }else if(!arrayName && arrayLine > -1){
          if(value && value.length > 0){
            if(value[arrayLine]){
              let arrayObject = value[arrayLine]
              value[arrayLine] = this.updatePath(arrayObject, path, eventValue)
            }else{
              value[arrayLine] = {}
              let arrayObject = value[arrayLine]
              value[arrayLine] = this.updatePath(arrayObject, path, eventValue)
            }
          }else{
            value = []
            value[arrayLine] = {}
            let arrayObject = value[arrayLine]
            value[arrayLine] = this.updatePath(arrayObject, path, eventValue)
          }
      }else{
        value = this.updatePath(value, path, eventValue)
      }
      this.$emit('input', null)
      this.$emit('input', value)
      this.createOrUpdate()
    },
    fromObject(obj, path, def=null) {
      try{
        if(!path || !obj) return
        // Cache the current object
        let current = obj;
        let parts = path.split('.');
        // For each item in the path, dig into the object
        for (let i = 0; i < parts.length; i++) {
          // If the item isn't found, return the default (or null)
          if (!parts[i] || !current[parts[i]]) return def;
          // Otherwise, update the current  value
          current = current[parts[i]];
        }
        return current;
      }
      catch{
        return def;
      }
    },
    stringToPath(path){
      // If the path isn't a string, return it
      if (typeof path !== 'string') return path;
      // Create new array
      let output = [];
      // Split to an array with dot notation
      path.split('.').forEach(function (item, index) {
        // Split to an array with bracket notation
        item.split(/\[([^}]+)\]/g).forEach(function (key) {
          // Push to the new array
          if (key.length > 0) {
            output.push(key);
          }
        });
      });
      return output;
    },
    updatePath(obj, path, val) {
      obj = {...obj}
      // Convert the path to an array if not already
      path = this.stringToPath(path);
      let length = path.length;
      let current = obj;
      // Loop through the path
      path.forEach(function (key, index) {
        // If this is the last item in the loop, assign the value
        if (index === length -1) {
          current[key] = val;
        }
        // Otherwise, update the current place in the object
        else {
          // If the key doesn't exist, create it
          if (!current[key]) {
            current[key] = {};
          }
          // Update the current place in the objet
          current = current[key];
        }
      });
      return obj
    },
    slotControl(data){
      return data?.slot && data.slot !== ""
    },
    createOrUpdate(){
      let results = this.setEfsaneNode(this.$options._renderChildren)
      this.efsaneElements = this.$options._renderChildren.filter(v => !!v.tag)
      this.fromGridTemplateAreas = results[1]
    },
    getColumnAreas(gridTemplateAreas=[], colSpan=0, gridAreaName=""){
      if(colSpan > parseInt(this.numberOfColumns)){
        colSpan = parseInt(this.numberOfColumns)
      }
      // grid yapısını numberOfColumns ve col spanlere göre işliyoruz.
      let listToAdd = new Array(colSpan).fill(gridAreaName)
      if((listToAdd.length + gridTemplateAreas.at(-1).length) >  parseInt(this.numberOfColumns)){
        gridTemplateAreas.push(listToAdd)

      }else{
        gridTemplateAreas[gridTemplateAreas.length - 1] = gridTemplateAreas.at(-1).concat(listToAdd)
      }

      return gridTemplateAreas
    },
    compileTemplates(gridTemplateAreas=[]){
      // boş kalması gereken yerler bulunup columnlar bütünlenir.
      let templateAreasNewList = []
      gridTemplateAreas.forEach((element)=>{
        let columnDiff = parseInt(this.numberOfColumns) - element.length
        if(columnDiff){
          templateAreasNewList.push(element.concat(new Array(columnDiff).fill(".")))
        }else{
          templateAreasNewList.push(element)
        }
      })

      // 2 katmanlı array yapısını grid template areas propertysine
      // stringe olarak vermek için işlem yapıyoruz.
      let stringList = []
      templateAreasNewList.forEach((element)=>{
        stringList.push(`"${element.join(" ")}"`)
      })
      return stringList.join("\n")
    },
    setKey(keyValue){
        // eğer prop kebab case geliyorsa camel case'e çevrilir.
      return keyValue.replace("data-", "").replace(/-./g, x=>x[1].toUpperCase())
    },
    setAttrs(attrs){
      // value verilmeden eklenen değerler bizim için true'dur. ama bunu handle edemiyoruz o yüzden boş değerler burada bool değere çevrilir
      if(!attrs) return {}
      let asArray = Object.entries(attrs);
      asArray.forEach(([key, attr], index) => {
        if(attr === ""){
          asArray[index] = [this.setKey(key), true]
        }else{
          asArray[index] = [this.setKey(key), attr]
        }
      })
      return Object.fromEntries(asArray)
    },
    setEfsaneNode(slots){
      // burada slot olarak aldığımız alanların efsane component karşılıklarını,
      // attributelerini ve grid yapısını gelen slot arrayine efsane objesi açarak kaydediyoruz.
      if(!slots || !Array.isArray(slots) || !slots.length) return []
      let gridTemplateAreas = [[]]

      slots.forEach((element, key)=>{
        let gridAreaName = `grid-item-${key + 1}`
        element.efsane = {tag:element.tag, gridArea: gridAreaName, attrs:this.setAttrs(element.data?.attrs), events:element.data?.on}

        let colSpan = parseInt(element.efsane?.attrs?.colSpan)
        let colOffset = parseInt(element.efsane?.attrs?.offset) || 0
        if(colSpan || colOffset){
          gridTemplateAreas = this.getColumnAreas(gridTemplateAreas, colOffset, ".")
          gridTemplateAreas = this.getColumnAreas(gridTemplateAreas, colSpan, gridAreaName)
        }else{
          gridTemplateAreas = this.getColumnAreas(gridTemplateAreas, parseInt(this.numberOfColumns), gridAreaName)
        }

        if(element.tag === 'fieldset'){
          element.efsane['efsaneTag'] = "efsane-fieldset"
          let results = this.setEfsaneNode(element.children)
          element.efsane['slots'] = results[0]
          element.efsane['gridTemplateAreas'] = results[1]
        }else{

          if(!element.tag){
            alert(`Make sure that the form fields are entered correctly. Do not shorten html tags. (Error Form Line: ${key} )`)
          }
          switch (element.tag) {
            case "select":
              if(element?.data?.attrs?.type && element.data.attrs.type === "search"){
                element.efsane['efsaneTag'] = "efsane-search-select"
              }else{
                element.efsane['efsaneTag'] = "efsane-select"
              }
              break;
            case "input":
              element.efsane['efsaneTag'] = "efsane-input"
              break;
            case "textarea":
              element.efsane['efsaneTag'] = "efsane-textarea"
              break;
            case "legend":
              element.efsane['efsaneTag'] = "efsane-legend"
              break;
            case "button":
              element.efsane['efsaneTag'] = "efsane-button"
              break;
            case "template":
              element.efsane['efsaneTag'] = "efsane-other"
              break;
            default:
              element.efsane['efsaneTag'] = "efsane-other"
              break;
          }
        }

        if(element.data.slot && !Object.keys(this.$slots).includes(element.data.slot)){
          this.$slots[element.data.slot] = element.children
        }

      })
      return [slots, this.compileTemplates(gridTemplateAreas)]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "css/basic.scss";
</style>
