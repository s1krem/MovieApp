import { StyleSheet } from 'react-native';

const movieDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        paddingVertical: 15,

    },
    label: {
        color: '#AAAAAA',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 4,
        textAlign: 'left', 
    },
    value: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'left',
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
    },
    noDataText: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default movieDetailsStyles;
