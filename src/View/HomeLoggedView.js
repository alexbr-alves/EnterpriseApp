import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, Image, View } from "react-native";
import styles from '../Style/HomeLoggedStyle';

import image from "../../assets/imagens/image_team.png";
import CustomButton from "../Component/customButton";
import { routeName } from "../routes/route_name";

import HomeLoggedViewModel from "../ViewModel/HomeLoggedViewModel";

export default function HomeLoggedView() {
    const route = useRoute();
    const navigation = useNavigation();
    const { handleMock, activeLoading } = HomeLoggedViewModel()

    handleMock(route.params.email);
    return (
        <View style={styles.container}>
            {activeLoading ?
                <ActivityIndicator size={'large'} color={'#923CFF'} style={styles.indicator} />
                :
                <View style={styles.container_botao}>
                    <Image style={styles.image} source={image} />

                    <CustomButton
                        styleButton={styles.botao}
                        styleText={styles.botao__text}
                        onPress={() => navigation.navigate(routeName.company_data, { email: route.params.email })}
                        text={"My data"}
                    />
                    <CustomButton
                        styleButton={styles.botao}
                        styleText={styles.botao__text}
                        onPress={() => navigation.navigate(routeName.employee_list, { email: route.params.email })}
                        text={"Employee"}
                    />

                    <CustomButton
                        styleButton={styles.botao}
                        styleText={styles.botao__text}
                        onPress={() => navigation.navigate(routeName.supplier_list, { email: route.params.email })}
                        text={"Supplier"}
                    />

                    <CustomButton
                        styleButton={styles.botao}
                        styleText={styles.botao__text}
                        onPress={() => navigation.navigate(routeName.product_list, { email: route.params.email })}
                        text={"Product"}
                    />

                    <CustomButton
                        styleButton={styles.botaoSair}
                        styleText={styles.botaoSair__text}
                        onPress={() => navigation.navigate(routeName.wellcome)}
                        text={"Logout"}
                    />

                </View>
            }
        </View>
    )
}

