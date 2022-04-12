import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "TestName",
          lastName: "TestLastName",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm TestName and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "TestName2",
          lastName: "TestLastName2",
          areas: ["frontend", "career"],
          description:
            "I am TestName2 and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
