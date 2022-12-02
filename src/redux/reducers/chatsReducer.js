

const initialState = {
chats: [
  {
    id: 1,
    name: 'Mira'
  },
  {
    id: 2,
    name: 'Natasha'
  },
  {
    id: 3,
    name: 'Nikita'
  }
]
}

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}