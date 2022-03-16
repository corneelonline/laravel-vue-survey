import {createStore} from "vuex";
import axiosClient from '../axios';

const tmpSurveys = [
  {
    id: 100,
    title: "TheCodeholic YouTube channel content",
    slug: "thecodeholic-youtube-channel-content",
    status: 'draft',
    image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
    description: "My name is Marco.<br>I am a Web Developer with 9+ years of experience.",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "4b8b34be-78ae-4785-b47c-5cb8c39c93a9",
              text: "USA"
            },
            {
              uuid: "d5d5f5ce-d994-4ce9-9a71-5076b6233f21",
              text: "Georgia"
            },
            {
              uuid: "ef386354-aa34-4545-a0a0-d5ee79b2085d",
              text: "Germany"
            },
            {
              uuid: "034c5b2f-1fc7-4972-ae9d-4da2cf07103b",
              text: "India"
            },
            {
              uuid: "a769a12d-b257-4a25-9c9f-022ebc8be2f5",
              text: "Netherlands"
            },
          ]
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "Which language videos do you want to see on my channel?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet finibus urna.",
        data: {
          options: [
            {
              uuid: "46db00d5-61b6-4e53-9428-839b1af2e60d",
              text: "Javascript"
            },
            {
              uuid: "cd97f907-5258-4e0b-bc7f-c3c73f4d6ecd",
              text: "PHP"
            },
            {
              uuid: "c7044cd4-fc40-44b6-b2f5-3b7d26c626a4",
              text: "HTML + CSS"
            },
            {
              uuid: "ba0fb584-9b55-41a6-85ae-3578aeea1536",
              text: "All of the above"
            },
          ]
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "Which PHP framework videos do you want to see on my channel?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet finibus urna.",
        data: {
          options: [
            {
              uuid: "19eda513-d935-4da1-9587-8089b848efee",
              text: "Laravel"
            },
            {
              uuid: "10a70f58-bc24-4697-afee-de8af37e3848",
              text: "CodeIgniter"
            },
            {
              uuid: "acf8be86-0144-4b72-9679-d570199e768b",
              text: "Symfony"
            },
          ]
        },
      },
      {
        id: 4,
        type: "radio",
        question: "Which Laravel framework do you love most?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet finibus urna.",
        data: {
          options: [
            {
              uuid: "3d4a4f01-5a73-4508-b7b8-ecdfc230c7dc",
              text: "Laravel 5"
            },
            {
              uuid: "54699c2d-7cab-4ec9-8370-3d6465a2d165",
              text: "Laravel 6"
            },
            {
              uuid: "7326011d-3cf4-4d6f-99d5-e733ad784c03",
              text: "Laravel 7"
            },
            {
              uuid: "7f8bf2ad-2e95-4c80-9638-f284a8b1c7be",
              text: "Laravel 8"
            },
          ]
        },
      },
      {
        id: 5,
        type: "checkbox",
        question: "What type of projects dp you want to see on my channel built with Laravel?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet finibus urna.",
        data: {
          options: [
            {
              uuid: "c6e331e7-b1f0-4eb8-8683-98435f74667f",
              text: "REST API"
            },
            {
              uuid: "cfc10c23-9161-4386-8fd1-7af79074e661",
              text: "E-commerce"
            },
            {
              uuid: "d6f4e9c3-36bc-4a76-ab25-f41aa719a55a",
              text: "Real estate"
            },
            {
              uuid: "09a2f933-503b-4a5c-b934-2a7f5351bd73",
              text: "All of the above"
            },
          ]
        },
      },
      {
        id: 6,
        type: "text",
        question: "What's your favorite YouTube channel?",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What do you think of TheCodeholic channel?",
        description: "Write your honest opinion. Everything is anonymous.",
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "Laravel 8",
    slug: "laravel-8",
    status: 'active',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    description: "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "Vue 3",
    slug: "vue-3",
    status: 'active',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    description: "Vue is an approachable, performant and versatile framework for building web user interfaces.",
    created_at: "2021-12-21 17:00:00",
    updated_at: "2021-12-21 17:00:00",
    expire_date: "2021-12-31 00:00:00",
    questions: [],
  },
  {
    id: 400,
    title: "Tailwind 3",
    slug: "tailwind-3",
    status: 'active',
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description: "Tailwind is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    created_at: "2021-12-21 14:00:00",
    updated_at: "2021-12-21 14:00:00",
    expire_date: "2021-12-31 00:00:00",
    questions: [],
  },
]

export const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
    currentSurvey: {
      loading: false,
      data: {}
    },
    surveys: [...tmpSurveys],
    questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
  },
  getters: {},
  actions: {
    getSurvey({ commit }, id) {
      commit("setCurrentSurveyLoading", true);
      return axiosClient
        .get(`/survey/${id}`)
        .then((res) => {
          commit("setCurrentSurvey", res.data);
          commit("setCurrentSurveyLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentSurveyLoading", false);
          throw err;
        });
    },
    saveSurvey({ commit }, survey) {
      delete survey.image_url;
      let response;
      if (survey.id) {
        response = axiosClient
          .put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit("setCurrentSurvey", res.data);
            return res;
          });
      } else {
        response = axiosClient.post("/survey", survey).then((res) => {
          commit("setCurrentSurvey", res.data);
          return res;
        });
      }

      return response;
    },
    deleteSurvey({}, id) {
      return axiosClient.delete(`/survey/${id}`);
    },
    register({ commit }, user) {
      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },
    login({ commit }, user) {
      return axiosClient.post('/login', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },
    logout({commit}) {
      return axiosClient.post('/logout')
      .then(response => {
        commit('logout');
        return response;
      })
    }
  },
  mutations: {
    setCurrentSurveyLoading: (state, loading) => {
      state.currentSurvey.loading = loading;
    },
    setCurrentSurvey: (state, survey) => {
      state.currentSurvey.data = survey.data;
    },
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    },
  },
  modules: {}
})

export default store;
