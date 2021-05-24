import React, { useState, createContext , useEffect} from 'react';
import firebase from '../services/firebaseConnection'
import AsyncStorage from '@react-native-community/async-storage'
export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    //para que seja chamado ao recarregar usamos o useEffect que tera a função loadStorage que ira pegar o valor e passar par o setUser. Então o estado de usuario logado ser mantido
    useEffect(()=>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoading(false);
            }
            setLoading(false)
        }
        loadStorage()
    },[])
    //Função para Logar usuário
        async function signIn(email, password){
            await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value)=>{
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                .then((snapshot)=>{
                    let data = {
                        uid: uid,
                        nome: snapshot.val().nome, 
                        email: value.user.email,
                    }
                    setUser(data)
                    storageUser(data)
                })
            })
            .catch((error)=>{
                alert(error.code)
            })
        }

    
    //Cadastrar usuario
    async function signUp(email, password, nome){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({ //aqui ele gera os dados referentes ao usuario para a database
                saldo: 0,
                nome: nome
            })
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                };
                setUser(data);
                storageUser(data)
            })
        })
    }

//A função ira setar o valor de Auth_user no data, e para isso ira transformar o data em string
async function storageUser(data){
    await AsyncStorage.setItem('Auth_user',JSON.stringify(data))
}

async function signOut (){
    await firebase.auth().signOut()
    await AsyncStorage.clear()
    .then(()=>{
        setUser(null)
    })
}
    return(
     <AuthContext.Provider value={{ signed: !!user , user, signUp, signIn, loading, signOut}}>
         {children}
     </AuthContext.Provider>   
    );
}

export default AuthProvider;