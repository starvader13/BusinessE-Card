import {atom, selector} from "recoil";

export const signUpResponseAtom = atom({
    key: "signUpResponseAtom",
    default: ""
});

export const signInResponseAtom = atom({
    key: "signInResponseAtom",
    default: ""
})

export const signedAtom = selector({
    key: "signedAtom",
    get: ()=>{
        return !!window.localStorage.getItem("authorization")
    }
})
