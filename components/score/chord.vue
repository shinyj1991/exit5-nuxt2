<template>
  <div class="score-chord" :style="`grid-template-columns: repeat(${measure}, 1fr);`">
    <div class="measure" v-for="(measure, index) in score.contents" :key="index">
      <div class="chord">
        <button 
          type="button"
          class="chord-item" 
          v-for="(item, index) in measure.chord" 
          :key="index" 
          :style="`
            flex-grow: ${item.grow ? item.grow : 1};
            flex-basis: ${100 * ((item.grow ? item.grow : 1) / measure.chord.length)}%;
          `"
          @click="openPopupChord(item.name)"
        >{{ item.name }}</button>
      </div>
      <div class="lyrics" v-if="typeof measure.lyrics === 'string'">{{ measure.lyrics }}</div>
      <div class="lyrics" v-else>
        <div v-for="(lyrics, index) in measure.lyrics" :key="index">{{ lyrics }}</div>
      </div>
    </div>
    <popup-chord :isPopupChord.sync="isPopupChord" :chord="chord" />
  </div>
</template>

<script>
export default {
  data: () => ({
    chord: null,
    isPopupChord: false,
  }),
  props: {
    measure: {
      measure: Number,
      default: 4
    },
    score: {
      type: Object,
      default: {}
    }
  },
  methods: {
    async openPopupChord(name) {
      const chordName = name.replace(/\//gi, '_');
      const result = await this.$content(`chord/${chordName}`).fetch();
      this.chord = result;
      this.isPopupChord = true;
    }
  },
}
</script>

<style lang="scss" scoped>
.score-chord {
  display: grid;
  row-gap: 16px;
  column-gap: 5px;
  font-size: 16px;

  .measure {
    display: grid;
    align-items: flex-start;
    border: 1px solid #cccccc;

    .chord {
      display: flex;
      min-height: 1.5em;

      .chord-item {
        text-align: left;
        padding: 3px 5px;

        &:hover {
          background: #f7f7f7;
        }
      }
    }
    .lyrics {
      display: flex;
      justify-content: space-between;
      padding: 3px 5px;
      min-height: 1.5em;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
}
</style>