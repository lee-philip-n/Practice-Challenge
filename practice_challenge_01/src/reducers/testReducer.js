
const initialState = {
  attribute_01: [],
  attribute_02: 0,
};

const testReducer = (state = initialState, action) => {
  let newAttribute_01 = [...state.attribute_01];
  let newAttribute_02 = state.attribute_02 + 1;
  
  switch (action.type) {
    case 'ACTION_TYPE_01':
      newAttribute_01.push({
        strID: state.attribute_02,
        str: action.payload
      });

      return { ...state, attribute_01: newAttribute_01, attribute_02: newAttribute_02 };
    case 'ACTION_TYPE_02':
      newAttribute_01 = newAttribute_01.filter((value) => value.strID !== action.payload);
      return { ...state, attribute_01: newAttribute_01 };;
    default:
      return state;
  }
};

export default testReducer;
