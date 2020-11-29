const state = {
  notes: [],
  timestamps: []
};
const EventBus = new Vue();
const inputComponent = {
  template: `<input 
    :placeholder="placeholder"
    v-model="input"
    @keyup.enter="monitorEnterKey"
    class="input is-small" type="text" />`,
  props: ['placeholder'],
  data() {
    return {
      input: ''
    }
  },
  methods: {
    monitorEnterKey() {
      store.dispatch('addNote', this.input);
      store.dispatch('addTimestamp', new Date().toLocaleString());
      this.input = '';
    }
  }
};

const noteCountComponent = {
  template:
    `<div class="note-count">
      Note count: 
      <strong>{{ noteCount }}</strong>
    </div>`,
    computed: {
      noteCount() {
        return this.$store.getters.getNoteCount;
      }
    }
};

const mutations = {
  ADD_NOTE (state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESTAMP (state, payload) {
    let newTimeStamp = payload;
    state.timestamps.push(newTimeStamp);
  }
};

const actions = {
  addNote (context, payload) {
    context.commit('ADD_NOTE', payload);
  },
  addTimestamp (context, payload) {
    context.commit('ADD_TIMESTAMP', payload);
  }
};

const getters = {
  getNotes: state => state.notes,
  getTimestamps: state => state.timestamps,
  getNoteCount: state => state.notes.length
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

new Vue({
  el: '#app',
  store,
  computed: {
    notes() {
      return this.$store.getters.getNotes;
    },
    timestamps() {
      return this.$store.getters.getTimestamps;
    }
  },
  components: {
    'input-component': inputComponent,
    'note-count-component': noteCountComponent
  }  
})
