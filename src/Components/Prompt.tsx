// @ts-ignore
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, Button, TouchableOpacity, Text, TextInput} from "react-native";
import {styles} from '../../Styles.js';
const Prompt = ({visiblePrompt, setVision, onChangeNumber, number, chagePage, maxPage}) => {

    const local_style = styles.prompt
    const [varning, setVarning] = useState(false);

    return (<>
            {visiblePrompt?
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={local_style.container}
                >
                    <TouchableOpacity onPress={(event)=>{setVision(!visiblePrompt); event.stopPropagation()}} style={local_style.window}>
                        <TouchableOpacity  onPress={(event)=>{ event.stopPropagation()}} style={local_style.body}>
                            <Text style={{fontSize:20}}>Put number page</Text>
                            <TextInput
                                style={local_style.input}
                                onChangeText={(text)=>{
                                    if (varning){
                                        setVarning(false)
                                    }
                                    onChangeNumber(text.replace(/[^0-9]/g, ''))
                                }}
                                value={number}
                                keyboardType={'numeric'}
                                placeholder='page number'
                            />
                            {varning?<Text style={{color:'#f00'}}>max page: {maxPage}</Text>:<></>}
                            <Button
                                title="GO!"
                                onPress={()=>{
                                    if (number <= maxPage && number >= 1){
                                        chagePage();
                                        setVarning(false);
                                        setVision(!visiblePrompt);
                                    }else {
                                        setVarning(true);
                                        onChangeNumber(1)
                                    }
                                }} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                :
                <></>
            }
    </>

    );
};

export default Prompt;