Vue.component("my-list", {
  template: `
        <li class="poke-list-item">
          <img
            v-bind:src="'//serebii.net/pokedex-xy/icon/'+pokemon.number+'.png'"
            alt=""
          />
          <span>{{pokemon.name}} - {{pokemon.number | pokeNumber}}</span>
        </li>
  `,
  props: ["pokemon"],
});
