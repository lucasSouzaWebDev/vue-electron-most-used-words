<template>
  <v-container fluid>
    <v-form>
      <v-file-input label="Selecione as legendas" prepend-icon="mdi-message-text" append-outer-icon="mdi-send" outlined multiple chips v-model="files" @click:append-outer="processSubtitles" />
    </v-form>
    <div class="pills">
      <PillComponent
        v-for="(word, i) in groupedWords"
        :key="i"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from 'electron'
import PillComponent from "./PillComponent";

export default {
  components: {
    PillComponent,
  },
  data: function () {
    return {
      files: [],
      groupedWords: [],
    };
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map(f => f.path)
      ipcRenderer.send('process-subtitles', paths)
      ipcRenderer.on('process-subtitles', (event, response) => {
        this.groupedWords = response
      })
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>