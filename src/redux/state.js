


let posts = [
    {id:1, message: 'Hi, how are you?', likesCount: 12},
    {id:2, message: 'It\'s my first post', likesCount: 11},
    {id:3, message: 'Bla-bla', likesCount: 9},
    {id:4, message: 'Da-da', likesCount: 8},
  ]
  
  let dialogs = [
    {id:1, name:'Dimych'},
    {id:2, name:'Andrey'},
    {id:3, name:'Sveta'},
    {id:4, name:'Sasha'},
    {id:5, name:'Viktor'},
    {id:6, name:'Valera'},
  
  ]
  
  let messages = [
    {id:1, message:'Hi'},
    {id:2, message:'How is you it-kamasutra?'},
    {id:3, message:'Yoo'},
    {id:4, message:'AU_AU'},
    {id:5, message:'UOOO'},
  ]

  let state = {
      profilePage:{

    posts:[
        {id:1, message: 'Hi, how are you?', likesCount: 12},
        {id:2, message: 'It\'s my first post', likesCount: 11},
        {id:3, message: 'Bla-bla', likesCount: 9},
        {id:4, message: 'Da-da', likesCount: 8},
      ]
    },
    dialogsPage:{
      dialogs:[
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Viktor'},
        {id:6, name:'Valera'},
            ],

             messages:[
        {id:1, message:'Hi'},
        {id:2, message:'How is you it-kamasutra?'},
        {id:3, message:'Yoo'},
        {id:4, message:'AU_AU'},
        {id:5, message:'UOOO'},
      ]
    }
  }
  export default state;