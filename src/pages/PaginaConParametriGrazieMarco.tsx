import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "PaginaConParametriGrazieMarco">

const PaginaConParametriGrazieMarco: React.VFC<Props> = (props: Props) => {

    console.log("Parametro in input", props.route.params.parametro);

    return (
        <SafeAreaView>
            <View>
                <Text>PaginaConParametriGrazieMarco</Text>

                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image
                        style={{
                            width: 40,
                            height: 40
                        }}
                        source={{
                            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAZlBMVEX39/cAAAD7+/v///+/v7/V1dVvb2/e3t7X19d+fn6GhoaTk5NjY2Po6Oh1dXV4eHiMjIyZmZmhoaHKyspYWFisrKzDw8Ps7Oy0tLRbW1sPDw/j4+NQUFBVVVUcHBwVFRUmJiawsLDq+9JCAAAC0ElEQVR4nO3di1IaMRSHcZJwKbUFL7RqFW3f/yWLHduim0Am4OSc/37fAzjnN2HjLpfdyYSIiIioVOo9wIcV4zLG3kN8TDE+hkdN3AstaOJi3IagiftLE8T9p4Ww1cLt08RwMW7CfhsdXIz3IWjihjQdXIYWwr2ELW0ytN3KCZxbFmi73dI9Lm0LNP+44qr5x6XcNrK3oTjGZXfINzi3u2X8coS2w/WesbEKWni67T1lUzW0n7cuX5Rp3LQnXdozNGONnCZ8rCnTvvqkzaH5a+S0Z2jGGjntBzRjQes9ZkvQeo/ZUhXtwSdtBc1faQ3NXzW0AM1Y0HqP2ZIybQnNX1W0BTRbQes9ZkvQeo/ZUvoMzV/Qeo/ZErTeY7ZUR3P5hc8q2idotkqX0PwFrfeYLUHrPWZL0HqP2VK6GDdtBs1W0HqP2RK03mO2BK33mC2lq3HTbqDZauy0WYpGO5l2eTO12sOJNMtNiyvnnla2peveo51cySZAK9kUaAWbBC1v06BlbSK0nE2FlrHJ0IY2HdrAJkR7b4uL3gOdscG6TXtPdL6Gx5sOLrNPyuBy/99UcNnzEhFc/nxSA1e4DrjrPdc5Kl2/KeCK190CuPL7Jf5xB97nco8r2/zjDtjqcBeLmdUO3q+zCjd1+XlANe7wH7FaFe5OGSe9cm5xv8D1HrOt9A1c7zHbAieN+w7OXuDAGQwcOINp42o+NJbG+fwuLDhwJgMHzmDgwBlM+Nc64MCZDJw0zuePbcE5xun+vB0cOJOBA2cw4Tt4Sd95DRw4k4EDZzBtnO6t3MF5vVM9OHAmY0MBZzDhJ1aB8/o0RnC8LE1WgVs7pVXglk5PvV468sThtWPaEdzKNW2HW8nSDuD804o4BVrhmNOgZVdOhZbB6dAGOCXaO9xcivYGp0bb4eaytH84RdorTpP2B6dKm0zildtL0eMJ04iIiIiIyES/Aci9Tr+BIwijAAAAAElFTkSuQmCC'
                        }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PaginaConParametriGrazieMarco;