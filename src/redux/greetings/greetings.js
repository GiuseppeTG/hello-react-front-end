// actions

const GET_GREETINGS = 'redux/greetings/greetings.js/GET_GREETINGS';

// reducer

export default function greetingsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}

//  actions

function getGreeting() {
  return async (dispatch) => {
    const response = await fetch('https://safe-tundra-32740.herokuapp.com/greetings', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      mode: 'no-cors',
    });
    const greetings = await response.json();

    dispatch({
      type: GET_GREETINGS,
      payload: greetings,
    });
  };
}

export { getGreeting };
