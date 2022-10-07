const initval = 0;
const UpDown = (state = initval,action)  => {
    switch (action.type) {
        case "INCR":
            
           return state = state+1;
        case "DECR":
            {if(state<=0)
            {
                return state;
            }}
          
        return state = state-1;

        default:
           return state;
    }
}
export default UpDown;