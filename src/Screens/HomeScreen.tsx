// @ts-ignore
import React, {useContext, useEffect, useState} from "react";
import PersonageListComponent from "../Components/PersonageList";
import TabBar from "../Components/TabBar";

export  const HomeScreen = ({ navigation, route }, props) => {
    return (
        <>
            <PersonageListComponent navigation={navigation} />
            <TabBar navigation={navigation}/>
        </>


    );
};
