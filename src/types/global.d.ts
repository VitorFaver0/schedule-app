import { Dispatch, SetStateAction } from "react";

export {};

declare global {
    type AuthContextType = {
        user: any | null
        logout: Function
        loginWithGoogle: Function
        loginWithFacebook: Function
        login: Function
        register: Function
    }
}