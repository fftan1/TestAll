
const MultiNav = {
  navigatorRef: {},
  navigatorName: {
    LoginNavigate: 'LoginNavigate',
  },
  setNavigator: (name, ref) => {
    MultiNav.navigatorRef[name] = ref;
  },
  getNavigator: (name) => {
    return MultiNav.navigatorRef[name];
  },
};

export default MultiNav;
