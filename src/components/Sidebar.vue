<template>
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
  width: calc(4rem);
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

  h3, .button, .text {
      opacity: 0;
      transition: 0.5s ease-out;
  }

  h3 {
    color: var(--dark-alt);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    cursor: default;
  }
  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      opacity: 1;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover, &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-icons, .text {
          color: var(--primary);
        }
      }
    }
    .router-link-exact-active {
      border-left: 0.2rem;
      border-left-color: var(--primary);
      border-left-style: solid;
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
    h3, .button, .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
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

    .menu {
      .button {
        .material-icons {
          color: var(--dark-alt);
        }

        .text {
          color: var(--dark-alt);
        }
        &:hover, &.router-link-exact-active {
          background-color: var(--dark-alt);

          .material-icons, .text {
            color: var(--primary);
          }
        }
      }
      .router-link-exact-active {
        border-left: 0.2rem;
        border-left-color: var(--primary);
        border-left-style: solid;
      }
    }

    .menu-toggle-wrap {
        .menu-toggle {
          .material-icons {
            color: var(--dark-alt);
          }
          &:hover {
            .material-icons {
              color: var(--primary);
            }
          }
        }
      }

    &.is-expanded {
      .menu-toggle-wrap {
        .menu-toggle {
          .material-icons {
            color: var(--dark-alt);
          }
          &:hover {
            .material-icons {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}
</style>