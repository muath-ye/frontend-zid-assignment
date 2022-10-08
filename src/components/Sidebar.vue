vue.<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
        <img src="../assets/vue.svg" alt="vue-logo">
    </div>
    
    <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu">
            <span class="material-icons">
            keyboard_double_arrow_right
            </span>
        </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
        <router-link class="button" to="/profile">
            <span class="material-icons">account_circle</span>
            <span class="text">Profile</span>
        </router-link>
        <router-link class="button" to="/credit-card">
            <span class="material-icons">credit_card</span>
            <span class="text">Credit Card</span>
        </router-link>
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
    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.4s ease-in-out;

        .menu-toggle {
            transition: 0.4s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--light);
                transition: 0.4s ease-out;
            }

            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }
    &.is-expanded {
        width: var(--expanded-sidebar-width);
        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle {
            transform: rotate(-180deg);
            .material-icons {
                color: var(--light);
            }
            &:hover {
                .material-icons {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
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