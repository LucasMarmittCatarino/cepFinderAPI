import React, { useState } from "react";
import { Alert, SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";

import style from './style'
import api from '../../services/api/api'

export default function Home(){
    const [cep, setCep] = useState("")
    const [localidade, setLocalidade] = useState("")
    const [uf, setUf] = useState("")

    async function verificaCep(){
        if (cep == ""){
            Alert.alert("Cep inválido")
            setCep("")
        } else{
            try{
                const resposta = await api.get(`/${cep}/json`)
                setLocalidade(resposta.data.localidade)
                setUf(resposta.data.uf)
            }catch(error){
                console.log("Erro" + error)
            }
        }
    }

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.tittle}>CEP FINDER</Text>
            <TextInput value={cep} onChangeText={(texto) => setCep(texto)} placeholder="CEP" style={style.textoInput}></TextInput>
            <TouchableOpacity style={style.button} onPress={verificaCep}><Text style={style.buttonText}>BUSCAR ENDEREÇO</Text></TouchableOpacity>
            <View style={style.returnContainer}>

                <TextInput 
                value={localidade ? `${localidade},` : ''} 
                onChangeText={(texto) => {
                    const formataTexto = texto.endsWith(',') ? texto : texto + ',';
                    setLocalidade(formataTexto.trim());
                }} 
                style={style.returnText}
                editable={false}
                />

                <TextInput 
                value={uf} 
                onChangeText={(texto) => setUf(texto)} 
                style={style.returnText}
                editable={false}
                />
            </View>
        </SafeAreaView>
    );
}