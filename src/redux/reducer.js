import { START, STOP } from "./actionType"

const initState={
    isStop:false,
    imageData:[{
        id:1,
        description:"A serene natural scene unfolds as the sun dips below the horizon, casting a warm golden glow upon the tranquil lake. Tall trees sway gently in the breeze, their leaves rustling in harmony. Birds soar gracefully across the canvas of the sky, while colorful flowers bloom, adding vibrant splashes to the picturesque landscape.",
        link:"https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?size=626&ext=jpg&ga=GA1.2.1670535538.1685858779&semt=sph"
    },
    {
        id:2,
        description:"A serene natural scene unfolds as the sun dips below the horizon, casting a warm golden glow upon the tranquil lake. Tall trees sway gently in the breeze, their leaves rustling in harmony. Birds soar gracefully across the canvas of the sky, while colorful flowers bloom, adding vibrant splashes to the picturesque landscape.",
        link:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1670535538.1685858779&semt=sph"
    },
    {
        id:3,
        description:"A serene natural scene unfolds as the sun dips below the horizon, casting a warm golden glow upon the tranquil lake. Tall trees sway gently in the breeze, their leaves rustling in harmony. Birds soar gracefully across the canvas of the sky, while colorful flowers bloom, adding vibrant splashes to the picturesque landscape.",
        link:"https://img.freepik.com/free-photo/fog-dark-clouds-mountains_1204-503.jpg?size=626&ext=jpg&ga=GA1.1.1670535538.1685858779&semt=sph"
    },
    {
        id:4,
        description:"A serene natural scene unfolds as the sun dips below the horizon, casting a warm golden glow upon the tranquil lake. Tall trees sway gently in the breeze, their leaves rustling in harmony. Birds soar gracefully across the canvas of the sky, while colorful flowers bloom, adding vibrant splashes to the picturesque landscape.",
        link:"https://img.freepik.com/free-photo/wet-vietnam-mountain-flow-stream-rural_1417-1357.jpg?size=626&ext=jpg&ga=GA1.1.1670535538.1685858779&semt=sph"
    },

]
}
export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case START:{
            return{...state,isStop:true}
        }
        case STOP:{
            return{...state,isStop:false}
        }
        default:{
            return state
        }
    }
}