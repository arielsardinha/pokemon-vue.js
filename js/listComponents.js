Vue.component("my-list", {
  template: `
        <li class="poke-list-item">
          <img v-bind:src="sprite"/>
          <span>{{pokemon.name}} - {{pokemon.number | pokeNumber}}</span>
        </li>
  `,
  props: ["pokemon"],
  computed: {
    number: function () {
      return Vue.filter("pokeNumber")(this.pokemon.number);
    },
    sprite: function () {
      return `//serebii.net/pokedex-xy/icon/${this.number}.png`;
    },
  },
});
