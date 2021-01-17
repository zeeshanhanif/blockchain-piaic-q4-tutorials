
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
export const UPDATE_NAME = "UPDATE_NAME";

export const increment = ()=>{
    return { type: INCREMENT  };
}

export const decrement = ()=>{
    return { type: DECREMENT  };
}

export const incrementByValue = (counterValue)=>{
    return { type: INCREMENT_BY_VALUE, data: counterValue  };
}

export const updateName = (name)=>{
    return { type: UPDATE_NAME, data: name };
}