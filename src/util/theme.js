export default {
    palette: {
        primary: {
            light: '#F2F2F2',
            main: '#F2F2F2',
            dark: '#6487A5',
            contrastText: '#3B566E'
        },
        secondary: {
            light: '#22B4DE',
            main: '#ED199',
            dark: '#6487A5',
            contrastText: '#3B566E'
        }
    },
    spreadThis: {
        typography: {
            useNextVariants: true
        },
        form: {
            textAlign: 'center'
        },
        image: {
            margin: '20px auto 20px auto'
        },
        pageTitle: {
            margin: '10px auto 10px auto',
            color: '#3B566E'
        },
        textField: {
            margin: '10px auto 10px auto',
            color: '#3B566E'
        },
        button: {
            marginTop: 20,
            position: 'relative',
            color: '#3B566E'
        },
        customError: {
            color: 'red',
            fontSize: '0.8rem',
            marginTop: 10
        },
        progress: {
            position: 'absolute'
        },
        invisibleSeperator: {
            border: 'none',
            margin: 4
        },
        visibleSeperator: {
            width: '100%',
            borderBottom: '1px solid rgba(0, 0,0 ,0.1)',
            marginBottom: '20px'
        },
        paper: {
            padding: 20
        },
        profile: {
            '& .image-wrapper': {
                textAlign: 'center',
                position: 'relative',
                '& button': {
                    position: 'absolute',
                    top: '80%',
                    left: '70%'
                }
            },
            '& .profile-image': {
                width: 200,
                height: 200,
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '50%'
            },
            '& .profile-details': {
                textAlign: 'center',
                '& span, svg': {
                    verticalAlign: 'middle'
                },
                '& a': {
                    color: '#00bcd4'
                }
            },
            '& hr': {
                border: 'none',
                margin: '0 0 10px 0'
            },
            '& svg.button': {
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        },
        buttons: {
            textAlign: 'center',
            '& a': {
                margin: '20px 10px'
            }
        },
        navbarDesign: {
            fontWeight: 'bold',
            color: '#3B566E'
        }
    }
}