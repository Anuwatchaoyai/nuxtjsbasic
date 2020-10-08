import Vuex from "vuex"
import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadData: []
        },
        mutations: {
            setPostState(state, posts) {
                state.loadData = posts
            },
            addPostState(state, posts) {
                state.loadData.push(posts)
            },
            editPostState(state, editposts) {
                const postIndex = state.loadData.findIndex(
                    post => post.id === editposts.id
                )
                state.loadData[postIndex] = editpost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get("https://nuxt-tutorail.firebaseio.com/posts.json")
                    .then((res) => {
                        const data = [];
                        for (const key in res.data) {
                            data.push({ ...res.data[key], id: key });
                        }
                        vuexContext.commit("setPostState", data)
                    }).catch(e => context.error(e));
            },
            addPost(vuexContext, context) {
                const createPost = { ...post }
                return axios
                    .post("https://nuxt-tutorail.firebaseio.com/posts.json", createPost)
                    .then((res) => {
                        vuexContext.commit("addPostState", { ...createPost, id: res.data.name })
                    }).catch(e => context.error(e));
            },
            editPost(vuexContext, post) {
                return axios
                    .put(
                        "https://nuxt-tutorail.firebaseio.com/posts/" +
                        post.id +
                        ".json", post)
                    .then((res) => {
                        vuexContext.commit("editPostState", post)
                    }).catch(e => context.error(e));
            }
        },
        getters: {
            getAllPosts(state) {
                return state.loadData
            }
        }
    });
};
export default createStore