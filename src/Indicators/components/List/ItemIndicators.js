import React, {useContext} from 'react'
import { ListItem } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialIcons';
import TitleContext from '../../../help/contexts/TitleContext';

export default function ItemList({ detail, navigation }) {

    const handleSetName = useContext(TitleContext)

    return (
        <ListItem
            key={detail.codigo}
            title={detail.nombre}
            secondaryText={detail.unidad_medida}
            onPress={() => {
                navigation.navigate('Historico', {
                    idIndicator: detail.codigo
                })
                handleSetName(detail.nombre)
            }
            }
            trailing={props => <Icon onPress={() => {
                navigation.navigate('Detalles', {
                    idIndicator: detail.codigo
                })
                handleSetName(detail.nombre)
            }
            }
                name="info" {...props} color="#93c5fd" />
            }
        />
    )
}