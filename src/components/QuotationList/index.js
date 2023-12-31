import React, { Fragment } from "react";
import {View, Text, ScrollView,TouchableOpacity, FlatList} from "react-native";
import styles from "./styles";
import QuotationItem from "./QuotationItem";

export default function QuotaionList(props){
    const dayQuery = props.filterDay

    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() =>dayQuery(7)}
            >
                <Text style={styles.textButtonQuery}>
                    7D
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() =>dayQuery(15)}
            >
                <Text style={styles.textButtonQuery}>
                    15D
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() =>dayQuery(30)}
            >
                <Text style={styles.textButtonQuery}>
                    1M
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() =>dayQuery(90)}
            >
                <Text style={styles.textButtonQuery}>
                    3M
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() =>dayQuery(180)}
            >
                <Text style={styles.textButtonQuery}>
                    6M
                </Text>
            </TouchableOpacity>
            
        </View>
        <ScrollView>
            <FlatList
                data={props.listTransactions}
                renderItem={({item})=>{
                    return <QuotationItem valor={item.valor} data={item.data}/>
                }}
                scrollEnabled={false}
            />
        </ScrollView>
        
        </Fragment>
    )
}
