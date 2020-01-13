var Vue = require('vue').default

export default {
  namespaced: true,
  state() {
    return {
      inspections: [
        {
          id: 1,
          apiary: 'Backyard',
          hive: 1,
          date: '2020-01-08',
          impression: -1,
          attention: 1,
          reminder: '2020-02-01',
          note: 'replace battery',
        },
        {
          id: 2,
          apiary: 'Garden',
          hive: 6,
          date: '2020-01-06',
          impression: 1,
          note: 'put extra layer on top',
          reminder: '2020-02-01',
        },
        {
          id: 3,
          apiary: 'Lakeside',
          date: '2019-12-23',
          attention: 1,
          note: 'beez are humming!',
          reminder: '2020-02-01',
        },
        {
          id: 4,
          apiary: 'Backyard',
          hive: 2,
          date: '2019-11-08',
          reminder: '2020-02-01',
        },
        {
          id: 5,
          apiary: 'Garden',
          date: '2019-06-01',
          impression: 0,
          note: 'not sure what the mould means',
          reminder: '2020-02-01',
        },
        {
          id: 6,
          apiary: 'Garden',
          hive: 5,
          date: '2019-04-21',
          attention: 1,
          reminder: '2020-02-01',
        },
        {
          id: 7,
          apiary: 'Lakeside',
          date: '2019-01-06',
          impression: 2,
          attention: 1,
          reminder: '2020-02-01',
        },
      ],
    }
  },
  getters: {},

  mutations: {},

  actions: {},
}
