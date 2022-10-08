vue.<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
        <img src="../assets/vue.svg" alt="vue-logo">
    </div>
    <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
            <span class="material-symbols-outlined">
            keyboard_double_arrow_right
            </span>
        </button>
    </div>
  </aside>
</template>

<script setup ts>
import {ref} from 'vue'
const is_expanded = ref(false)
const ToggleMenu = () => {
    is_expanded.value = ! is_expanded.value
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
	width: calc(2rem);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    transition: 0.4s ease-out;
    box-shadow:
        0 8px 10px -5px rgb(0 0 0 / 20%),
        0 16px 24px 2px rgb(0 0 0 / 14%),
        0 6px 30px 5px rgb(0 0 0 / 12%);
    .logo {
        margin-bottom: 1rem;
        img {
            width: 2rem;
        }
    }
    &.is-expanded {
        width: var(--expanded-sidebar-width);
        .menu-toggle-wrap {
            top: -3rem;
        }
    }
    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
@media (prefers-color-scheme: dark) {
  aside {
    background-color: var(--dark);
    color: var(--light);
  }
}

@media (prefers-color-scheme: light) {
  aside {
    background-color: var(--light);
    color: var(--dark-alt);
  }
}
</style>