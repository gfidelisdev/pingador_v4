const styles = function(colorScheme){
    let theme = {}
    switch (colorScheme) {
        case 'dark':
            theme = {
                button:'bg-slate-800',
                navbar:'bg-slate-600',
                background:'bg-grey-900',
                list:'bg-stone-600',
                list_hover:'',    
                sidebar:'',
                footer:''
            }
            break
        case 'sepia':
            theme = {
                button:'',
                navbar:'',
                background:'',
                list:'',
                sidebar:'',
                footer:''
            }
            break
        case 'warm':
            theme = {
                button:'',
                navbar:'',
                background:'',
                list:'',
                sidebar:'',
                footer:''
            }
            break
        case 'cold':
            theme = {
                button:'',
                navbar:'',
                background:'',
                list:'',
                sidebar:'',
                footer:''
            }
            break
        default:
            theme = {
                button:'bg-grey-300',
                navbar:'',
                background:'',
                list:'',
                sidebar:'',
                footer:''
            }
            break
    }
    return theme
}

module.exports = styles