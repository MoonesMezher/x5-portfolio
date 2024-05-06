import {Dispatch, ReactNode, createContext, useReducer} from "react";


const initialState =  {
    admin: localStorage.getItem('admin')? localStorage.getItem('admin'): false
};

type TAction = { type: string };
type TState = {
    admin: string | boolean | null;
};

export const AdminContext = createContext<{ state: TState; dispatch: Dispatch<TAction> }>({
    state: initialState,
    dispatch: () => {}
});

const adminReducer = (state : TState, action: TAction ) => {
    console.log(state, action.type);
    
    switch(action.type) {
        case "LOGIN": 
            localStorage.setItem('admin', 'true');
            console.log(state);
            
            return {
                admin: true
            };
        case "LOGOUT":
            localStorage.removeItem('admin');
            return {
                admin: false
            };
        default:
            localStorage.removeItem('admin');
            return {
                admin: false
            };
    }
}

export const AdminContextProvider = ({ children } : { children: ReactNode }) => {
    const [state, dispatch] = useReducer<(state: TState, action: TAction) => TState>(adminReducer, initialState)

    return (
        <AdminContext.Provider value={{state, dispatch}}>
            { children }
        </AdminContext.Provider>
    );
}